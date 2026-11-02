
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaAngular,
  FaPhp,
  FaGithub,
} from "react-icons/fa";
import { SiMysql } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 />, color: "#e44d26" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "#1572b6" },
  { name: "JavaScript", icon: <FaJs />, color: "#f7df1e" },
  { name: "React", icon: <FaReact />, color: "#61dafb" },
  { name: "Angular", icon: <FaAngular />, color: "#dd0031" },
  { name: "PHP", icon: <FaPhp />, color: "#777bb4" },
  { name: "MySQL", icon: <SiMysql />, color: "#00a6c8" },
  { name: "Git & GitHub", icon: <FaGithub />, color: "#ffffff" },
];

function Skills() {
  return (
    <section className="tech-stack-section section" id="skills">
      <div className="tech-stack-container">
        <motion.div
          className="tech-stack-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">MY DEVELOPER TOOLKIT</span>

          <h2>
            Tech <span className="neon-text">Stack</span>
          </h2>

          <p>
            A growing toolkit of languages, frameworks, and development tools
            that I practise through coursework and hands-on projects. I am
            continuing to strengthen the fundamentals and learn when each
            technology is useful.
          </p>
        </motion.div>

        <div className="tech-stack-grid">
          {skills.map((skill, index) => (
            <motion.div
              className="tech-stack-card"
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -7, scale: 1.02 }}
            >
              <div
                className="tech-stack-icon"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>

              <h3>{skill.name}</h3>
              <span>Learning · Building</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
