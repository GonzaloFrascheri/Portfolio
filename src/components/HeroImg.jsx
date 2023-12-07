import "./HeroImgStyles.css";

import React from 'react'

import IntroImg from "../assets/intro-bg.jpg"

import { Link } from "react-router-dom"

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img"
        src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>Estudiante avanzado de Tecnólogo en Informática.</p>
        <h1>Gonzalo Frascheri</h1>
        <div>
            <Link to="/project" className="btn">Proyectos</Link>
            <Link to="/contact" className="btn btn-light">Contacto</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg;
