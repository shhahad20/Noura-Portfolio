import './App.css'
import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import Hero2 from './components/Hero2';
// import About from './components/About';
import CoreCompetencies from './components/Core';
import RecentProjects from './components/Projects';
import ProfessionalExperience from './components/ProfessionalExperience';
// import Certifications from './components/Certifications';
import Hero3 from './components/Hero3';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      <Hero3/>
      {/* <About/> */}
      <CoreCompetencies/>
      <RecentProjects/>
      <ProfessionalExperience/>
      {/* <Certifications/> */}
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
