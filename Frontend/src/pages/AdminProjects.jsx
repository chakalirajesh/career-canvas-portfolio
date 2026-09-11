import { useEffect, useState } from "react";
import "./AdminProjects.css";

function AdminProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadProjects = async () => {
    try {
      const response = await fetch("https://career-canvas-portfolio.onrender.com/projects");

      if (!response.ok) {
        throw new Error("Failed to load projects");
      }

      const data = await response.json();
      setProjects(data);
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

    loadProjects();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this project?",
    );

    if (!confirmDelete) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/projects/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Delete failed");
      }

      setProjects((currentProjects) =>
        currentProjects.filter((project) => project.id !== id),
      );
    } catch (error) {
      console.error(error);
      alert("Unable to delete project");
    }
  };

  return (
    <div className="admin-projects-page">
      <div className="admin-projects-header">
        <div>
          <span className="admin-projects-label">ADMIN</span>
          <h1>Manage Projects</h1>
          <p>View and manage your portfolio projects.</p>
        </div>

        <div className="admin-projects-header-actions">
          <button
            className="admin-add-button"
            onClick={() => {
              window.location.href = "/admin/projects/add";
            }}
          >
            + Add Project
          </button>

          <button
            className="admin-back-button"
            onClick={() => {
              window.location.href = "/admin/dashboard";
            }}
          >
            Dashboard
          </button>
        </div>
      </div>

      <div className="admin-projects-content">
        {loading ? (
          <p className="admin-projects-status">Loading projects...</p>
        ) : projects.length === 0 ? (
          <p className="admin-projects-status">No projects found.</p>
        ) : (
          <div className="admin-projects-grid">
            {projects.map((project) => (
              <div className="admin-project-card" key={project.id}>
                <span className="admin-project-number">#{project.id}</span>

                <h2>{project.title}</h2>

                <p>{project.description}</p>

                <div className="admin-project-tech">{project.technologies}</div>

                <div className="admin-project-actions">
                  <button
                    className="admin-edit-button"
                    onClick={() => {
                      window.location.href = `/admin/projects/edit/${project.id}`;
                    }}
                  >
                    Edit
                  </button>

                  <button
                    className="admin-delete-button"
                    onClick={() => handleDelete(project.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminProjects;
