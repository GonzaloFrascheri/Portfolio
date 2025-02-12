import React from 'react';
import { motion } from 'framer-motion';
import "./HeroImg2Styles.css";

const HeroImg2 = ({ heading, text }) => {
  return (
    <motion.div 
      className="hero-img"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="heading">
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>
    </motion.div>
  );
};

export default HeroImg2;