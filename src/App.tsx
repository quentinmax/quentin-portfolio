import { useState } from "react";
import ReactLenis from "@studio-freight/react-lenis";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./screens/Home";
import Project from "./screens/Project";
import Projects from "./screens/Projects";
import About from "./screens/About";
import Contact from "./screens/Contact";

function App() {
  const location = useLocation();

  return (
    <ReactLenis root options={{ easing: "ease-in-out" }}>
      <Routes location={location} key={location.pathname}>
        <Route index path="/" element={<Home />} />
        <Route index path="/contact" element={<Contact />} />
        <Route index path="/about" element={<About />} />
        <Route index path="/projects" element={<Projects />} />
        <Route index path="/project/:id" element={<Project />} />
      </Routes>
    </ReactLenis>
  );
}

export default App;
