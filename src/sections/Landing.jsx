import TitleBar from './Title.jsx';
import Navbar from './Navbar.jsx';
import About from './About_us.jsx';
import TechnicalSkills from './TechnicalSkills.jsx';
import Experience from './Experience.jsx';
import Project from './Projects.jsx';

function Landing() {
    return (
        <>
        <Navbar/>
        <TitleBar/>
        <About/>
        <TechnicalSkills/>
        <Experience/>
        <Project/>
        </>
    );
  }
  
export default Landing;