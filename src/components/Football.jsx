
import { motion } from "framer-motion";
import footballImage from "../assets/football-bg.png";

function Football() {
  return (
    <section className="football-section section" id="football">
      <motion.img
        src={footballImage}
        alt="Futuristic football stadium with a player wearing jersey number 8 and football achievements"
        className="football-design-image"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
    </section>
  );
}

export default Football;
