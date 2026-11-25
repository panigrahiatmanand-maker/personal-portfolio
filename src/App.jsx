
import React from "react";

const team = [
  {
    name: "Atmanand Panigrahi",
    role: "Full Stack Developer",
    skills: ["Java", "C", "HTML", "CSS", "JavaScript"],
    initial: "A",
  },
  {
    name: "Ujwala",
    role: "Web Developer",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    initial: "U",
  },
  {
    name: "Soumya",
    role: "UI/UX Designer",
    skills: ["UI Design", "CSS", "Figma"],
    initial: "S",
  },
  {
    name: "Sanjai",
    role: "Software Developer",
    skills: ["Java", "Python", "C"],
    initial: "S",
  },
  {
    name: "Pawan",
    role: "Tech Enthusiast",
    skills: ["Web Development", "AI/ML", "Java"],
    initial: "P",
  },
];

const projects = [
  "Weather Dashboard",
  "Student Result Management System",
  "AI Assisted Smart Navigation Stick",
  "Student Performance Analysis",
];

function App() {
  return (
    <div className="app">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Arial, sans-serif;
        }

        html { scroll-behavior: smooth; }

        body {
          background: #080d1b;
          color: white;
        }

        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 22px 8%;
          background: #10182b;
          position: sticky;
          top: 0;
          z-index: 10;
        }

        nav h2 { color: #38bdf8; }

        nav a {
          color: white;
          text-decoration: none;
          margin-left: 22px;
          font-size: 14px;
        }

        nav a:hover { color: #38bdf8; }

        .hero {
          min-height: 400px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 70px 20px;
          background: linear-gradient(135deg, #10182b, #172554);
        }

        .hero h1 {
          font-size: clamp(38px, 7vw, 65px);
          margin-bottom: 15px;
        }

        .hero span { color: #38bdf8; }

        .hero p {
          color: #cbd5e1;
          max-width: 650px;
          line-height: 1.7;
        }

        .btn {
          display: inline-block;
          margin-top: 25px;
          padding: 13px 25px;
          background: #0284c7;
          color: white;
          text-decoration: none;
          border-radius: 8px;
        }

        section { padding: 65px 8%; }

        .heading {
          text-align: center;
          font-size: 32px;
          margin-bottom: 35px;
        }

        .heading span { color: #38bdf8; }

        .team-grid, .project-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 22px;
        }

        .card {
          background: #111c32;
          border: 1px solid #263750;
          padding: 28px 20px;
          border-radius: 15px;
          text-align: center;
          transition: 0.3s;
        }

        .card:hover {
          transform: translateY(-7px);
          border-color: #38bdf8;
        }

        .avatar {
          width: 85px;
          height: 85px;
          margin: 0 auto 18px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg, #0284c7, #7c3aed);
          font-size: 35px;
          font-weight: bold;
        }

        .card h3 { margin-bottom: 10px; }

        .role {
          color: #38bdf8;
          margin-bottom: 15px;
        }

        .skills {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 7px;
        }

        .skills span {
          background: #263750;
          padding: 6px 10px;
          border-radius: 20px;
          font-size: 12px;
        }

        .project {
          background: #111c32;
          padding: 28px;
          border-radius: 12px;
          border: 1px solid #263750;
        }

        .project h3 {
          color: #38bdf8;
          margin-bottom: 12px;
        }

        .about {
          text-align: center;
          max-width: 800px;
          margin: auto;
          color: #cbd5e1;
          line-height: 1.8;
        }

        .contact {
          text-align: center;
          background: #10182b;
        }

        .contact p {
          margin: 12px;
          color: #cbd5e1;
        }

        footer {
          text-align: center;
          padding: 25px;
          color: #94a3b8;
          background: #080d1b;
        }

        @media(max-width: 650px) {
          nav {
            flex-direction: column;
            gap: 15px;
          }

          nav a { margin: 0 6px; }
          section { padding: 45px 5%; }
        }
      `}</style>

      <nav>
        <h2>5 TEAM</h2>
        <div>
          <a href="#home">Home</a>
          <a href="#team">Team</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header className="hero" id="home">
        <h1>Welcome to <span>5 TEAM</span></h1>
        <p>
          Five Minds. One Vision. One Team.
          We are passionate engineering students building
          creative and innovative technology solutions.
        </p>
        <a href="#team" className="btn">Explore Our Team</a>
      </header>

      <section id="team">
        <h2 className="heading">Our <span>Team</span></h2>

        <div className="team-grid">
          {team.map((member, index) => (
            <div className="card" key={index}>
              <div className="avatar">{member.initial}</div>
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              <div className="skills">
                {member.skills.map((skill, i) => (
                  <span key={i}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects">
        <h2 className="heading">Our <span>Projects</span></h2>

        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="project" key={index}>
              <h3>0{index + 1}</h3>
              <h2>{project}</h2>
              <p>Innovation through technology and teamwork.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about">
        <h2 className="heading">About <span>Us</span></h2>
        <p className="about">
          We are a team of five engineering students passionate
          about programming, web development, artificial
          intelligence and emerging technologies.
          Our goal is to learn, collaborate and build
          meaningful solutions to real-world problems.
        </p>
      </section>

      <section id="contact" className="contact">
        <h2 className="heading">Contact <span>Us</span></h2>
        <p>Have an idea or want to collaborate with us?</p>
        <p>Let's build something amazing together!</p>
      </section>

      <footer>
        © 2026 5 TEAM | Personal Portfolio Website
      </footer>
    </div>
  );
}

export default App;





































































































































