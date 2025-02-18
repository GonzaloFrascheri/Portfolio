import "./WorkCardStyles.css";
import React from 'react';
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const WorkCard = (props) => {
  return (
    <motion.div
      className="project-card"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <img src={props.imgsrc} alt="Project" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <NavLink to={props.view} className="btn">Ir</NavLink>
          <NavLink to={props.source} className="btn">GitHub</NavLink>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkCard;