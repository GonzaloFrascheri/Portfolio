import { Link } from "react-router-dom";
import "./PricingCardStyles.css"
import React from 'react'
import { motion } from "framer-motion"

const PricingCard = () => {
  const cardVariant = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="pricing">
      <div className="card-container">
        <motion.div className="card" variants={cardVariant} whileHover="hover">
          <h3>- Basic -</h3>
          <span className="bar"></span>
          <p className="btc">$ 100</p>
          <p>- 3 Days -</p>
          <p>- 3 Pages -</p>
          <p>- Featured -</p>
          <p>- Responsive Design -</p>
          <Link to="/contact" className="btn">PURCHASE NOW</Link>
        </motion.div>
        <motion.div className="card" variants={cardVariant} whileHover="hover">
          <h3>- Premium -</h3>
          <span className="bar"></span>
          <p className="btc">$ 200</p>
          <p>- 2 Days -</p>
          <p>- 5 Pages -</p>
          <p>- Featured -</p>
          <p>- Responsive Design -</p>
          <Link to="/contact" className="btn">PURCHASE NOW</Link>
        </motion.div>
        <motion.div className="card" variants={cardVariant} whileHover="hover">
          <h3>- Bussines -</h3>
          <span className="bar"></span>
          <p className="btc">$ 300</p>
          <p>- 5 Days -</p>
          <p>- 8 Pages -</p>
          <p>- Featured -</p>
          <p>- Responsive Design -</p>
          <Link to="/contact" className="btn">PURCHASE NOW</Link>
        </motion.div>
      </div>
    </div>
  )
}

export default PricingCard;