import { useEffect, useState } from "react";
import { getExperience } from "../services/api";
import "../styles/Experience.css";

function Experience() {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getExperience()
      .then((data) => {
        setExperiences(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <section className="page-experience section-shell" id="experience">
      <div className="section-tag">EXPERIENCE</div>

      <h2 className="section-title">Experience</h2>

      <p className="section-subtitle">
        My professional experience and practical development journey.
      </p>

      {loading && <p>Loading experience...</p>}

      {error && <p>{error}</p>}

      {!loading && !error && (
        <div className="experience-list">
          {experiences.map((experience) => (
            <div className="experience-card" key={experience.id}>
              <h3>{experience.role}</h3>

              <h4>{experience.company}</h4>

              <p>{experience.description}</p>

              <div className="experience-meta">
                <span>{experience.startDate}</span>
                <span> - </span>
                <span>{experience.endDate || "Present"}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Experience;
