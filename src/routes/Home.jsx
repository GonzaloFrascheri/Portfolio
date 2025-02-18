import React from 'react'

import Navbar from '../components/Navbar/Navbar';
import HeroImg from '../components/HeroImg/HeroImg';
import Experience from '../components/Experience/Experience';
import Footer from '../components/Footer/Footer';
import { motion } from 'framer-motion';


const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navbar />
      <HeroImg />
      <Experience />
      <Footer />
    </motion.div>  
  );
};

export default Home;