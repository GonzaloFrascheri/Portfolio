import "./FooterStyles.css";
import React from "react";
import { 
  FaHome,
  FaPhone,
  FaMailBulk,  
  FaGithub, 
  FaLinkedinIn 
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="contact-reference">
          <div>
            Copyrighy 2025. Todos los derechos reservados.
          </div>
          {/* Bloque de Aplicaciones de Referencia */}
          <div className="reference-apps">
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
