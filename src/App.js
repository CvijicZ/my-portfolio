import React, { useEffect } from "react";
import Header from "./components/Header"; // Assuming Header has the navigation and scroll functionality
import About from "./pages/About"; // The About section will just be a regular component
import Projects from "./pages/Projects"; 
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const App = () => {
  useEffect(() => {

    document.body.style.backgroundColor = "#292b2c"; 

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
