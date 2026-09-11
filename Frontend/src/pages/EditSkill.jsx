import { useEffect, useState } from "react";
import "./EditSkill.css";

function EditSkill({ skillId }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const loggedIn = sessionStorage.getItem("adminLoggedIn");

    if (loggedIn !== "true") {
      window.location.href = "/admin/login";
      return;
    }

    const loadSkill = async () => {
      try {
        const response = await fetch(
          `https://career-canvas-portfolio.onrender.com/skills/${skillId}`,
          {
            credentials: "include",
          },
        );

        if (!response.ok) {
          throw new Error("Skill not found");
        }

        const skill = await response.json();

        setName(skill.name || "");
        setCategory(skill.category || "");
        setLevel(skill.level || "");
      } catch (error) {
        setMessage(error.message);
      }
    };

    loadSkill();
  }, [skillId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await fetch(`http://localhost:8080/skills/${skillId}`, {
        method: "PUT",
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

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to update skill");
      }

      setMessage("Skill updated successfully.");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="edit-skill-page">
      <div className="edit-skill-header">
        <div>
          <span>ADMIN</span>
          <h1>Edit Skill</h1>
          <p>Update your technical skill.</p>
        </div>

        <button
          className="edit-skill-back"
          onClick={() => {
            window.location.href = "/admin/skills";
          }}
        >
          Back
        </button>
      </div>

      <form className="edit-skill-form" onSubmit={handleSubmit}>
        <div className="edit-skill-group">
          <label>Skill Name</label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="edit-skill-group">
          <label>Category</label>

          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>

        <div className="edit-skill-group">
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

        <button className="edit-skill-submit" type="submit">
          Update Skill
        </button>

        {message && <p className="edit-skill-message">{message}</p>}
      </form>
    </div>
  );
}

export default EditSkill;
