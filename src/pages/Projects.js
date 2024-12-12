import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "FriendFlow",
      description:
        "FriendFlow is a social network that connects people, enabling real-time chat, photo and post sharing, and discussion through comments.",
      frontendTech: "JavaScript, jQuery, HTML, CSS, Bootstrap",
      backendTech: "PHP, MySQL",
      otherTech: "AJAX, JWT, WebSockets",
      videoUrl: "https://www.youtube.com/embed/K6wfZpwQkQA",
      promote: true,
      githubLink: "https://github.com/CvijicZ/friendflow",
    },
    {
      title: "Mini-Igre",
      description:
        "Mini-Igre is a web platform that allows users to play games, customize their accounts, and connect with others through an interactive forum.",
      frontendTech: "HTML, CSS, JavaScript",
      backendTech: "PHP, MySQL",
      videoUrl: "https://www.youtube.com/embed/96pI_-j0Iss",
      promote: false,
      githubLink: "https://github.com/CvijicZ/mini-igre",
    },
  ];

  return (
    <div id="projects" className="bg-dark text-light py-5">
      <div className="container">
        <h2 className="text-center mb-4">Projects</h2>
        <p className="text-center mb-5">
          Here are some of my recent projects. Click on the video to view the project in action.
        </p>
        <div className="row">
          {projects.map((project, index) => (
            <div
              className="col-lg-6 col-md-12 mb-4"
              key={index}
            >
              <div
                className={`card bg-secondary text-light h-100 shadow ${project.promote ? "blink-border" : ""}`}
              >
                <div className="card-body">
                  <h5 className="card-title text-warning">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <h6 className="mt-3">Technologies Used:</h6>
                  <ul className="pl-3">
                    <li>
                      <strong>Frontend:</strong> {project.frontendTech}
                    </li>
                    <li>
                      <strong>Backend:</strong> {project.backendTech}
                    </li>
                    {project.otherTech && (
                      <li>
                        <strong>Other Technologies:</strong> {project.otherTech}
                      </li>
                    )}
                  </ul>
                </div>
                <div className="card-footer bg-dark">
                  <iframe
                    width="100%"
                    height="315"
                    src={project.videoUrl}
                    title={project.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="mt-3 text-center">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-dark btn-sm text-warning"
                    >
                      View Source Code on GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
