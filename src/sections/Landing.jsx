import React from 'react';
import TitleBar from './Title.jsx';
import Navbar from './Navbar.jsx';
import About from './About_us.jsx';
import TechnicalSkills from './TechnicalSkills.jsx';
import Experience from './Experience.jsx';
import Education from './Education.jsx';
import Timeline from './Timeline.jsx';
import Footer from './Footer.jsx';

function Landing() {
    return (
        <>
        
        <Navbar/>
        {/* <TitleBar/> */}
        <About/>
        <TechnicalSkills/>
        <Experience/>
        <Education/>
        <Timeline/>
        <Footer/>
        </>
    );
  }
  
export default Landing;