import "../styles/Hero.css";

function Hero() {
  return (
    <section className="page-hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Rajesh
            <br />
            <span>Chakali</span>
          </h1>

          <p className="hero-tagline">
            Java Full Stack Developer | Spring Boot | React | AWS | Building
            Scalable Applications
          </p>

          <p className="hero-bio">
            Passionate Java Full Stack Developer with hands-on experience
            building scalable web applications using Java, Spring Boot,
            React.js, SQL, REST APIs, Docker, Git, and AWS. I enjoy solving
            real-world problems through clean code, responsive UI, and efficient
            backend architecture. Currently seeking Full Stack Developer
            opportunities.
          </p>

          <div className="hero-buttons">
            <a
              href="https://drive.google.com/file/d/1y1G1GKrz0rMJksejNc3S2aBAAPSJ6VUP/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="btn-main"
            >
              Resume
            </a>

            <a
              href="https://github.com/chakalirajesh"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/rajesh-chakali"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              LinkedIn
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>4+</strong>
              <span>Projects</span>
            </div>

            <div>
              <strong>7.94</strong>
              <span>CGPA</span>
            </div>

            <div>
              <strong>Graduate</strong>
              <span>2026</span>
            </div>
          </div>
        </div>

        <div className="hero-photo">
          <img src="/rajesh.png" alt="Rajesh Chakali" />

          <div className="hire-badge">
            <span>●</span> Open to Hire
            <small>Full-time / Part-time / Contract</small>
          </div>

          <div className="stack-badge">
            <strong>Java</strong>
            <small>Full Stack</small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
