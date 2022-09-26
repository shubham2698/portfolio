import React,{useEffect} from 'react';
import Aos from 'aos';
function About_us() {
  useEffect(() => {
    Aos.init({duration:1200});
  }, [])
  return (
        <>
        <img className="computers_img" src="/images/computers.svg" alt="worng path"/>
          <div className="about_section">
              <h3 data-aos="zoom-in" className='hello_text'>Hi, I'm Shubham. Nice to meet you.</h3>
              <div data-aos="zoom-in" className="container hello_secondary_text">
              <h5>Since beginning of my journey in 2021 as a freelancer DevOps Engineer for a year , I've done remote work for Vodafone Cloud Infrastructure, Designed and Developed Website for Institute, I have a good programming and problem solving skills. I'm quietly confident, naturally curious, and perpetually working on improving my skills. Love to learn new technology and like to stay updated with trends in IT industry.</h5>
              </div>
          </div>
          
        </>
      )
}

export default About_us;