import "./Projects.css";
import { MdLiveTv } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

import queryNest from "../../assets/QueryNest.png";
import auroraAI from "../../assets/AuroraAI.png";
import weatherApp from "../../assets/WeatherApp.png";
import dynamicElfAnalysis from "../../assets/DynamicElfAnalysis.png";
import voxa from "../../assets/VOXA.png";

const Projects = () => {
  const projects = [
    {
      title: "QueryNest",
      description:
        "A cutting-edge AI + Human Q&A platform connecting learners and experts. Developed with the MERN stack and Material UI, featuring AI-powered instant answers, a following system, and interactive knowledge-sharing features. Focused on building a scalable, user-friendly platform that combines AI intelligence with human expertise.",
      image: queryNest,
      live: "https://querynest-1-02qk.onrender.com",
      github: "https://github.com/JYOTHI229/QueryNest",
    },
    {
      title: "Dynamic ELF Analysis Platform",
      description:
        "An automated security analysis platform for executing and evaluating ELF binaries in an isolated QEMU Linux environment. Built with React, Node.js, Express, Docker, Redis, and BullMQ, featuring asynchronous job processing queues and interactive visualization dashboards for system behaviors and extracted artifacts.",
      image: dynamicElfAnalysis,
      live: "https://dynamic-elf-analysis.onrender.com",
      github: "https://github.com/JYOTHI229/Dynamic_ELF_Analysis",
    },
    {
      title: "VOXA — Real-Time Video Conferencing Platform",
      description:
        "A full-stack real-time collaboration platform featuring WebRTC peer-to-peer video calls, low-latency screen sharing, and local session recording. Built using React, Node.js, Express, Socket.io, and MongoDB, complete with interactive live chat, hand raising, and host moderation suite.",
      image: voxa,
      live: "https://voxa-frontend-9wds.onrender.com",
      github: "https://github.com/JYOTHI229/VOXA",
    },
    {
      title: "AuroraAI",
      description:
        "Real-time AI chat application offering intelligent conversations, chat history management, and a responsive interface. Built with React, Node.js, and OpenAI API. Implemented secure authentication, optimized APIs, and designed an engaging, interactive AI assistant experience.",
      image: auroraAI,
      live: "https://aurora-frontend-7x8g.onrender.com",
      github: "https://github.com/JYOTHI229/AuroraAI",
    },
    {
      title: "WeatherApp",
      description:
        "User-friendly weather application providing real-time global weather updates. Built with React and Material UI, connected to a weather API. Focused on responsive design, clean UI, and seamless user experience for instant weather insights.",
      image: weatherApp,
      live: "https://weather-app-jyothi229s-projects.vercel.app/",
      github: "https://github.com/JYOTHI229/WeatherApp",
    },
  ];
  

 
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
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
    <section id="projects" className="projects">
      {/* TITLE ANIMATION */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="title">Projects</h2>
      </motion.div>

      {/* PROJECT LIST */}
      <motion.div
        className="projectsContainer"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project, index) => (
          <motion.div
            className="projectItem"
            key={index}
            variants={itemVariants}
            whileHover={hoverEffect}
          >
            <div className="projectImageContainer">
              <img
                src={project.image}
                alt={project.title}
                className="projectImage"
              />
            </div>

            <div className="projectContent">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="projectLinks">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="liveLink"
                >
                  <MdLiveTv /> Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="githubLink"
                >
                  <BsGithub /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* DIVIDER */}
      <motion.div
        className="projectsDivider"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      />
    </section>
  );
};

export default Projects;
