import "./HeroImgStyles.css";
import React from 'react'
import IntroImg from "../assets/intro-bg.jpg"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <motion.img
          className="into-img"
          src={IntroImg}
          alt="IntroImg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
      <motion.div
        className="content"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p>Estudiante avanzado de Tecnólogo en Informática.</p>
        <h1>Gonzalo Frascheri</h1>
        <div>
          <Link to="/project" className="btn">Proyectos</Link>
          <Link to="/contact" className="btn btn-light">Contacto</Link>
        </div>
      </motion.div>
    </div>
  )
}

export default HeroImg;