import { useEffect, useState } from "react";
import "./EditEducation.css";

function EditEducation({ educationId }) {
  const [degree, setDegree] = useState("");
  const [college, setCollege] = useState("");
  const [branch, setBranch] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const loggedIn = sessionStorage.getItem("adminLoggedIn");

    if (loggedIn !== "true") {
      window.location.href = "/admin/login";
      return;
    }

    const loadEducation = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/education/${educationId}`,
          {
            credentials: "include",
          }
        );

        if (!response.ok) {
          throw new Error("Education record not found");
        }

        const data = await response.json();

        setDegree(data.degree || "");
        setCollege(data.college || "");
        setBranch(data.branch || "");
        setStartYear(data.startYear || "");
        setEndYear(data.endYear || "");
      } catch (error) {
        setMessage(error.message);
      }
    };

    loadEducation();
  }, [educationId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await fetch(
        `http://localhost:8080/education/${educationId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            degree,
            college,
            branch,
            startYear: Number(startYear),
            endYear: Number(endYear),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to update education"
        );
      }

      setMessage("Education updated successfully.");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="edit-education-page">

      <div className="edit-education-header">
        <div>
          <span>ADMIN</span>
          <h1>Edit Education</h1>
          <p>Update your academic information.</p>
        </div>

        <button
          className="edit-education-back"
          onClick={() => {
            window.location.href = "/admin/education";
          }}
        >
          Back
        </button>
      </div>

      <form
        className="edit-education-form"
        onSubmit={handleSubmit}
      >
        <div className="edit-education-group">
          <label>Degree</label>
          <input
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
            required
          />
        </div>

        <div className="edit-education-group">
          <label>College</label>
          <input
            value={college}
            onChange={(e) => setCollege(e.target.value)}
            required
          />
        </div>

        <div className="edit-education-group">
          <label>Branch</label>
          <input
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            required
          />
        </div>

        <div className="edit-education-row">

          <div className="edit-education-group">
            <label>Start Year</label>
            <input
              type="number"
              value={startYear}
              onChange={(e) => setStartYear(e.target.value)}
              required
            />
          </div>

          <div className="edit-education-group">
            <label>End Year</label>
            <input
              type="number"
              value={endYear}
              onChange={(e) => setEndYear(e.target.value)}
              required
            />
          </div>

        </div>

        <button
          className="edit-education-submit"
          type="submit"
        >
          Update Education
        </button>

        {message && (
          <p className="edit-education-message">
            {message}
          </p>
        )}
      </form>
    </div>
  );
}

export default EditEducation;