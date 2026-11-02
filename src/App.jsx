
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Football from "./components/Football";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import JarvisBackground from "./components/JarvisBackground";
import "./App.css";

function App() {
  return (
    <div className="app">
      <JarvisBackground />

      <div className="background-glow glow-one"></div>
      <div className="background-glow glow-two"></div>

      <div className="app-content">
        <Navbar />

        <main>
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Football />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
