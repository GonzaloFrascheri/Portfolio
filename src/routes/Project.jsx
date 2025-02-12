import React from 'react'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import PricingCard from '../components/PricingCard';
import Work from '../components/Work';
import { motion } from "framer-motion"

const Project = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navbar />
      <HeroImg2 heading="PROYECTOS." text="Algunos de mis trabajos"/>
      <Work />
      {/* <PricingCard /> */} Si queremos algún día incluir cartas con precios solamente lo realizamos descomentando esta linea, y actualizando los datos.
      <Footer />
    </motion.div>
   
  )
}

export default Project;