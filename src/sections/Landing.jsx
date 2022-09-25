import TitleBar from './Title.jsx';
import Navbar from './Navbar.jsx';
import About from './About_us.jsx';
import TechnicalSkills from './TechnicalSkills.jsx';

function Landing() {
    return (
        <>
        <Navbar/>
        <TitleBar/>
        <About/>
        <TechnicalSkills/>
        </>
    );
  }
  
export default Landing;