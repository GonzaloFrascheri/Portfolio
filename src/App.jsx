import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";

import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen transition-colors">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
