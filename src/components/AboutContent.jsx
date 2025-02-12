import "./AboutContentStyles.css"
import { Link } from "react-router-dom"

import React from 'react'
import React1 from "../assets/project4.jpg"
import React2 from "../assets/project3.jpg"
import { motion } from "framer-motion"

const AboutContent = () => {
    return (
        <motion.div
          className="about"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="left">
            <h1>¿Quién soy?</h1>
            <p>
              Tengo 24 años, del interior pero residiendo en Montevideo hace ya unos años,
              me considero una persona proactiva que se encuentra en constante aprendizaje,
              muy buena trabajando en equipo como también en resolución de problemas.
            </p>
            <Link to="/contact">
              <button className="btn">CONTACTAR</button>
            </Link>
          </div>
          <div className="right">
            <div className="img-container">
              <div className="img-stack top">
                <img src={React1} className="img" alt="Imagen 1" />
              </div>
              <div className="img-stack bottom">
                <img src={React2} className="img" alt="Imagen 2" />
              </div>
            </div>
          </div>
        </motion.div>
      )
    }

export default AboutContent;