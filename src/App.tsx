import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import Hero2 from './components/Hero2';
// import About from './components/About';
import CoreCompetencies from './components/Core';
import RecentProjects from './components/Projects';

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      {/* <About/> */}
      <CoreCompetencies/>
      <RecentProjects/>
    </>
  )
}

export default App
