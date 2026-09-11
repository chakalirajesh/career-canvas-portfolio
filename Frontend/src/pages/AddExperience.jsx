import { useEffect, useState } from "react";
import "./AddExperience.css";

function AddExperience() {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const loggedIn = sessionStorage.getItem("adminLoggedIn");

    if (loggedIn !== "true") {
      window.location.href = "/admin/login";
    }
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await fetch("https://career-canvas-portfolio.onrender.com/experience", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          company,
          role,
          description,
          startDate,
          endDate: endDate || null,
        }),
      });

      let data = {};

      try {
        data = await response.json();
      } catch {
        data = {};
      }

      if (!response.ok) {
        throw new Error(data.message || "Failed to add experience");
      }

      setMessage("Experience added successfully.");

      setCompany("");
      setRole("");
      setDescription("");
      setStartDate("");
      setEndDate("");
    } catch (error) {
      console.error(error);
      setMessage(error.message || "Something went wrong");
    }
  };

  return (
    <div className="add-experience-page">
      <div className="add-experience-header">
        <div>
          <span>ADMIN</span>
          <h1>Add Experience</h1>
          <p>Add professional experience.</p>
        </div>

        <button
          className="add-experience-back"
          onClick={() => {
            window.location.href = "/admin/experience";
          }}
        >
          Back
        </button>
      </div>

      <form className="add-experience-form" onSubmit={submit}>
        <div className="add-experience-group">
          <label>Company</label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />
        </div>

        <div className="add-experience-group">
          <label>Role</label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
        </div>

        <div className="add-experience-group">
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="add-experience-row">
          <div className="add-experience-group">
            <label>Start Date</label>
            <input
              type="text"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              placeholder="2025-06"
              required
            />
          </div>

          <div className="add-experience-group">
            <label>End Date</label>
            <input
              type="text"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              placeholder="2026-02 or leave blank"
            />
          </div>
        </div>

        <button className="add-experience-submit" type="submit">
          Add Experience
        </button>

        {message && <p className="add-experience-message">{message}</p>}
      </form>
    </div>
  );
}

export default AddExperience;
