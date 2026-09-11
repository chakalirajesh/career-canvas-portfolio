import { useEffect, useState } from "react";
import "./EditProject.css";

function EditProject({ projectId }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [liveUrl, setLiveUrl] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const loggedIn = sessionStorage.getItem("adminLoggedIn");

    if (loggedIn !== "true") {
      window.location.href = "/admin/login";
      return;
    }

    const loadProject = async () => {
      try {
        const response = await fetch(
          `https://career-canvas-portfolio.onrender.com/projects/${projectId}`,
          {
            credentials: "include",
          },
        );

        if (!response.ok) {
          throw new Error("Project not found");
        }

        const project = await response.json();

        setTitle(project.title || "");
        setDescription(project.description || "");
        setTechnologies(project.technologies || "");
        setGithubUrl(project.githubUrl || "");
        setLiveUrl(project.liveUrl || "");
      } catch (error) {
        setMessage(error.message);
      }
    };

    loadProject();
  }, [projectId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await fetch(
        `http://localhost:8080/projects/${projectId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            title,
            description,
            technologies,
            githubUrl,
            liveUrl,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to update project");
      }

      setMessage("Project updated successfully.");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="edit-project-page">
      <div className="edit-project-header">
        <div>
          <span>ADMIN</span>
          <h1>Edit Project</h1>
          <p>Update your portfolio project.</p>
        </div>

        <button
          className="edit-project-back"
          onClick={() => {
            window.location.href = "/admin/projects";
          }}
        >
          Back
        </button>
      </div>

      <form className="edit-project-form" onSubmit={handleSubmit}>
        <div className="edit-project-group">
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="edit-project-group">
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="edit-project-group">
          <label>Technologies</label>
          <input
            value={technologies}
            onChange={(e) => setTechnologies(e.target.value)}
            required
          />
        </div>

        <div className="edit-project-group">
          <label>GitHub URL</label>
          <input
            type="url"
            value={githubUrl}
            onChange={(e) => setGithubUrl(e.target.value)}
          />
        </div>

        <div className="edit-project-group">
          <label>Live URL</label>
          <input
            type="url"
            value={liveUrl}
            onChange={(e) => setLiveUrl(e.target.value)}
          />
        </div>

        <button className="edit-project-submit" type="submit">
          Update Project
        </button>

        {message && <p className="edit-project-message">{message}</p>}
      </form>
    </div>
  );
}

export default EditProject;
