import { useState } from "react";
import "./AddProject.css";

function AddProject() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [liveUrl, setLiveUrl] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await fetch("http://localhost:8080/projects", {
        method: "POST",
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
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to create project");
      }

      setMessage("Project added successfully.");

      setTitle("");
      setDescription("");
      setTechnologies("");
      setGithubUrl("");
      setLiveUrl("");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="add-project-page">
      <div className="add-project-header">
        <div>
          <span>ADMIN</span>
          <h1>Add Project</h1>
          <p>Create a new portfolio project.</p>
        </div>

        <button
          className="add-project-back"
          onClick={() => {
            window.location.href = "/admin/projects";
          }}
        >
          Back
        </button>
      </div>

      <form className="add-project-form" onSubmit={handleSubmit}>
        <div className="add-project-group">
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="add-project-group">
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="add-project-group">
          <label>Technologies</label>
          <input
            value={technologies}
            onChange={(e) => setTechnologies(e.target.value)}
            placeholder="Java, Spring Boot, React, MySQL"
            required
          />
        </div>

        <div className="add-project-group">
          <label>GitHub URL</label>
          <input
            type="url"
            value={githubUrl}
            onChange={(e) => setGithubUrl(e.target.value)}
          />
        </div>

        <div className="add-project-group">
          <label>Live URL</label>
          <input
            type="url"
            value={liveUrl}
            onChange={(e) => setLiveUrl(e.target.value)}
          />
        </div>

        <button className="add-project-submit" type="submit">
          Add Project
        </button>

        {message && <p className="add-project-message">{message}</p>}
      </form>
    </div>
  );
}

export default AddProject;
