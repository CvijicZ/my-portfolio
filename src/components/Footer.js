import React from "react";

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-3">
            <div className="container text-center">
                <p className="mb-2">© 2024 Zoran Cvijic</p>
                <div className="d-flex justify-content-center">
                    <a
                        href="https://github.com/CvijicZ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-light mx-3"
                    >
                        <i className="fab fa-github fa-2x custom-icon-hover"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/zoran-cvijic/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mx-3"
                    >
                        <i
                            className="fab fa-linkedin fa-2x custom-icon-hover"
                            style={{ color: "#0a66c2" }}
                        ></i>
                    </a>
                    <a
                        href="mailto:cvijiczoran4@gmail.com"
                        className="mx-3"
                    >
                        <i className="fas fa-envelope fa-2x text-warning custom-icon-hover"></i>
                    </a>
                </div>
                <p className="mt-3">
                    Built with React, Bootstrap, and love 💖
                </p>
            </div>
        </footer>
    );
};

export default Footer;
