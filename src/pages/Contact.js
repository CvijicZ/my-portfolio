import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-dark text-white py-5 d-flex flex-column justify-content-center"
      style={{
        minHeight: "calc(100vh - 100px)",
        background: "linear-gradient(135deg, #1d1f20, #272a2b)",
      }}
    >
      <div className="container text-center">
        <h2 className="mb-4" style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
          Contact Me
        </h2>
        <p className="mb-4" style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>
          I’m always open to opportunities and collaborations. Reach out via email or connect with me on LinkedIn for professional inquiries or further contact details.
        </p>
        <div
          className="d-inline-block bg-dark rounded shadow-lg p-4"
          style={{
            maxWidth: "400px",
            boxShadow: "0 0 15px rgba(255, 215, 0, 0.3)",
          }}
        >
          <h5 className="text-warning mb-4" style={{ fontSize: "1.8rem" }}>
            Get in Touch
          </h5>
          <div className="mb-3">
            <span
              className="fw-semibold text-warning"
              style={{ fontSize: "1.3rem", display: "block" }}
            >
              Email:
            </span>
            <a
              href="mailto:cvijiczoran4@gmail.com"
              className="text-white text-decoration-none"
              style={{
                fontSize: "1rem",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <i className="bi bi-envelope-fill"></i>
              cvijiczoran4@gmail.com
            </a>
          </div>
          <div>
            <span
              className="fw-semibold"
              style={{
                fontSize: "1.3rem",
                color: "#0077b5",
                display: "block",
              }}
            >
              LinkedIn:
            </span>
            <a
              href="https://www.linkedin.com/in/zoran-cvijic/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
              style={{
                fontSize: "1rem",
                fontWeight: "bold",
                color: "#0077b5",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <i className="bi bi-linkedin"></i>
              linkedin.com/in/zoran-cvijic
            </a>
          </div>
          <button
            className="btn btn-warning mt-4"
            style={{ fontSize: "1.1rem", fontWeight: "bold" }}
            onClick={() => window.location.href = "mailto:cvijiczoran4@gmail.com"}
          >
            Email Me <i className="fas fa-solid fas fa-envelope fs-5"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
