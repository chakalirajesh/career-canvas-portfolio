import { useState } from "react";
import "./AddEducation.css";

function AddEducation() {
  const [degree, setDegree] = useState("");
  const [college, setCollege] = useState("");
  const [branch, setBranch] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await fetch("http://localhost:8080/education", {
        method: "POST",
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
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to add education");
      }

      setMessage("Education added successfully.");

      setDegree("");
      setCollege("");
      setBranch("");
      setStartYear("");
      setEndYear("");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="add-education-page">
      <div className="add-education-header">
        <div>
          <span>ADMIN</span>
          <h1>Add Education</h1>
          <p>Add your academic information.</p>
        </div>

        <button
          className="add-education-back"
          onClick={() => {
            window.location.href = "/admin/education";
          }}
        >
          Back
        </button>
      </div>

      <form className="add-education-form" onSubmit={handleSubmit}>
        <div className="add-education-group">
          <label>Degree</label>
          <input
            type="text"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
            placeholder="Bachelor of Technology"
            required
          />
        </div>

        <div className="add-education-group">
          <label>College</label>
          <input
            type="text"
            value={college}
            onChange={(e) => setCollege(e.target.value)}
            placeholder="College Name"
            required
          />
        </div>

        <div className="add-education-group">
          <label>Branch</label>
          <input
            type="text"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            placeholder="Computer Science and Engineering"
            required
          />
        </div>

        <div className="add-education-row">
          <div className="add-education-group">
            <label>Start Year</label>
            <input
              type="number"
              value={startYear}
              onChange={(e) => setStartYear(e.target.value)}
              min="1900"
              max="2100"
              required
            />
          </div>

          <div className="add-education-group">
            <label>End Year</label>
            <input
              type="number"
              value={endYear}
              onChange={(e) => setEndYear(e.target.value)}
              min="1900"
              max="2100"
              required
            />
          </div>
        </div>

        <button className="add-education-submit" type="submit">
          Add Education
        </button>

        {message && <p className="add-education-message">{message}</p>}
      </form>
    </div>
  );
}

export default AddEducation;
