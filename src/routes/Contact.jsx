import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import HeroImg2 from '../components/HeroImg2/HeroImg2';
import Formulario from '../components/Form/Form'; 
import Footer from '../components/Footer/Footer';
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navbar />
      <HeroImg2 heading="CONTACTO." text="No dudes en dejarme tu consulta." />
      <Formulario />
      <Footer />
    </motion.div>
  );
};

export default Contact