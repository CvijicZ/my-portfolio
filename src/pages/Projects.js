import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "This is a brief description of Project 1. It does XYZ and is built with React and Node.js.",
      frontendTech: "React, Bootstrap",
      backendTech: "Node.js, Express",
      videoUrl: "https://www.youtube.com/embed/EWQRGiw3vWA", // Replace with your YouTube video ID
    },
    {
      title: "Project 2",
      description: "Project 2 is a web application built with Angular and PHP for backend. It handles ABC.",
      frontendTech: "Angular, Bootstrap",
      backendTech: "PHP, MySQL",
      videoUrl: "https://www.youtube.com/embed/your-video-id-2", // Replace with your YouTube video ID
    },
    {
      title: "Project 3",
      description: "A mobile app built using React Native. It integrates XYZ API and features a clean UI.",
      frontendTech: "React Native",
      backendTech: "Firebase",
      videoUrl: "https://www.youtube.com/embed/your-video-id-3", // Replace with your YouTube video ID
    },
  ];

  return (
    <div id="projects" className="bg-dark text-light py-5">
      <div className="container">
        <h2 className="text-center mb-4">Projects</h2>
        <p className="text-center mb-5">Here are some of my recent projects. Click on the video to view the project in action.</p>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card bg-secondary text-light h-100">
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <h6 className="mt-3">Technologies Used:</h6>
                  <ul>
                    <li><strong>Frontend:</strong> {project.frontendTech}</li>
                    <li><strong>Backend:</strong> {project.backendTech}</li>
                  </ul>
                </div>
                <div className="card-footer bg-dark">
                  {/* Embed video */}
                  <iframe
                    width="100%"
                    height="315"
                    src={project.videoUrl}
                    title={project.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
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
