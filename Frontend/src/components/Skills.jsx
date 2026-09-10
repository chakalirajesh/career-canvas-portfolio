import { useEffect, useState } from "react";
import { getSkills } from "../services/api";
import "../styles/Skills.css";

function Skills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getSkills()
      .then((data) => {
        setSkills(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <section className="page-skills section-shell" id="skills">
      <div className="section-tag">SKILLS</div>

      <h2 className="section-title">Technical Skills</h2>

      <p className="section-subtitle">
        Technologies and tools I use for full-stack application development.
      </p>

      {loading && <p>Loading skills...</p>}

      {error && <p>{error}</p>}

      {!loading && !error && (
        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.id}>
              <h3>{skill.name}</h3>

              <p>
                Category: <strong>{skill.category}</strong>
              </p>

              <p>
                Level: <strong>{skill.level}</strong>
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Skills;
