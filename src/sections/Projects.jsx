import React,{useEffect} from 'react';
import Aos from 'aos';
import { Random,Wave } from 'react-animated-text';

function Project() {
  useEffect(() => {
    Aos.init({duration:1200});
  }, [])
  return (
        <>
        <div className="container" style={{height:'200px'}}>
          <h1 data-aos='fade-left' className='text-end project'>Projects</h1>
          
          

        </div>
          
        </>
      )
}

export default Project;