import "./HeroImgStyles.css";
import React from 'react';
import IntroImg from "../../assets/intro-bg.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroImg = () => {
  return (
    <div className="hero flex items-center justify-center h-screen text-center relative">
      <div className="mask absolute inset-0">
        <motion.img
          className="into-img w-full h-full object-cover"
          src={IntroImg}
          alt="IntroImg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
      <motion.div
        className="content flex flex-col items-center justify-center z-10 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }}
      >
        <div className="content">
          <p>Estudiante avanzado de Tecnólogo en Informática.</p>
          <h1>Gonzalo Frascheri</h1>
        </div>
      </motion.div>
    </div>
  );
}

export default HeroImg;