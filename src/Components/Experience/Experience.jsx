import { useEffect, useState } from "react";
import "./Experience.css";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Centre for Development of Advanced Computing (C-DAC)",
    role: "Software Development Intern",
    location: "Hyderabad, India",
    duration: "Feb 2026 – August 2026",
    items: [
      "Architected full-stack web applications using React.js, Node.js, Express.js, and MongoDB for internal software systems.",
      "Built high-throughput RESTful APIs secured with JWT authentication and role-based authorization controls.",
      "Implemented asynchronous job processing and task queues with Redis and BullMQ to execute heavy background analysis workflows.",
      "Containerized services with Docker and deployed Linux-based execution modules to automate structured report generation.",
    ],
  },
];

const Experience = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setActive(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="experience" className={`experience ${active ? "active" : ""}`}>
      {/* Floating background glow */}
      <div className="experienceGlow"></div>

      <div className="experienceContent">
        <h2 className="experienceTitle">
          Work <span>Experience</span>
        </h2>

        <div className="experienceLine"></div>

        <div className="experienceList">
          {experiences.map((exp, index) => (
            <div className="experienceCard" key={index}>
              <div className="experienceHeader">
                <div>
                  <h3 className="companyTitle">{exp.company}</h3>
                  <p className="roleTitle">{exp.role}</p>
                </div>
                <div className="experienceMeta">
                  <span className="badge">{exp.duration}</span>
                  <span className="location">{exp.location}</span>
                </div>
              </div>

              <ul className="experienceBullets">
                {exp.items.map((bullet, bulletIdx) => (
                  <li key={bulletIdx}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <motion.div
          className="ExperienceDivider"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        />
      </div>
    </section>
  );
};

export default Experience;