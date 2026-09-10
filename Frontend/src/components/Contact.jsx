import { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("Sending...");

    try {
      const response = await fetch("http://localhost:8080/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      await response.json();

      setStatus("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus("Failed to send message.");
      console.error(error);
    }
  };

  return (
    <section className="page-contact section-shell" id="contact">
      <div className="section-tag">CONTACT</div>

      <h2 className="section-title">Let's Connect 👋</h2>

      <p className="section-subtitle">
        I enjoy building scalable web applications and contributing to impactful
        software projects.
      </p>

      <div className="contact-grid">
        <div className="contact-info">
          <h3>Let's Connect</h3>

          <p>
            I enjoy building scalable web applications using Java, Spring Boot,
            React.js, SQL, Docker, and AWS.
          </p>

          <div className="contact-items">
            <a href="mailto:rajeshchakali01@gmail.com" className="contact-item">
              <span>📧</span>
              <div>
                <strong>Email</strong>
                <p>rajeshchakali01@gmail.com</p>
              </div>
            </a>

            <a
              href="https://github.com/chakalirajesh"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <span>💻</span>
              <div>
                <strong>GitHub</strong>
                <p>github.com/chakalirajesh</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/rajesh-chakali"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <span>🔗</span>
              <div>
                <strong>LinkedIn</strong>
                <p>linkedin.com/in/rajesh-chakali</p>
              </div>
            </a>
          </div>
        </div>

        <form className="contact-form-box" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-row">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-row">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter subject"
              required
            />
          </div>

          <div className="form-row">
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project or opportunity..."
              required
            />
          </div>

          <button type="submit" className="form-btn">
            Send Message →
          </button>

          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
