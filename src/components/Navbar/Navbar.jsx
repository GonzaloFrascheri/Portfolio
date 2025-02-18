import "./NavbarStyle.css"
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion"

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <motion.div
      className={color ? "header header-bg" : "header"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul className={click ? "nav-menu.active" : "nav-menu"}>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/project">Proyectos</Link>
        </li>
        <li>
          <Link to="/about">Sobre mi</Link>
        </li>
        <li>
          <Link to="/contact">Contacto</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </motion.div>
  )
}

export default Navbar;