import "./Header.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import profilePic from "../../assets/jyothi.jpg";

const Header = () => {
  return (
    <header className="header" id="header">
      <motion.div
        className="profileContainer"
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={profilePic} alt="Jyothi Kaku" className="profilePic" />

        <h1 className="name">
           <span className="gradientText">Jyothi Kaku</span>
        </h1>

        <h2 className="tagline">
          <Typewriter
            options={{
              strings: [
                "Full-Stack Developer  | MERN Enthusiast ",
                "AI-Driven Web Innovator  | Problem Solver ",
                "Creating Scalable & Interactive Platforms ",
                "Passionate About Technology & Learning ",
              ],
              autoStart: true,
              loop: true,
              delay: 55,
              deleteSpeed: 30,
            }}
          />
        </h2>
      </motion.div>

      <motion.div
        className="socialLinks"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
      >
        <a
          href="https://github.com/JYOTHI229"
          target="_blank"
          rel="noopener noreferrer"
          className="socialIcon github"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/jyothi-kaku/"
          target="_blank"
          rel="noopener noreferrer"
          className="socialIcon linkedin"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://leetcode.com/u/JYOTHI__KAKU/"
          target="_blank"
          rel="noopener noreferrer"
          className="socialIcon leetcode"
        >
          <SiLeetcode />
        </a>
      </motion.div>

      <div className="scrollDown">
        <span>↓</span>
      </div>
    </header>
  );
};

export default Header;
