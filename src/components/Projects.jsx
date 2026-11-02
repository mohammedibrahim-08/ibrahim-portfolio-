
import { motion } from "framer-motion";
import {
  FaCode,
  FaTools,
  FaPlay,
  FaWallet,
  FaHeartbeat,
} from "react-icons/fa";

import nearnexaImage from "../assets/nearnexa.jpg";
import lifestreamImage from "../assets/lifestream.jpg";
import expenseImage from "../assets/expense-tracker.jpg";
import beaconImage from "../assets/beacon-healthcare.jpg";

const projects = [
  {
    number: "01",
    title: "NearNexa",
    category: "LOCAL SERVICES PLATFORM",
    description:
      "A local services booking platform designed to connect customers with nearby service providers through a simple and convenient experience.",
    technologies: ["Angular", "PHP", "MySQL", "REST API"],
    icon: <FaTools />,
    theme: "project-cyan",
    status: "In Development",
    image: nearnexaImage,
  },
  {
    number: "02",
    title: "LifeStream",
    category: "VIDEO STREAMING PLATFORM",
    description:
      "A video streaming application concept focused on providing users with an intuitive interface to explore and watch video content.",
    technologies: ["React", "Node.js", "MongoDB"],
    icon: <FaPlay />,
    theme: "project-purple",
    status: "Project Concept",
    image: lifestreamImage,
  },
  {
    number: "03",
    title: "Daily Expense Tracker",
    category: "FINANCE MANAGEMENT",
    description:
      "An expense management application to record daily spending, organize transactions, and monitor expenses through a dashboard.",
    technologies: ["PHP", "MySQL", "JavaScript", "CSS"],
    icon: <FaWallet />,
    theme: "project-blue",
    status: "Project",
    image: expenseImage,
  },
  {
    number: "04",
    title: "Beacon Healthcare",
    category: "HEALTHCARE PLATFORM",
    description:
      "A healthcare appointment application concept designed to simplify the process of discovering healthcare services and managing appointments.",
    technologies: ["React", "Node.js", "MongoDB"],
    icon: <FaHeartbeat />,
    theme: "project-green",
    status: "Project Concept",
    image: beaconImage,
  },
];

function Projects() {
  return (
    <section className="projects-section section" id="projects">
      <div className="projects-container">
        <motion.div
          className="projects-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">MY RECENT WORK</span>
          <h2>
            Featured <span className="neon-text">Projects</span>
          </h2>
          <p>
            A collection of applications and ideas that reflect my learning,
            creativity, and interest in software development.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              className="project-card glass-card"
              key={project.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              whileHover={{ y: -8 }}
            >
              <div
                className={`project-visual ${project.theme} has-image`}
                style={{
                  backgroundImage: `linear-gradient(to top, rgba(2, 8, 23, 0.72), rgba(2, 8, 23, 0.05)), url("${project.image}")`,
                }}
              >
                <span className="project-number">{project.number}</span>

                <div className="project-visual-icon">
                  {project.icon}
                </div>

                <span className="project-visual-label">
                  {project.title}
                </span>
              </div>

              <div className="project-content">
                <div className="project-category">{project.category}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="project-footer">
                  <span className="project-status">
                    <span></span>
                    {project.status}
                  </span>

                  <span className="project-link-label">
                    <FaCode /> Repository coming soon
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
