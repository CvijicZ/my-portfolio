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
              src={`${process.env.PUBLIC_URL}/images/my-image.jpg`}
              alt="Your Name"
              className="rounded-circle img-fluid shadow"
            />
          </div>
          {/* Text Section */}
          <div className="col-md-8">
            <h2 className="mb-3">About Me</h2>
            <p>
              Hi! I'm Zoran, an aspiring IT professional with a Professional Bachelor's degree in Information Technology from the Higher Technical School of Professional Studies in Novi Sad. My education has provided me with a strong foundation in various IT domains and sparked a deep passion for web development.
            </p>
            <p>
              I specialize in crafting elegant and efficient web solutions using modern technologies, with a particular focus on PHP, which I consider my core strength. My expertise spans both frontend and backend development, enabling me to create seamless and interactive user experiences.
            </p>
            <p>
              I thrive on solving complex challenges and bringing innovative ideas to life through code. Whether it's building dynamic interfaces, optimizing backend systems, or exploring cutting-edge technologies, I am committed to delivering high-quality solutions that make an impact.
            </p>
            <p className="text-success">
              Let's connect and collaborate to turn ideas into reality!
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
