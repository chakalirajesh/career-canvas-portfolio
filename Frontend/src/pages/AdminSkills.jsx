import { useEffect, useState } from "react";
import "./AdminSkills.css";

function AdminSkills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadSkills = async () => {
    try {
      const response = await fetch("https://career-canvas-portfolio.onrender.com/skills");

      if (!response.ok) {
        throw new Error("Failed to load skills");
      }

      const data = await response.json();
      setSkills(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loggedIn = sessionStorage.getItem("adminLoggedIn");

    if (loggedIn !== "true") {
      window.location.href = "/admin/login";
      return;
    }

    loadSkills();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this skill?")) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/skills/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Delete failed");
      }

      setSkills((currentSkills) =>
        currentSkills.filter((skill) => skill.id !== id),
      );
    } catch (error) {
      console.error(error);
      alert("Unable to delete skill");
    }
  };

  return (
    <div className="admin-skills-page">
      <header className="admin-skills-header">
        <div>
          <span className="admin-skills-label">ADMIN</span>
          <h1>Manage Skills</h1>
          <p>Manage your technical skills and technologies.</p>
        </div>

        <div className="admin-skills-header-actions">
          <button
            onClick={() => {
              window.location.href = "/admin/skills/add";
            }}
          >
            + Add Skill
          </button>

          <button
            onClick={() => {
              window.location.href = "/admin/dashboard";
            }}
          >
            Dashboard
          </button>
        </div>
      </header>

      <main className="admin-skills-content">
        {loading ? (
          <p className="admin-skills-status">Loading skills...</p>
        ) : skills.length === 0 ? (
          <p className="admin-skills-status">No skills found.</p>
        ) : (
          <div className="admin-skills-grid">
            {skills.map((skill) => (
              <div className="admin-skill-card" key={skill.id}>
                <span className="admin-skill-number">#{skill.id}</span>

                <h2>{skill.name}</h2>

                <p className="admin-skill-category">{skill.category}</p>

                <p className="admin-skill-level">Level: {skill.level}</p>

                <div className="admin-skill-actions">
                  <button
                    className="admin-skill-edit"
                    onClick={() => {
                      window.location.href = `/admin/skills/edit/${skill.id}`;
                    }}
                  >
                    Edit
                  </button>

                  <button
                    className="admin-skill-delete"
                    onClick={() => handleDelete(skill.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default AdminSkills;
