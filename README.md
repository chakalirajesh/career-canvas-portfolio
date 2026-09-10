# Career Canvas Portfolio

A full-stack personal portfolio application built with React, Spring Boot, Spring Security, JPA, and MySQL.

The application provides a public portfolio for visitors and a private admin dashboard for managing portfolio content.

---

## 🚀 Features

### Public Portfolio

- Responsive personal portfolio website
- Hero section
- About section
- Technical skills
- Projects
- Education
- Professional experience
- Certifications
- Contact form
- Data loaded from the backend API

### Admin Dashboard

Secure private admin area for managing portfolio content.

- Admin login
- Admin dashboard
- Project management
- Skills management
- Education management
- Experience management
- Certification management
- Contact message management
- Add, edit, and delete portfolio content
- Logout functionality
- Admin-only backend operations

---

## 🛠️ Technologies Used

### Frontend

- React
- Vite
- JavaScript
- HTML5
- CSS3
- Fetch API

### Backend

- Java
- Spring Boot
- Spring MVC
- Spring Data JPA
- Spring Security
- Maven

### Database

- MySQL

---

## 📁 Project Structure

```text
career-canvas-portfolio/
│
├── backend/
│   ├── src/
│   │   └── main/
│   │       ├── java/
│   │       │   └── com/
│   │       │       └── careercanvas/
│   │       │           └── portfolio/
│   │       │               ├── config/
│   │       │               ├── controller/
│   │       │               ├── dto/
│   │       │               ├── entity/
│   │       │               ├── repository/
│   │       │               ├── security/
│   │       │               └── service/
│   │       └── resources/
│   │
│   ├── pom.xml
│   ├── mvnw
│   └── mvnw.cmd
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── styles/
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   └── index.html
│
├── .gitignore
└── README.md
