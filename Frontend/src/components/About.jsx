import "../styles/About.css";

function About() {
  return (
    <section className="page-about section-shell" id="about">
      <div className="section-tag">ABOUT ME</div>

      <h2 className="section-title">About Me</h2>

      <p className="section-subtitle">
        Passionate about Java Full Stack Development and building modern web
        applications.
      </p>

      <div className="about-grid">
        <div className="about-main">
          <p>
            Hello! I'm <strong>Rajesh Chakali</strong>, a B.Tech graduate in
            Computer Science Engineering (AI & ML) with a strong passion for
            Java Full Stack Development. I enjoy building scalable, responsive,
            and user-friendly web applications using modern technologies.
          </p>

          <p>
            My technical expertise includes{" "}
            <strong>
              Java, Spring Boot, React.js, JavaScript, SQL, REST APIs, Docker,
              Git, and AWS
            </strong>
            . I love solving real-world problems, developing efficient backend
            services, creating intuitive frontend interfaces, and continuously
            improving my software development skills.
          </p>

          <p>
            I am currently seeking opportunities as a{" "}
            <strong>Java Full Stack Developer</strong>, where I can contribute,
            learn from experienced teams, and build impactful applications.
          </p>

          <div className="about-tags">
            <span>Java</span>
            <span>Spring Boot</span>
            <span>React.js</span>
            <span>JavaScript</span>
            <span>HTML5</span>
            <span>CSS3</span>
            <span>SQL</span>
            <span>PostgreSQL</span>
            <span>REST API</span>
            <span>Docker</span>
            <span>Git</span>
            <span>AWS</span>
          </div>
        </div>

        <div className="about-side">
          <div className="about-info-card">
            <div className="info-icon">🎓</div>
            <div>
              <small>Degree</small>
              <h3>B.Tech CSE (AI & ML)</h3>
            </div>
          </div>

          <div className="about-info-card">
            <div className="info-icon">💻</div>
            <div>
              <small>Primary Domain</small>
              <h3>Java Full Stack</h3>
            </div>
          </div>

          <div className="about-info-card">
            <div className="info-icon">🚀</div>
            <div>
              <small>Current Focus</small>
              <h3>Spring Boot & React</h3>
            </div>
          </div>

          <div className="about-info-card">
            <div className="info-icon">💼</div>
            <div>
              <small>Status</small>
              <h3>Open To Work</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
