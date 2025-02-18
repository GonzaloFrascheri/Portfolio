import React, { useState } from "react";
import "./Experience.css"
import servicioImg from '../../assets/servicio_central_de_informatica_seciu.jpg'
import gooing from '../../assets/GooIng.png'
import { motion } from "framer-motion"

const Experience = () => {
    return (
      <motion.div
        className="about w-11/12 max-w-5xl mx-auto p-8 bg-gray-900 text-gray-100 rounded-lg shadow-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="left w-full mb-6">
          <h1 className="text-6xl font-bold mb-4 drop-shadow-xl">
            Experiencia laboral
          </h1>
          <p className="text-lg mb-2 font-bold drop-shadow-sm">
            Analista en Informática
          </p>
          <p className="text-base leading-relaxed drop-shadow-sm">
            - Implementación, testeo y ejecución de consultas en las distintas Bases de Datos de cada ambiente que maneja el Sector Producción para el sistema SGAE (Oracle).
          </p>
          <p className="text-base leading-relaxed drop-shadow-sm">
            - Gestión de usuarios en la UACL (PostgreSQL).
          </p>
          <p className="text-base leading-relaxed drop-shadow-sm">
            - Soporte a usuarios mediante la resolución de incidentes reportados por mesa de ayuda.
          </p>
          <p className="text-base leading-relaxed drop-shadow-sm">
            - Liberación de nuevas versiones del sistema SGAE en servidores jboss de Producción.
          </p>
        </div>
        <div className="right w-full flex justify-center mt-8">
          <div className="img-container">
            <div className="img-stack top">
              <img
                src={servicioImg}
                className="img max-w-full rounded-md shadow-lg hover:scale-105 transition-transform duration-300"
                alt="servicio_central_de_informatica_seciu.jpg"
              />
            </div>
          </div>
        </div>
        <div className="left w-full mb-6">
          <p className="text-lg mb-2 font-bold drop-shadow-sm">
            DevOps Engineer - GooIng
          </p>
          <p className="text-base leading-relaxed drop-shadow-sm">
            - Especialista en DevOps GCP/GWS. Impulsando la transformación digital a través de soluciones cloud escalables y eficientes.
          </p>
          
        </div>
        <div className="right w-full flex justify-center mt-8">
          <div className="img-container">
            <div className="img-stack top">
              <img
                src={gooing}
                className="img max-w-full rounded-md shadow-lg hover:scale-105 transition-transform duration-300"
                alt="GooIng.png"
              />
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

export default Experience;