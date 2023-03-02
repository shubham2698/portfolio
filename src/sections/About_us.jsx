import React,{useEffect} from 'react';
import Aos from 'aos';


 

function About_us() {
  
  return (
    
        <>
        <div id='about_us' ></div>
          <div className="about_section">
              <h3 data-aos="zoom-in" className='hello_text text-start'>Hi, I'm Shubham. Nice to meet you.</h3>
              <div data-aos="zoom-in" className="hello_secondary_text text-start">
              <h5 className='text-start'>Since beginning of my journey in 2021 as a freelancer DevOps Engineer for a year , I've done remote work for Vodafone Cloud Infrastructure, Designed and Developed Websites, I have a good programming and problem solving skills. I'm quietly confident, naturally curious, and perpetually working on improving my skills. Love to learn new technology and like to stay updated with trends in IT industry.</h5>
              <br />
              <br />
              <br />
              <div>
                <a href="https://drive.google.com/file/d/1inWE32Pa7RMSCeVCMgm3ftLFEIvYZ_f4/view?usp=share_link" target="_blank"><button className="glow-on-hover"  type="button">Download CV</button></a>
              </div>
              
              </div>
              {/* <img id="title_image" src="/images/mf-avatar.svg" alt="worng path"/> */} 
          </div>
          <div id='tech_skill' >

          </div>
          
          
          
        </>
      )
}

export default About_us;