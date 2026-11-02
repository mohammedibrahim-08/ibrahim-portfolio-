
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaUniversity,
  FaSchool,
  FaBookOpen,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const educationData = [
  {
    level: "POSTGRADUATION",
    degree: "Master of Computer Applications",
    institution: "Dr. P. A. Inamdar University",
    college: "Allana Institute of Computer Applications and Information Technology",
    year: "2026 – 2028",
    location: "Pune, Maharashtra",
    status: "Currently Pursuing",
    icon: <FaGraduationCap />,
  },
  {
    level: "GRADUATION",
    degree: "Bachelor of Computer Applications",
    institution: "Dr. Babasaheb Ambedkar Marathwada University",
    college: "Department of Management Science",
    year: "2026",
    location: "Chhatrapati Sambhajinagar, Maharashtra",
    status: "Completed",
    icon: <FaUniversity />,
  },
  {
    level: "HIGHER SECONDARY",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Kohinoor Junior College",
    college: "Khuldabad",
    year: "2023",
    location: "Maharashtra, India",
    status: "Completed",
    icon: <FaBookOpen />,
  },
  {
    level: "SECONDARY",
    degree: "Secondary School Certificate (SSC)",
    institution: "Sarosh Urdu High School",
    college: "Talimabad Mitmita",
    year: "2021",
    location: "Chhatrapati Sambhajinagar, Maharashtra",
    status: "Completed",
    icon: <FaSchool />,
  },
];

function Education() {
  return (
    <section className="education-section section" id="education">
      <div className="education-container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">MY ACADEMIC JOURNEY</span>
          <h2 className="section-title">
            Education & <span className="neon-text">Qualifications</span>
          </h2>
          <p className="section-description">
            My educational journey and the foundation of my knowledge in
            technology and computer applications.
          </p>
        </motion.div>

        <div className="education-timeline">
          <div className="timeline-line"></div>

          {educationData.map((item, index) => (
            <motion.div
              className={`education-item ${
                index % 2 === 0 ? "timeline-left" : "timeline-right"
              }`}
              key={item.degree}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="timeline-marker">{item.icon}</div>

              <motion.div
                className="education-card glass-card"
                whileHover={{ y: -7 }}
                transition={{ duration: 0.25 }}
              >
                <div className="education-card-top">
                  <span className="education-level">{item.level}</span>
                  <span
                    className={`education-status ${
                      index === 0 ? "status-current" : ""
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <h3>{item.degree}</h3>
                <h4>{item.institution}</h4>
                <p className="education-college">{item.college}</p>

                <div className="education-meta">
                  <span>
                    <FaCalendarAlt />
                    {item.year}
                  </span>
                  <span>
                    <FaMapMarkerAlt />
                    {item.location}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
