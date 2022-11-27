import * as React from "react";
import Particles from "react-particles-js";


var ReactRotatingText = require('react-rotating-text');
function Title() {
    return (
      
        <>
        
        <div className="landing">
          
        <Particles
          params={
            {
              "particles":{
                "number":{
                  "value":250
                },
                "line_linked":{
                  "color":'#fff',
                },
                "size":{
                  "value":3
                }
              },
              "interactivity":{
                "events":{
                  "onhover":{
                    "enable":true,
                    "mode":"repulse"
                  }
                }
              }
            }
          }
        />
        
        </div>
        
          <div className="title animate-charcter">
              <ReactRotatingText className='title_heading' items={['Full-Stack Developer', 'DevOps Engineer', 'Ui/Ux Designer']} />
              <h4 >I design and code beautifully simple things, and I love what I do.</h4>
              
              
          </div>
          {/* <img className="computers_img" src="/images/computers.svg" alt="worng path"/> */}
          




          
       
        
        
        </>
    );
  }
  
export default Title;