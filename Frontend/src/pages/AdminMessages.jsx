import { useEffect, useState } from "react";
import "./AdminMessages.css";

function AdminMessages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadMessages = async () => {
    try {
      const response = await fetch("https://career-canvas-portfolio.onrender.com/contact", {
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Failed to load messages");
      }

      const data = await response.json();
      setMessages(data);
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

    loadMessages();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this message?")) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/contact/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Delete failed");
      }

      setMessages((current) => current.filter((message) => message.id !== id));
    } catch (error) {
      console.error(error);
      alert("Unable to delete message");
    }
  };

  return (
    <div className="admin-messages-page">
      <header className="admin-messages-header">
        <div>
          <span className="admin-messages-label">ADMIN</span>
          <h1>Messages</h1>
          <p>Messages received from your portfolio.</p>
        </div>

        <button
          className="admin-messages-dashboard"
          onClick={() => {
            window.location.href = "/admin/dashboard";
          }}
        >
          Dashboard
        </button>
      </header>

      <main className="admin-messages-content">
        {loading ? (
          <p className="admin-messages-status">Loading messages...</p>
        ) : messages.length === 0 ? (
          <p className="admin-messages-status">No messages found.</p>
        ) : (
          <div className="admin-messages-list">
            {messages.map((message) => (
              <article className="admin-message-card" key={message.id}>
                <div className="admin-message-top">
                  <div>
                    <span className="admin-message-number">#{message.id}</span>

                    <h2>{message.subject}</h2>
                  </div>

                  <button
                    className="admin-message-delete"
                    onClick={() => handleDelete(message.id)}
                  >
                    Delete
                  </button>
                </div>

                <div className="admin-message-meta">
                  <strong>{message.name}</strong>
                  <span>{message.email}</span>
                </div>

                <p className="admin-message-body">{message.message}</p>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default AdminMessages;
