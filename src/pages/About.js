import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Image Section */}
          <div className="col-md-4 text-center">
            <div className="image-container">
              <img
                src={`${process.env.PUBLIC_URL}/images/a.png`}
                alt="Zoran Cvijic"
                className="rounded-circle img-fluid shadow-lg about-img"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="col-md-8">
            <h2 className="text-light mb-4">About Me</h2>
            <p className="text-light">
              Hi! I'm <strong>Zoran Cvijic</strong>, an aspiring IT professional with a Professional Bachelor's degree in Information Technology from the Higher Technical School of Professional Studies in Novi Sad. My education has provided me with a strong foundation in various IT domains and sparked a deep passion for web development.
            </p>
            <p className="text-light">
              I specialize in crafting elegant and efficient web solutions using modern technologies, with a particular focus on PHP, which I consider my core strength. My expertise spans both frontend and backend development, enabling me to create seamless and interactive user experiences.
            </p>
            <p className="text-light">
              I thrive on solving complex challenges and bringing innovative ideas to life through code. Whether it's building dynamic interfaces, optimizing backend systems, or exploring cutting-edge technologies, I am committed to delivering high-quality solutions that make an impact.
            </p>
            <p className="text-success">
              Let's connect and collaborate to turn ideas into reality!
            </p>
          </div>
        </div>

        {/* Experience section */}

        <div className="row mt-5">
          <div className="col-md-12">
            <h3 className="text-warning">Professional Experience</h3>
            <div className="experience-item card text-light bg-dark mb-3">
              <div className="card-body">
                <h5 className="card-title text-warning">Full Stack Web Developer Internship</h5>
                <h6 className="card-subtitle mb-2 text-white">Company: Aptiv</h6>
                <p className="card-text">
                  <strong>Duration:</strong> Januar 2024 - October 2024
                </p>
                <p className="card-text">
                  I worked on full-stack web applications, integrating some with existing project management software via APIs documented with Swagger (OpenAPI). I also contributed to bug fixing and maintaining legacy systems, collaborating on problem-solving and optimizing platform functionality.
                </p>
              </div>
            </div>
            {/* Add more experience items here as needed */}
          </div>
        </div>


        {/* Education Section */}
        <div class="row mt-5">
          <h2 className="text-warning">Education</h2>

          <div class="col-md-6">
            <div class="card bg-dark text-light border-warning">
              <div class="card-body">
                <h5 class="card-title text-warning">Higher Technical School of Professional Studies, Novi Sad</h5>
                <p class="card-text mt-3"><strong>Study Programme:</strong> Information Technology</p>
                <p class="card-text"><strong>Duration:</strong> 3 years</p>
                <p class="card-text"><strong>Year of Graduation:</strong> 2023</p>
                <p class="card-text text-success"><strong>Degree:</strong> Professional Engineer in Information Technology and Systems</p>
                <p class="card-text">During my studies, I gained a strong foundation in IT, covering both theoretical and practical aspects of web development, programming, and system architecture.</p>
              </div>
            </div>
          </div>


          <div class="col-md-6">
            <div class="card bg-dark text-light">
              <div class="card-body">
                <h5 class="card-title text-warning">Technical school "Nikola Tesla" Šid</h5>
                <p class="card-text mt-3"><strong>Study Programme:</strong> Computer technician</p>
                <p class="card-text"><strong>Duration:</strong> 4 years</p>
                <p class="card-text"><strong>Year of Graduation:</strong> 2020</p>
                <p class="card-text">During my studies, I gained knowledge in electronics, computer hardware, networks, and the basics of programming languages.</p>
              </div>
            </div>
          </div>
        </div>


        {/* Skills Section */}
        <div className="row mt-5">
          <div className="col-md-12">
            <h3 className="text-warning">Skills & Expertise</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <h5 className="text-light">Frontend</h5>
                <p className="text-light">HTML5, CSS3, JavaScript, jQuery, React, Bootstrap</p>
              </div>
              <div className="skill-item">
                <h5 className="text-light">Backend</h5>
                <p className="text-light">PHP, MySQL</p>
              </div>
              <div className="skill-item">
                <h5 className="text-light">Frameworks</h5>
                <p className="text-light">Laravel, React</p>
              </div>
              <div className="skill-item">
                <h5 className="text-light">Tools</h5>
                <p className="text-light">Git, Docker, Apache</p>
              </div>
              <div className="skill-item">
                <h5 className="text-light">Soft skills</h5>
                <p className="text-light">Team work, logical thinking, problem solving</p>
              </div>
            </div>
          </div>
        </div>

        {/* Languages Section */}
        <div className="row mt-5">
          <div className="col-md-12">
            <h3 className="text-warning">Languages</h3>
            <ul className="languages-list text-light">
              <li><strong>English:</strong> Professional working proficiency</li>
              <li><strong>Serbian:</strong> Native speaker</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
