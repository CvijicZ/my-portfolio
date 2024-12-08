import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="bg-dark text-white py-5">
      <div className="container text-center">
        <h2 className="mb-4">Contact Me</h2>
        <p className="mb-4">
          Feel free to reach out via email. If you need additional contact details, please send me an email.
        </p>
        <div className="py-4 px-3 bg-secondary rounded d-inline-block shadow-lg">
          <h5 className="text-warning mb-2">Email</h5>
          <a
            href="mailto:cvijiczoran4@gmail.com"
            className="text-white text-decoration-none"
            style={{ fontSize: "1.25rem", fontWeight: "bold" }}
          >
            cvijiczoran4@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
