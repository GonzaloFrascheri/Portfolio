import "./FooterStyles.css";
import React from "react";
import { 
  FaHome,
  FaPhone,
  FaMailBulk, 
  FaTwitter, 
  FaGithub, 
  FaLinkedinIn 
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="contact-reference">
          {/* Bloque de Información de Contacto */}
          <div className="contact-info">
            <div className="location">
              <FaHome size={20} style={{ color: "#fff" }} />
              <div className="contact-text">
                <p>Joaquín Requena 1670</p>
                <p>Montevideo, Uruguay</p>
              </div>
            </div>
            <div className="email">
              <h4>
                <FaMailBulk size={20} style={{ color: "#fff" }} />
                gonzalofrascheri@gmail.com
              </h4>
            </div>
            <div className="phone">
              <h4>
                <FaPhone size={20} style={{ color: "#fff" }} />
                098 953 280
              </h4>
            </div>
          </div>
          {/* Bloque de Aplicaciones de Referencia */}
          <div className="reference-apps">
            <h4>Aplicaciones de referencia</h4>
            <div className="social">
              <a 
                href="https://github.com/GonzaloFrascheri" 
                target="_blank" 
                rel="noreferrer"
              >
                <FaGithub size={30} style={{ color: "#fff" }} />
              </a>
              <a 
                href="https://www.linkedin.com/in/gonzalo-frascheri-48888a180/" 
                target="_blank" 
                rel="noreferrer"
              >
                <FaLinkedinIn size={30} style={{ color: "#fff" }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
