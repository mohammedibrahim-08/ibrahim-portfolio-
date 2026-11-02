
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaJs,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaCode,
} from "react-icons/fa";
import { SiAngular } from "react-icons/si";

const floatingIcons = [
  { Icon: SiAngular, name: "Angular", className: "tech-angular" },
  { Icon: FaJs, name: "JavaScript", className: "tech-js" },
  { Icon: FaPhp, name: "PHP", className: "tech-php" },
  { Icon: FaHtml5, name: "HTML5", className: "tech-html" },
  { Icon: FaCss3Alt, name: "CSS3", className: "tech-css" },
  { Icon: FaCode, name: "Code", className: "tech-code" },
];

function Hero() {
  const typedElement = useRef(null);
  const musicRef = useRef(null);

  // Typing animation
  useEffect(() => {
    if (!typedElement.current) return;

    const typed = new Typed(typedElement.current, {
      strings: [
        "MCA Student",
        "Web Developer",
        "Frontend Developer",
        "Software Developer",
        "Footballer",
      ],
      typeSpeed: 60,
      backSpeed: 35,
      backDelay: 1200,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => typed.destroy();
  }, []);

  // NEXUS automatic welcome voice and background music
  useEffect(() => {
    const audio = musicRef.current;

    let hasSpoken = false;
    let musicPlaying = false;
    let welcomeMessage = null;
    let welcomeTimer = null;

    const startMusic = () => {
      if (!audio || musicPlaying) return;

      audio.volume = 0.18;

      audio.play()
        .then(() => {
          musicPlaying = true;
        })
        .catch(() => {
          console.log("Background music is waiting for browser permission.");
        });
    };

    const speakWelcome = () => {
      if (hasSpoken || !("speechSynthesis" in window)) {
        return;
      }

      hasSpoken = true;

      welcomeMessage = new SpeechSynthesisUtterance(
        "Hello! Welcome to Mohammed Ibrahim's digital portfolio. I am Nexus, your personal AI assistant. Let's explore his skills, projects and achievements. Enjoy your visit!"
      );

      welcomeMessage.rate = 0.9;
      welcomeMessage.pitch = 0.8;
      welcomeMessage.volume = 1;

      welcomeMessage.onend = () => {
        

        if (audio) {
          audio.muted = false;
          startMusic();
        }
      };

      welcomeMessage.onerror = (event) => {
        console.log("Welcome voice could not play:", event.error);

        hasSpoken = false;

        if (audio) {
          audio.muted = false;
          startMusic();
        }
      };

      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(welcomeMessage);
    };

    const handleFirstInteraction = () => {
      if (!hasSpoken) {
        speakWelcome();
      }

      if (audio && !musicPlaying) {
        audio.muted = false;
        startMusic();
      }
    };

    // Try muted music autoplay first
    if (audio) {
      audio.muted = true;
      audio.volume = 0.18;

      audio.play()
        .then(() => {
          musicPlaying = true;
        })
        .catch(() => {
          console.log("Music autoplay is blocked by the browser.");
        });
    }

    // Automatically try the welcome voice after page load
    welcomeTimer = window.setTimeout(() => {
      speakWelcome();
    }, 800);

    // Fallback if the browser blocks automatic playback
    window.addEventListener("click", handleFirstInteraction, { once: true });
    window.addEventListener("keydown", handleFirstInteraction, { once: true });

    return () => {
      if (welcomeTimer) {
        window.clearTimeout(welcomeTimer);
      }

      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);

      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }

      if (audio) {
        audio.pause();
        audio.currentTime = 0;
        audio.muted = false;
      }
    };
  }, []);

  return (
    <section className="hero section" id="home">
      <audio
        ref={musicRef}
        src="/music/lofi.mp3"
        loop
        preload="auto"
      />

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
      >
        <div className="hero-badge">
          <span className="status-dot"></span>
          MCA Student | Aspiring Software Developer
        </div>

        <h1>
          Hi, I'm <span className="neon-text">Mohammed</span>
          <br />
          Ibrahim<span className="hero-period">.</span>
        </h1>

        <h2 className="typing-heading">
          I'm a <span className="typing-text" ref={typedElement}></span>
        </h2>

        <p className="hero-description">
          I'm an MCA student at Dr. P. A. Inamdar University, Pune, with a
          passion for web development and creating meaningful solutions. I
          enjoy building clean, responsive, and user-friendly applications
          that solve real problems.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            Explore My Projects <FaArrowRight />
          </a>

          <a
            href="/Mohammed-Ibrahim-Resume.pdf"
            download
            className="outline-btn"
          >
            Download Resume
          </a>

          <a href="#contact" className="outline-btn">
            Contact Me
          </a>
        </div>

        <div className="hero-social">
          <span>FOLLOW ME</span>

          <a
            href="https://www.linkedin.com/in/mohammed-ibrahim-73411a336/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="social-link"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/mohammedibrahim-08"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="social-link"
          >
            <FaGithub />
          </a>

          <a
            href="mailto:mohammedibrahim08@gmail.com"
            aria-label="Email"
            className="social-link"
          >
            <FaEnvelope />
          </a>
        </div>
      </motion.div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1 }}
      >
        <div className="hero-orbit orbit-one"></div>
        <div className="hero-orbit orbit-two"></div>
        <div className="hero-glow"></div>

        {floatingIcons.map(({ Icon, name, className }, index) => (
          <motion.div
            key={name}
            className={`floating-tech ${className}`}
            animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
            transition={{
              duration: 3 + index * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon />
            <span>{name}</span>
          </motion.div>
        ))}

        <motion.div
          className="laptop-container"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="laptop-screen">
            <div className="code-header">
              <div className="code-dots">
                <i></i>
                <i></i>
                <i></i>
              </div>
              <span>portfolio.jsx</span>
            </div>

            <div className="code-content">
              <p>
                <span className="code-purple">const</span> developer = {"{"}
              </p>

              <p className="indent">
                name: <span className="code-green">"Mohammed Ibrahim"</span>,
              </p>

              <p className="indent">
                role: <span className="code-green">"MCA Student"</span>,
              </p>

              <p className="indent">
                passion: <span className="code-blue">"Web Development"</span>,
              </p>

              <p className="indent">skills: [</p>

              <p className="indent-two">
                <span className="code-orange">"HTML"</span>,
                <span className="code-orange">" CSS"</span>,
              </p>

              <p className="indent-two">
                <span className="code-orange">"JavaScript"</span>,
              </p>

              <p className="indent-two">
                <span className="code-orange">"Angular"</span>
              </p>

              <p className="indent">]</p>
              <p>{"}"}</p>

              <p className="code-last">
                <span className="code-purple">console</span>.log(
                <span className="code-green">"Building the future..."</span>)
                <span className="code-cursor">|</span>
              </p>
            </div>
          </div>

          <div className="laptop-base">
            <div className="laptop-trackpad"></div>
          </div>
        </motion.div>

        <div className="hero-visual-caption">
          <span></span> BUILDING SOMETHING AMAZING
        </div>
      </motion.div>

      <a href="#about" className="scroll-indicator">
        <span>SCROLL TO EXPLORE</span>
        <FaArrowRight />
      </a>
    </section>
  );
}

export default Hero;
