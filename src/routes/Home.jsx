import React from 'react'

import Navbar from '../components/Navbar';
import HeroImg from '../components/HeroImg';
import Footer from '../components/Footer';
import Work from "../components/Work"
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
      <Work />
      <Footer />
    </motion.div>  
  );
};

export default Home;