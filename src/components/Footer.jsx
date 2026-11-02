
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaArrowUp,
} from "react-icons/fa";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Football", href: "#football" },
  { name: "Contact", href: "#contact" },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              M<span>.</span>
            </a>
            <h3>Mohammed Ibrahim</h3>
            <p>MCA Student | Aspiring Software Developer</p>
          </div>

          <div className="footer-navigation">
            <h4>Quick Links</h4>
            <div className="footer-links">
              {footerLinks.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-social">
            <h4>Let's Connect</h4>
            <div className="footer-social-links">
              <a href="https://www.linkedin.com/in/mohammed-ibrahim-73411a336/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://github.com/mohammedibrahim-08" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://wa.me/919405914764" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Mohammed Ibrahim. All rights reserved.</p>
          <p>
            Designed & Developed by <span>Mohammed Ibrahim</span>
          </p>
          <motion.a
            href="#home"
            className="back-to-top"
            whileHover={{ y: -5 }}
            aria-label="Back to top"
          >
            <FaArrowUp />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
