import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData"; // Importa el array de datos
import React from 'react';
import { motion } from "framer-motion";

const Work = () => {
  return (
    <motion.div
      className="work-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="project-container">
        {WorkCardData.map((val, ind) => {
          return (
            <WorkCard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
              source={val.source}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

export default Work;