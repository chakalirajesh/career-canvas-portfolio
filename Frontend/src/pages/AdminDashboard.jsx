import "./AdminDashboard.css";
import { useEffect } from "react";

function AdminDashboard() {
  useEffect(() => {
    const loggedIn = sessionStorage.getItem("adminLoggedIn");

    if (loggedIn !== "true") {
      window.location.href = "/admin/login";
    }
  }, []);

  return (
    <div className="admin-dashboard-page">
      <header className="admin-dashboard-header">
        <div>
          <span className="admin-dashboard-label">PRIVATE AREA</span>

          <h1>Admin Dashboard</h1>

          <p>Manage your portfolio content.</p>
        </div>

        <button
          className="admin-logout-button"
          onClick={() => {
            sessionStorage.removeItem("adminLoggedIn");
            window.location.href = "/admin/login";
          }}
        >
          Logout
        </button>
      </header>

      <main className="admin-dashboard-content">
        <div className="admin-dashboard-grid">
          {/* PROJECTS */}
          <div className="admin-dashboard-card">
            <span className="admin-card-number">01</span>

            <h2>Projects</h2>

            <p>Add, edit and remove portfolio projects.</p>

            <div className="admin-card-actions">
              <button
                onClick={() => {
                  window.location.href = "/admin/projects";
                }}
              >
                Manage Projects
              </button>
            </div>
          </div>

          {/* SKILLS */}
          <div className="admin-dashboard-card">
            <span className="admin-card-number">02</span>

            <h2>Skills</h2>

            <p>Manage your technical skills and technologies.</p>

            <button
              onClick={() => {
                window.location.href = "/admin/skills";
              }}
            >
              Manage Skills
            </button>
          </div>

          {/* EDUCATION */}
          <div className="admin-dashboard-card">
            <span className="admin-card-number">03</span>

            <h2>Education</h2>

            <p>Update your education information.</p>

            <button
              onClick={() => {
                window.location.href = "/admin/education";
              }}
            >
              Manage Education
            </button>
          </div>

          {/* EXPERIENCE */}
          <div className="admin-dashboard-card">
            <span className="admin-card-number">04</span>

            <h2>Experience</h2>

            <p>Manage your professional experience.</p>

            <button
              onClick={() => {
                window.location.href = "/admin/experience";
              }}
            >
              Manage Experience
            </button>
          </div>

          {/* CERTIFICATIONS */}
          <div className="admin-dashboard-card">
            <span className="admin-card-number">05</span>

            <h2>Certifications</h2>

            <p>Manage certifications and credentials.</p>

            <button
              onClick={() => {
                window.location.href = "/admin/certifications";
              }}
            >
              Manage Certifications
            </button>
          </div>

          {/* MESSAGES */}
          <div className="admin-dashboard-card">
            <span className="admin-card-number">06</span>

            <h2>Messages</h2>

            <p>View messages submitted through your portfolio.</p>

            <button
              onClick={() => {
                window.location.href = "/admin/messages";
              }}
            >
              View Messages
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;
