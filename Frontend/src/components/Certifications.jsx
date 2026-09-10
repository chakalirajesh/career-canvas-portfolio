import { useEffect, useState } from "react";
import { getCertifications } from "../services/api";
import "../styles/Certifications.css";

function Certifications() {
  const [certifications, setCertifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getCertifications()
      .then((data) => {
        setCertifications(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <section className="page-certifications section-shell" id="certifications">
      <div className="section-tag">CERTIFICATION</div>

      <h2 className="section-title">Certification</h2>

      <p className="section-subtitle">
        Professional certifications and technical training.
      </p>

      {loading && <p>Loading certifications...</p>}

      {error && <p>{error}</p>}

      {!loading && !error && (
        <div className="certifications-grid">
          {certifications.map((certification) => (
            <div className="certification-card" key={certification.id}>
              
              <div className="certification-icon">
                🏆
              </div>

              <h3>{certification.name}</h3>

              <p>
                <strong>Issuer:</strong> {certification.issuer}
              </p>

              <p>
                <strong>Issue Date:</strong> {certification.issueDate}
              </p>

              {certification.credentialUrl && (
                <a
                  href={certification.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost"
                >
                  View Certificate
                </a>
              )}

            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Certifications;