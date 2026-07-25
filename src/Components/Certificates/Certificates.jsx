import "./Certificates.css";
import { motion } from "framer-motion";


import apnaCollegePDF from "../../assets/apnacollege.pdf";

const Certificates = () => {
  const certificates = [
    {
      title: "Apna College",
      items: ["MERN Stack Development"],
      link: apnaCollegePDF, 
    },
    {
      title: "NPTEL Topper — Programming in Java",
      items: ["Ministry of Education, Govt. of India"],
      link: "https://www.imprzd.com/bi/NPTEL371715.html"
    },
    {
      title: "GATE CSE 2026 Qualified",
      items: ["Graduate Aptitude Test in Engineering — Computer Science & IT"],
      link: "",
    },
  ];

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
    <section id="certificates" className="certificates">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="title">Certificates</h2>
      </motion.div>

      <motion.div
        className="certificateGrid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {certificates.map((cert, index) => (
          <motion.div
            className="certificateCard"
            key={index}
            variants={cardVariants}
            whileHover={hoverEffect}
          >
            <h3>{cert.title}</h3>

            <ul>
              {cert.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <a href={cert.link} target="_blank" rel="noopener noreferrer">
              <button className="viewCertificateBtn">
                View Certificate
              </button>
            </a>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="certificatesDivider"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      />
    </section>
  );
};

export default Certificates;
