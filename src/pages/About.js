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
            <h2 className="text-warning mb-4">About Me</h2>
            <p className="text-light">
              Hi! I'm <strong>Zoran Cvijic</strong>, IT professional with a Professional Bachelor's degree in Information Technology. My education has provided me with a strong foundation in various IT domains and sparked a deep passion for web development.
            </p>
            <p className="text-light">
              I specialize in crafting elegant and efficient web solutions using modern technologies, with a particular focus on PHP, which I consider my core strength. My expertise spans both frontend and backend development, enabling me to create seamless and interactive user experiences.
            </p>
            <p className="text-light">
              I thrive on solving complex challenges and bringing innovative ideas to life through code. Whether it's building dynamic interfaces, optimizing backend systems, or exploring cutting-edge technologies, I am committed to delivering high-quality solutions that make an impact.
            </p>
            <p className="text-success">
              Let's connect and collaborate to turn ideas into reality! <a href="#contact" className="btn btn-outline-success"> Contact me<i className="fas fa-arrow-down pl-4"></i></a>
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
              <div className="skill-item" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/wall-painting.png)` }}>

                <h5 className="text-light fs-3">Frontend</h5>
                <p className="text-dark fs-4">
                  <span className="text-warning">HTML5</span>, <span className="text-danger">CSS3</span>, <span className="text-info">JavaScript</span>,
                  <span className="text-primary"> jQuery</span>, <span className="text-warning">React</span>, <span className="text-info">Bootstrap</span>
                </p>
              </div>
              <div className="skill-item" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/terminal.jpg)` }}>

                <h5 className="text-light fs-3">Backend</h5>
                <p className="text-light fs-3">PHP, MySQL</p>
              </div>
              <div className="skill-item" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/cranes.png)` }}>

                <h5 className="text-light fs-3">Frameworks</h5>
                <p className="text-light fs-3">Laravel, React</p>
              </div>
              <div className="skill-item" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/toolbox.png)` }}>

                <h5 className="text-light fs-3">Tools</h5>
                <p className="text-light fs-4">Git, Docker, Apache</p>
              </div>
              <div className="skill-item" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/teddy.png)` }}>

                <h5 className="text-light fs-3">Soft Skills</h5>
                <p className="text-light fs-4">Team work, logical thinking, problem solving</p>
              </div>
            </div>
          </div>
        </div>


        {/* Languages Section */}
        <div className="row mt-5">
          <div className="col-md-12">
            <h3 className="text-warning mb-4">Languages</h3>
            <div className="card bg-dark text-light">
              <div className="card-body">
                <div className="row">
                  <div className="col-12 col-md-6 mb-3">
                    <h5 className="d-flex align-items-center">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/uk-flag.jpg`}
                        alt="UK flag"
                        className="flag-icon me-3"
                      />
                      <span>English</span>
                    </h5>
                    <p className="mb-0">Level: Professional working proficiency</p>
                  </div>
                  <div className="col-12 col-md-6 mb-3">
                    <h5 className="d-flex align-items-center">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/srb-flag.png`}
                        alt="Serbian flag"
                        className="flag-icon me-3"
                      />
                      <span>Serbian</span>
                    </h5>
                    <p className="mb-0">Level: Native speaker</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default About;
