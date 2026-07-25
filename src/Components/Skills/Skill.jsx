import "./Skills.css";
import { motion } from "framer-motion";
import {
  FaReact,
  FaDatabase,
  FaGitAlt,
  FaServer,
  FaCogs
} from "react-icons/fa";

const Skills = () => {
  const skills = [
    {
      category: "Frontend Development",
      icon: <FaReact />,
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Material UI",
        "Bootstrap",
        "Tailwind CSS",
      ],
    },
    {
      category: "Backend Development",
      icon: <FaServer />,
      items: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "JWT Authentication",
        "BullMQ",
      ],
    },
    {
      category: "Database Management",
      icon: <FaDatabase />,
      items: ["MongoDB", "MySQL", "Redis"],
    },
    {
      category: "Programming & Core CS",
      icon: <FaCogs />,
      items: [
        "Java",
        "JavaScript",
        "SQL",
        "Data Structures & Algorithms",
        "DBMS",
        "Object-Oriented Programming",
        "Operating Systems",
        "Computer Networks",
      ],
    },
    {
      category: "Tools & Deployment",
      icon: <FaGitAlt />,
      items: [
        "Git",
        "GitHub",
        "Docker",
        "Postman",
        "Hoppscotch",
        "VS Code",
        "Render",
        "Vercel",
      ],
    },
  ];

  /* === SAME ANIMATION SYSTEM === */
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const hoverEffect = {
    scale: 1.05,
    boxShadow: "0 12px 25px rgba(0, 255, 255, 0.25)",
    transition: { duration: 0.4, ease: "easeInOut" },
  };

  return (
    <section id="skills" className="skills">
      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="title">My Skills</h2>
      </motion.div>

      <div className="skillsGlow"></div>

      {/* SKILLS LIST */}
      <motion.div
        className="skillsContainer"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skillCard"
            variants={cardVariants}
            whileHover={hoverEffect}
          >
            <div className="skillHeader">
              <span className="skillIcon">{skill.icon}</span>
              <h3>{skill.category}</h3>
            </div>

            <ul>
              {skill.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      {/* DIVIDER */}
      <motion.div
        className="skillsDivider"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      />
    </section>
  );
};

export default Skills;
