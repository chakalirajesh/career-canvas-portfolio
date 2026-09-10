import { useEffect, useState } from "react";
import { getEducation } from "../services/api";
import "../styles/Education.css";

function Education() {
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getEducation()
      .then((data) => {
        setEducation(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <section className="page-education section-shell" id="education">
      <div className="section-tag">EDUCATION</div>

      <h2 className="section-title">Education</h2>

      <p className="section-subtitle">
        My academic background and specialization.
      </p>

      {loading && <p>Loading education...</p>}

      {error && <p>{error}</p>}

      {!loading && !error && (
        <div className="education-list">
          {education.map((item) => (
            <div className="education-card" key={item.id}>
              <div className="education-icon">🎓</div>

              <div className="education-content">
                <h3>{item.degree}</h3>

                <h4>{item.college}</h4>

                <p>{item.branch}</p>

                <div className="education-meta">
                  <span>
                    {item.startYear} - {item.endYear}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Education;
