import { useEffect, useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="contact" className={`contact ${fadeIn ? "fade-in" : ""}`}>
      <h2 className="title">Contact Me</h2>
      <div className="contactSplit">
        {/* Contact Info */}
        <div className="contactInfo">
          <p className="introText">
            Hi, I am a Full-Stack Developer and Software Development Intern at C-DAC. I specialize in building scalable MERN stack applications, real-time collaboration platforms, and containerized backend architectures. Experienced in integrating LLMs/OpenAI APIs, designing secure RESTful services, and automating complex job workflows with Docker, Redis, and BullMQ. Qualified in GATE CSE 2026, with a strong foundation in Java, Data Structures, and Core Computer Science.
          </p>

          <div className="contactItem">
            <FaEnvelope className="contactIcon emailIcon" />
            <p>Email: <a href="mailto:jyothikaku229@gmail.com">jyothikaku229@gmail.com</a></p>
          </div>

          <div className="contactItem">
            <FaGithub className="contactIcon githubIcon" />
            <p>GitHub: <a href="https://github.com/JYOTHI229" target="_blank" rel="noopener noreferrer">JYOTHI229</a></p>
          </div>

          <div className="contactItem">
            <FaLinkedin className="contactIcon linkedinIcon" />
            <p>LinkedIn: <a href="https://www.linkedin.com/in/jyothi-kaku/" target="_blank" rel="noopener noreferrer">Jyothi Kaku</a></p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="contactDivider"></div>
    </section>
  );
};

export default Contact;
