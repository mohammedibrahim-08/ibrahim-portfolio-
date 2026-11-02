
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";

const contactDetails = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "mohammedibrahim08@gmail.com",
    link: "mailto:mohammedibrahim08@gmail.com",
  },
  {
    icon: <FaPhoneAlt />,
    label: "Phone",
    value: "+91 9405914764",
    link: "tel:+919405914764",
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Location",
    value: "Chhatrapati Sambhajinagar, Maharashtra",
    link: null,
  },
];

const socialLinks = [
  {
    icon: <FaLinkedin />,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mohammed-ibrahim-73411a336/",
  },
  {
    icon: <FaGithub />,
    name: "GitHub",
    link: "https://github.com/mohammedibrahim-08",
  },
  {
    icon: <FaWhatsapp />,
    name: "WhatsApp",
    link: "https://wa.me/919405914764",
  },
];

function Contact() {
  return (
    <section className="contact-section section" id="contact">
      <div className="contact-container">
        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">GET IN TOUCH</span>
          <h2>
            Let's Build Something <span className="neon-text">Together</span>
          </h2>
          <p>
            Have an opportunity, project idea, or just want to connect?
            Feel free to reach out. I'd be happy to hear from you.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info glass-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3>Contact Information</h3>
            <p className="contact-info-description">
              Here are the best ways to connect with me.
            </p>

            <div className="contact-details">
              {contactDetails.map((item) => (
                <div className="contact-detail" key={item.label}>
                  <span className="contact-detail-icon">{item.icon}</span>
                  <div>
                    <span>{item.label}</span>
                    {item.link ? (
                      <a href={item.link}>{item.value}</a>
                    ) : (
                      <p>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-socials">
              <h4>Connect With Me</h4>
              <div className="contact-social-links">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    title={item.name}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-message glass-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">OPEN TO OPPORTUNITIES</span>
            <h3>Let's Start a Conversation</h3>
            <p>
              I am currently pursuing my MCA and looking forward to
              opportunities where I can learn, contribute, and grow as a
              software developer.
            </p>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mohammedibrahim08@gmail.com&su=Portfolio%20Enquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-btn"
            >
              Send Me an Email <FaArrowRight />
            </a>

            <div className="contact-availability">
              <span></span>
              Available for learning and career opportunities
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
