import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Info from "./Info";
import Contact from "./Contact";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

function App() {
  return (
    <div className="container">
      <div id="home">
        <Navbar />
        <Info />
        <Contact />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="education-timeline">
        <Education />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
