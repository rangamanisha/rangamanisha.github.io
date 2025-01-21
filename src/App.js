import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetails from "./components/ProjectDetails";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Default Home Route */}
        <Route
          path="/"
          element={
            <>
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Footer />
            </>
          }
        />
        {/* Project Details Routes */}
        <Route
          path="/project/gifti-global"
          element={<ProjectDetails title="GIFTI Global" />}
        />
        <Route path="/project/woblu" element={<ProjectDetails title="Woblu" />} />
        <Route path="/project/studemp" element={<ProjectDetails title="Studemp" />} />
      </Routes>
    </Router>
  );
};

export default App;
