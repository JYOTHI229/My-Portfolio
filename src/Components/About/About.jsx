import { useEffect, useState } from "react";
import "./About.css";
import { motion } from "framer-motion";

const About = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setActive(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" className={`about ${active ? "active" : ""}`}>
      {/* Floating background glow */}
      <div className="aboutGlow"></div>

      <div className="aboutContent">
        <h2 className="aboutTitle">
          <span>Who</span> I Am
        </h2>

        <div className="aboutLine"></div>

        <p className="aboutPara para1">
          I am a passionate Full-Stack Developer dedicated to building{" "}
          <span className="highlight">scalable, high-performance web applications</span>. 
          I thrive at the intersection of <span className="highlight">design and engineering</span>, 
          transforming complex ideas into responsive user interfaces backed by{" "}
          <span className="highlight">secure, robust backend architectures</span>. 
          Whether architecting real-time systems, integrating <span className="highlight">AI capabilities</span>, 
          or automating workflows, I enjoy owning the entire product lifecycle from concept to deployment.
        </p>

        <p className="aboutTagline">
          Turning <span>complex ideas into powerful web applications.</span>
        </p>

        <motion.div
          className="AboutMeDivider"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        />
      </div>
    </section>
  );
};

export default About;