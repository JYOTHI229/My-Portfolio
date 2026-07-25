import "./Education.css";
import { FaSchool, FaUniversity } from "react-icons/fa";
import { motion } from "framer-motion";

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const hoverEffect = {
    scale: 1.05,
    boxShadow: "0 12px 25px rgba(0, 255, 255, 0.3)",
    transition: { duration: 0.4, ease: "easeInOut" }
  };

  return (
    <section id="education" className="education">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="title">Education</h2>
      </motion.div>

      <motion.div
        className="education-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="educationItem" variants={itemVariants} whileHover={hoverEffect}>
          <FaUniversity className="educationItemIcon" />
          <div className="educationItemContent">
            <h3>Rajiv Gandhi University of Knowledge Technologies IIIT Ongole</h3>
            <p>B.Tech - Computer Science Engineering</p>
            <p>2022 – 2026 | CGPA - 9.3</p>
          </div>
        </motion.div>

        <motion.div className="educationItem" variants={itemVariants} whileHover={hoverEffect}>
          <FaUniversity className="educationItemIcon" />
          <div className="educationItemContent">
            <h3>Rajiv Gandhi University of Knowledge Technologies IIIT Ongole</h3>
            <p>Pre University Course</p>
            <p>2020 – 2022 | CGPA - 9.84</p>
          </div>
        </motion.div>

        <motion.div className="educationItem" variants={itemVariants} whileHover={hoverEffect}>
          <FaSchool className="educationItemIcon" />
          <div className="educationItemContent">
            <h3>Jawahar Navodaya Vidyalaya Ongole</h3>
            <p>10<sup>th</sup> class</p>
            <p>2019 – 2020 | Percentage - 91.4%</p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="divider"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      />
    </section>
  );
};

export default Education;
