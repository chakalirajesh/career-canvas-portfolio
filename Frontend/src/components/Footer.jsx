import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="page-footer">
      <div className="footer-logo">Rajesh Chakali</div>

      <span>© 2026 Rajesh Chakali. All Rights Reserved.</span>

      <ul className="footer-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
