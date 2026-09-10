import { useEffect, useState } from "react";
import { getProjects } from "../services/api";
import "../styles/Projects.css";
export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getProjects()
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <section className="page-projects section-shell" id="projects">
      <div className="section-tag">PROJECTS</div>

      <h2 className="section-title">My Projects</h2>

      <p className="section-subtitle">
        Projects I've designed and developed using modern technologies.
      </p>

      {loading && <p>Loading projects...</p>}

      {error && <p>{error}</p>}

      {!loading && !error && (
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tools-row">
                {project.technologies?.split(",").map((technology) => (
                  <span className="tool-chip" key={technology.trim()}>
                    {technology.trim()}
                  </span>
                ))}
              </div>

              <div className="project-links">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-ghost"
                  >
                    GitHub
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-main"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
