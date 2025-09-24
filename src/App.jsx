// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import ProjectDetail from "./pages/Projects/ProjectDetail"; // <-- nieuw

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />

        <div className="content">
          <Routes>
            {/* One-pager routes */}
            <Route
              path="/"
              element={
                <>
                  <section id="home"><Home /></section>
                  <section id="about"><About /></section>
                  <section id="projects"><Projects /></section>
                  <section id="contact"><Contact /></section>
                </>
              }
            />

            {/* Detailpagina voor projecten */}
            <Route path="/projects/:id" element={<ProjectDetail />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
