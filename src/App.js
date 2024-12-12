import React, { useEffect } from "react";
import Header from "./components/Header";
import About from "./pages/About";
import Projects from "./pages/Projects"; 
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const App = () => {
  useEffect(() => {

    document.body.style.backgroundColor = "#292b2c"; 
    document.title="Portfolio | Zoran Cvijic"

  });
  return (
    <>
     <Navbar />
      <Header />
      <About />
      <Projects /> 
      <Contact />
      <Footer />
    </>
  );
};

export default App;
