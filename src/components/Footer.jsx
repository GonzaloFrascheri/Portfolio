import "./FooterStyles.css"

import React from 'react'

import { 
    FaHome,
    FaPhone,
    FaMailBulk, 
    FaTwitter, 
    FaGithub, 
    FaLinkedinIn 
} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{ color:"#fff", marginRight: "2rem" }} />
                <div>
                    <p>Joquin Requena 1670</p>
                    <p>Montevideo, Uruguay</p>
                </div>
            </div>
            <div className="email">
                <h4>
                    <FaMailBulk size={20} style={{ color:"#fff", marginRight: "2rem" }} />
                    gonzalofrascheri@gmail.com
                </h4>
            </div>
            <div className="phone">
                <h4>
                    <FaPhone size={20} style={{ color:"#fff", marginRight: "2rem" }} />
                    098 953 280
                </h4>
            </div>
        </div>
        <div className="right">
            <h4>Aplicaciones de referencia.</h4>
            {/* <p></p> */}
            <div className="social">
                <FaTwitter size={30} style={{ color:"#fff", marginRight: "1rem" }}/>
                <FaGithub size={30} style={{ color:"#fff", marginRight: "1rem" }} />
                <FaLinkedinIn size={30} style={{ color:"#fff", marginRight: "1rem" }} />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
