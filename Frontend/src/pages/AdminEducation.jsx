import { useEffect, useState } from "react";
import "./AdminEducation.css";

function AdminEducation() {
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadEducation = async () => {
    try {
      const response = await fetch("http://localhost:8080/education");

      if (!response.ok) {
        throw new Error("Failed to load education");
      }

      const data = await response.json();
      setEducation(data);
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

    loadEducation();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this education record?")) {
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8080/education/${id}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error("Delete failed");
      }

      setEducation((current) =>
        current.filter((item) => item.id !== id)
      );
    } catch (error) {
      console.error(error);
      alert("Unable to delete education record");
    }
  };

  return (
    <div className="admin-education-page">

      <header className="admin-education-header">
        <div>
          <span className="admin-education-label">ADMIN</span>
          <h1>Manage Education</h1>
          <p>Manage your academic background.</p>
        </div>

        <div className="admin-education-header-actions">
          <button
            onClick={() => {
              window.location.href = "/admin/education/add";
            }}
          >
            + Add Education
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

      <main className="admin-education-content">

        {loading ? (
          <p className="admin-education-status">
            Loading education...
          </p>
        ) : education.length === 0 ? (
          <p className="admin-education-status">
            No education records found.
          </p>
        ) : (
          <div className="admin-education-grid">

            {education.map((item) => (
              <div
                className="admin-education-card"
                key={item.id}
              >
                <span className="admin-education-number">
                  #{item.id}
                </span>

                <h2>{item.degree}</h2>

                <h3>{item.branch}</h3>

                <p className="admin-education-college">
                  {item.college}
                </p>

                <div className="admin-education-meta">
                  <span>
                    {item.startYear} - {item.endYear}
                  </span>
                </div>

                <div className="admin-education-actions">

                  <button
                    className="admin-education-edit"
                    onClick={() => {
                      window.location.href =
                        `/admin/education/edit/${item.id}`;
                    }}
                  >
                    Edit
                  </button>

                  <button
                    className="admin-education-delete"
                    onClick={() => handleDelete(item.id)}
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

export default AdminEducation;