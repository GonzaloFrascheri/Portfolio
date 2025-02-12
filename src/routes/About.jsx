import React from 'react'
import Navbar from '../components/Navbar';
import HeroImg2 from '../components/HeroImg2';
import AboutContent from '../components/AboutContent';
import Footer from '../components/Footer';
import { motion } from "framer-motion"

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navbar />
      <HeroImg2 heading="ABOUT." text="I'm a Front-End Developer."/>
      <AboutContent />
      <Footer />
    </motion.div>
  )
}

export default About;