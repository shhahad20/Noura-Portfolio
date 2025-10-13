import "./App.css";
import Navbar from "./components/Navbar";
// import Hero from './components/Hero';
// import Hero2 from './components/Hero2';
// import About from './components/About';
import CoreCompetencies from "./components/Core";
import RecentProjects from "./components/Projects";
import ProfessionalExperience from "./components/ProfessionalExperience";
// import Certifications from './components/Certifications';
// import Hero3 from './components/Hero3';
// import Contact from './components/Contact';
import Footer from "./components/Footer";
import Contact2 from "./components/Contact2";
import Hero from "./components/Hero";
// import Hero4 from './components/Hero4';

function App() {
  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      <Hero />
      {/* <About/> */}
      <RecentProjects />
      <CoreCompetencies />
      <ProfessionalExperience />
      {/* <Certifications/> */}
      {/* <Contact/> */}
      <Contact2 />
      <Footer />
    </>
  );
}

export default App;
