import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminProjects from "./pages/AdminProjects";
import AddProject from "./pages/AddProject";
import EditProject from "./pages/EditProject";
import AdminSkills from "./pages/AdminSkills";
import AddSkill from "./pages/AddSkill";
import EditSkill from "./pages/EditSkill";
import AdminEducation from "./pages/AdminEducation";
import AddEducation from "./pages/AddEducation";
import EditEducation from "./pages/EditEducation";
import AdminExperience from "./pages/AdminExperience";
import AddExperience from "./pages/AddExperience";
import EditExperience from "./pages/EditExperience";
import AdminCertifications from "./pages/AdminCertifications";
import AddCertification from "./pages/AddCertification";
import EditCertification from "./pages/EditCertification";
import AdminMessages from "./pages/AdminMessages";

import "./App.css";

function App() {
  const path = window.location.pathname;

  // Private admin login page
  if (path === "/admin/login") {
    return <AdminLogin />;
  }

  if (path === "/admin/dashboard") {
    return <AdminDashboard />;
  }

  if (path === "/admin/projects") {
    return <AdminProjects />;
  }
  if (path === "/admin/projects/add") {
    return <AddProject />;
  }

  if (path.startsWith("/admin/projects/edit/")) {
    const projectId = path.split("/").pop();

    return <EditProject projectId={projectId} />;
  }

  if (path === "/admin/skills") {
    return <AdminSkills />;
  }

  if (path === "/admin/skills/add") {
    return <AddSkill />;
  }

  if (path.startsWith("/admin/skills/edit/")) {
    const skillId = path.split("/").pop();

    return <EditSkill skillId={skillId} />;
  }

  if (path === "/admin/education") {
    return <AdminEducation />;
  }
  if (path === "/admin/education/add") {
    return <AddEducation />;
  }
  if (path.startsWith("/admin/education/edit/")) {
    const educationId = path.split("/").pop();

    return <EditEducation educationId={educationId} />;
  }

  if (path === "/admin/experience") {
    return <AdminExperience />;
  }
  if (path === "/admin/experience/add") {
    return <AddExperience />;
  }
  if (path.startsWith("/admin/experience/edit/")) {
    const experienceId = path.split("/").pop();
    return <EditExperience experienceId={experienceId} />;
  }

  if (path === "/admin/certifications") {
    return <AdminCertifications />;
  }
  if (path === "/admin/certifications/add") {
    return <AddCertification />;
  }
  if (path.startsWith("/admin/certifications/edit/")) {
    const certificationId = path.split("/").pop();
    return <EditCertification certificationId={certificationId} />;
  }

  if (path === "/admin/messages") {
    return <AdminMessages />;
  }

  // Public portfolio
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
