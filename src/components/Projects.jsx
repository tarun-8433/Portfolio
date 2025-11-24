import React from "react";
import { FaGithub } from "react-icons/fa";

// Import your local images
import newshubImg from "../assets/newshub.png";
import hotelMgmtImg from "../assets/hotelmgmt.png";
import portfolioImg from "../assets/portfolio.png";

const projectsData = [
  {
    id: 1,
    title: "NewsHub",
    description:
      "A React-based news app that fetches latest news from various sources.",
    technologies: ["React", "API", "CSS"],
    link: "https://github.com/tarun-8433/Newshub",
    image: newshubImg, // Local image
  },
  {
    id: 2,
    title: "Hotel Management System",
    description:
      "MERN stack project to manage hotel bookings and services.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    link: "https://github.com/tarun-8433/HotelManagementSystem",
    image: hotelMgmtImg, // Local image
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "My personal portfolio built with React and Bootstrap.",
    technologies: ["React", "Bootstrap", "CSS"],
    link: "https://github.com/tarun-8433/Portfolio",
    image: portfolioImg, // Local image
  },
];

const Projects = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">My Projects</h2>
      <div className="row">
        {projectsData.map((project) => (
          <div key={project.id} className="col-md-4 mb-4">
            <div
              className="card h-100 shadow-lg border-0 rounded-4 project-card"
              style={{
                transition: "transform 0.3s, box-shadow 0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 20px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              {/* Project Image */}
              <img
                src={project.image}
                className="card-img-top rounded-top-4"
                alt={project.title}
                style={{ height: "200px", objectFit: "cover" }}
              />

              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-semibold">{project.title}</h5>
                <p className="card-text text-muted">{project.description}</p>

                {/* Technologies */}
                <div className="mb-3">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="badge bg-primary me-2"
                      style={{ fontSize: "0.8rem" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary mt-auto d-flex align-items-center justify-content-center gap-2"
                >
                  <FaGithub /> View on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
