// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Experience from "./components/Experience";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import ProjectDetails from "./components/ProjectDetails";

// const App = () => {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         {/* Default Home Route */}
//         <Route
//           path="/"
//           element={
//             <>
//               <About />
//               <Skills />
//               <Experience />
//               <Projects />
//               <Footer />
//             </>
//           }
//         />
//         {/* Project Details Routes */}
//         <Route
//           path="/project/gifti-global"
//           element={<ProjectDetails title="GIFTI Global" />}
//         />
//         <Route path="/project/woblu" element={<ProjectDetails title="Woblu" />} />
//         <Route path="/project/studemp" element={<ProjectDetails title="Studemp" />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectDetails from "./components/ProjectDetails";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F9C4C0", // Soft pastel pink/coral
    },
    secondary: {
      main: "#374151", // Deep navy/charcoal gray
    },
    background: {
      default: "#F8F8F8", // Light gray background
    },
    text: {
      primary: "#111827", // Dark gray/black for readability
      secondary: "#374151", // Secondary text
    },
  },
  typography: {
    fontFamily: "Roboto, Open Sans, Arial, sans-serif", // Clean sans-serif for body
    h1: {
      fontFamily: "Playfair Display, Merriweather, serif", // Modern serif for headings
      fontWeight: 700,
    },
    h2: {
      fontFamily: "Playfair Display, Merriweather, serif",
      fontWeight: 600,
    },
    button: {
      fontFamily: "Poppins, Lato, sans-serif", // Bold sans-serif for CTAs
      textTransform: "none",
      fontWeight: 600,
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
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
          <Route path="/project/gifti-global" element={<ProjectDetails title="GIFTI Global" />} />
          <Route path="/project/woblu" element={<ProjectDetails title="Woblu" />} />
          <Route path="/project/studemp" element={<ProjectDetails title="Studemp" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
