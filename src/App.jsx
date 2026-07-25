import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Education from "./Components/Education/Education";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skill";
import Certificates from "./Components/Certificates/Certificates";
import Contact from "./Components/Contact/Contact";
import Experience from "./Components/Experience/Experience";


const App = () => {
  return (
    <div>
     <Navbar />
      <Header />
      <About />
      <Experience />
      <Projects />      
      <Skills />      
      <Certificates />  
      <Education />     
      <Contact />
    </div>
  );
};

export default App;