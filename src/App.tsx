import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import Hero2 from './components/Hero2';
// import About from './components/About';
import CoreCompetencies from './components/Core';
import RecentProjects from './components/Projects';
import ProfessionalExperience from './components/ProfessionalExperience';
import Certifications from './components/Certifications';

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      {/* <About/> */}
      <CoreCompetencies/>
      <RecentProjects/>
      <ProfessionalExperience/>
      <Certifications/>
    </>
  )
}

export default App
