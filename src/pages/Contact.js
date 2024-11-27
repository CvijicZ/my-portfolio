import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission (e.g., send to an API or email service)
    setFormStatus("Your message has been sent! Thank you for reaching out.");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div id="contact" className="bg-dark text-white py-5">
      <div className="container">
        <h2 className="text-center mb-4">Contact Me</h2>
        <p className="text-center mb-5">
          Have any questions or want to work together? Feel free to reach out!
        </p>
        <div className="row">
          <div className="col-md-6 mx-auto">
            <form onSubmit={handleSubmit} className="shadow-lg p-4 bg-secondary rounded">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-dark w-100">
                Send Message
              </button>
            </form>
            {formStatus && (
              <div className="mt-3 alert alert-success">{formStatus}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
