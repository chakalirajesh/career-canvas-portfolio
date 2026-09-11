import { useState } from "react";
import "./AdminLogin.css";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await fetch("https://career-canvas-portfolio.onrender.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      setMessage(data.message);
      sessionStorage.setItem("adminLoggedIn", "true");
      window.location.href = "/admin/dashboard";
    } catch (error) {
      setMessage(error.message || "Unable to connect to server");
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-card">
        <div className="admin-login-header">
          <span className="admin-login-badge">PRIVATE AREA</span>

          <h1>Admin Login</h1>

          <p>Sign in to manage your portfolio.</p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="admin-form-group">
            <label>Email</label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@gmail.com"
              required
            />
          </div>

          <div className="admin-form-group">
            <label>Password</label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>

          <button type="submit" className="admin-login-button">
            Login
          </button>
        </form>

        {message && <p className="admin-login-message">{message}</p>}
      </div>
    </div>
  );
}

export default AdminLogin;
