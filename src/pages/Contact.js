import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-dark text-white py-5 d-flex flex-column justify-content-center"
      style={{ minHeight: "calc(100vh - 100px)" }}
    >
      <div className="container text-center">
        <h2 className="mb-4">Contact Me</h2>
        <p className="mb-4">
          I’m always open to opportunities and collaborations. Reach out via email or connect with me on LinkedIn for professional inquiries or further contact details.
        </p>
        <div
          className="d-inline-block bg-dark rounded shadow-lg p-4"
          style={{ maxWidth: "400px" }}
        >
          <h5 className="text-warning mb-4">Get in Touch</h5>
          <div className="mb-3">
            <span className="fw-semibold text-warning" style={{ fontSize: "1.3rem" }}>
              Email:
            </span>
            <br />
            <a
              href="mailto:cvijiczoran4@gmail.com"
              className="text-white text-decoration-none"
              style={{ fontSize: "1rem", fontWeight: "bold" }}
            >
              cvijiczoran4@gmail.com
            </a>
          </div>
          <div>
            <span className="fw-semibold" style={{ fontSize: "1.3rem", color: "#0077b5" }}>
              LinkedIn:
            </span>
            <br />
            <a
              href="https://www.linkedin.com/in/zoran-cvijic/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
              style={{ fontSize: "1rem", fontWeight: "bold", color: "#0077b5" }}
            >
              linkedin.com/in/zoran-cvijic
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
