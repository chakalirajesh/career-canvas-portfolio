import { useState } from "react";
import "./AddSkill.css";

function AddSkill() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await fetch("https://career-canvas-portfolio.onrender.com/skills", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          name,
          category,
          level,
        }),
      });

     if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || "Failed to add skill");
    }
      setMessage("Skill added successfully.");

      setName("");
      setCategory("");
      setLevel("");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="add-skill-page">
      <div className="add-skill-header">
        <div>
          <span>ADMIN</span>
          <h1>Add Skill</h1>
          <p>Add a new technical skill to your portfolio.</p>
        </div>

        <button
          className="add-skill-back"
          onClick={() => {
            window.location.href = "/admin/skills";
          }}
        >
          Back
        </button>
      </div>

      <form className="add-skill-form" onSubmit={handleSubmit}>
        <div className="add-skill-group">
          <label>Skill Name</label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Java"
            required
          />
        </div>

        <div className="add-skill-group">
          <label>Category</label>

          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Programming"
            required
          />
        </div>

        <div className="add-skill-group">
          <label>Level</label>

          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            required
          >
            <option value="">Select level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>

        <button className="add-skill-submit" type="submit">
          Add Skill
        </button>

        {message && <p className="add-skill-message">{message}</p>}
      </form>
    </div>
  );
}

export default AddSkill;
