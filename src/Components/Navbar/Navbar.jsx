import { useState,useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext.jsx";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext); 

  const handleClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 70; // navbar height
      const targetPosition = targetElement.offsetTop - offset;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="username">Jyothi Kaku</div>

      <ul className={`navList ${isOpen ? "active" : ""}`}>
        <li><a href="#header" onClick={(e) => handleClick(e, "header")}>Home</a></li>
        <li><a href="#about" onClick={(e) => handleClick(e, "about")}>About</a></li>
        <li><a href="#education" onClick={(e) => handleClick(e, "education")}>Education</a></li>
        <li><a href="#projects" onClick={(e) => handleClick(e, "projects")}>Projects</a></li>
        <li><a href="#skills" onClick={(e) => handleClick(e, "skills")}>Skills</a></li>
        <li><a href="#certificates" onClick={(e) => handleClick(e, "certificates")}>Certificates</a></li>
        <li><a href="#contact" onClick={(e) => handleClick(e, "contact")}>Contact Me</a></li>
      </ul>

      <button className="themeToggle" onClick={toggleTheme}>
        {theme === "dark" ? "🌞 " : "🌙 "}
      </button> 

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
