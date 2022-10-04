import * as React from "react";
import Particles from "react-particles-js";


var ReactRotatingText = require('react-rotating-text');
function Title() {
    return (
      
        <>

        <div className="landing_background" >
        <Particles
          params={
            {
              "particles":{
                "number":{
                  "value":250
                },
                "line_linked":{
                  "color":'#000',
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
          style={
            {
              height:'100vh'
            }
          }
        />
          
          
          </div>
          <div className="title">
              <ReactRotatingText className='title_heading' items={['Full-Stack Developer', 'Jr. DevOps Engineer', 'Ui/Ux Designer']} />
              <h4>I design and code beautifully simple things, and I love what I do.</h4>
              <img id="title_image" src="/images/mf-avatar.svg" alt="worng path"/>
              
          </div>
          <img className="computers_img" src="/images/computers.svg" alt="worng path"/>
        <div className="particle">
        
        </div>
          
       
        
        
        </>
    );
  }
  
export default Title;