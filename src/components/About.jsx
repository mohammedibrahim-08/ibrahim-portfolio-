
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaFutbol,
  FaMapMarkerAlt,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import profileImage from "../assets/ibrahim-profile.png";

const highlights = [
  {
    icon: <FaGraduationCap />,
    title: "MCA Student",
    detail: "Dr. P. A. Inamdar University, Pune",
  },
  {
    icon: <FaLaptopCode />,
    title: "Web Development",
    detail: "Building modern web applications",
  },
  {
    icon: <FaFutbol />,
    title: "Football Player",
    detail: "Midfielder | District Level",
  },
];

function About() {
  return (
    <section className="about-section section" id="about">
      <div className="about-container">
        <motion.div
          className="about-image-area"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-image-glow"></div>

          <div className="about-image-ring">
            <img
              src={profileImage}
              alt="Portrait of Mohammed Ibrahim"
            />
          </div>

          <div className="about-image-tag">
            <FaCheckCircle />
            <span>Always Learning & Growing</span>
          </div>

          <div className="about-floating-card">
            <span className="floating-card-icon">
              <FaLaptopCode />
            </span>

            <div>
              <strong>Developer</strong>
              <small>Future Software Engineer</small>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">GET TO KNOW ME</span>

          <h2 className="section-title">
            About <span className="neon-text">Me</span>
          </h2>

          <h3>
            Hello! I'm Mohammed Ibrahim,
            <span> an aspiring software developer.</span>
          </h3>

          <p>
            I am currently pursuing my Master of Computer Applications (MCA)
            at Dr. P. A. Inamdar University, Pune. I have completed my
            Bachelor of Computer Applications (BCA) and developed a strong
            interest in web development and technology.
          </p>

          <p>
            I enjoy learning new technologies, creating useful applications,
            and turning ideas into practical digital solutions. I consider
            myself a hardworking, self-motivated, and quick learner who is
            always ready to take on new challenges.
          </p>

          <div className="about-location">
            <FaMapMarkerAlt />
            <span>Chhatrapati Sambhajinagar, Maharashtra, India</span>
          </div>

          <div className="about-highlights">
            {highlights.map((item) => (
              <motion.div
                className="about-highlight glass-card"
                key={item.title}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
              >
                <div className="highlight-icon">{item.icon}</div>

                <div>
                  <h4>{item.title}</h4>
                  <p>{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="about-buttons">
            <a href="#education" className="primary-btn about-btn">
              Explore My Journey <FaArrowRight />
            </a>

            <a
              href="/Mohammed-Ibrahim-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="outline-btn about-btn"
            >
              View My Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
