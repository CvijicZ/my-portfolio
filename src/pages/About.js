import React from "react";
import "./About.css"; // Optional: Add custom styling for the About section

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Image Section */}
          <div className="col-md-4 text-center">
            <img
              src={`${process.env.PUBLIC_URL}/images/200.png`} 
              alt="Your Name"
              className="rounded-circle img-fluid shadow"
            />
          </div>
          {/* Text Section */}
          <div className="col-md-8">
            <h2 className="mb-3">About Me</h2>
            <p>
              Hi! I'm [Your Name], a passionate Fullstack Developer who loves crafting
              elegant and efficient web solutions. With expertise in frontend and
              backend technologies, I am dedicated to building seamless and interactive
              user experiences.
            </p>
            <p>
              I specialize in technologies like React, Node.js, and PHP, and I
              thrive on solving complex problems and bringing ideas to life through
              code. Let's create something amazing together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
