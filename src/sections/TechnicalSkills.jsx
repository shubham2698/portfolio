import  { React ,useState, useRef } from 'react'
import Aos from 'aos';
import { Parallax } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import { Progress } from 'antd';
import { Wave } from "react-animated-text";
function TechnicalSkills() { 
  
  const [show, setShow] = useState(false);
  const target = useRef(null);
  return (
    <>
    
    <div className="technical_skill" style={{height:"590px"}}>
   
    <div className="container">
    {/* <Parallax
          animation={[
            { x: 0, opacity: 1, playScale: [0, 0.3] },
          ]}
          style={{ transform: 'translateX(-100px)', filter: 'blur(0px)', opacity: 0 }} className="Tech_skill_text" >
      
          Technical Skills
    
    </Parallax> */}
    <div>
    
    </div>
    </div>
    <div className="tcn">
      <h1 data-aos="flip-up" >Technical Skills</h1>
    </div>
    <div className='container'>
    <div className="flex-container">
            <div>
                  <QueueAnim key="queue" leaveReverse style={{ float: 'left', position: 'absolute', left: '20%', marginLeft: -165 }}>
                      <div key="a" className="code-box-shape queue-anim-demo">
                        <Progress data-aos='fade-down' percent={90} type="dashboard" format={() => 'Python'} strokeColor='#2B7A0B' trailColor='lightgrey' />
                      </div>
                  </QueueAnim>
              </div>
              <div>
                  <QueueAnim key="queue" leaveReverse style={{ float: 'left', position: 'absolute', left: '30%', marginLeft: -165 }}>
                      <div key="b" className="code-box-shape queue-anim-demo">
                        <Progress data-aos='fade-down' percent={70} type="dashboard" format={() => 'Java'} strokeColor='#D2001A' trailColor='lightgrey' />
                      </div>
                  </QueueAnim>
              </div>
              <div>
                  <QueueAnim key="queue" leaveReverse style={{ float: 'left', position: 'absolute', left: '40%', marginLeft: -165 }}>
                      <div key="c" className="code-box-shape queue-anim-demo">
                        <Progress data-aos='fade-down' percent={90} type="dashboard" format={() => 'HTML5'} strokeColor='#004182' trailColor='lightgrey' />
                      </div>
                  </QueueAnim>
              </div>
              <div>
                  <QueueAnim key="queue" leaveReverse style={{ float: 'left', position: 'absolute', left: '50%', marginLeft: -165 }}>
                      <div key="d" className="code-box-shape queue-anim-demo">
                        <Progress data-aos='fade-down' percent={90} type="dashboard" format={() => 'CSS3'} strokeColor='#9C2C77' trailColor='lightgrey'/>
                      </div>
                  </QueueAnim>
              </div>
              <div>
                  <QueueAnim key="queue" leaveReverse style={{ float: 'left', position: 'absolute', left: '60%', marginLeft: -165 }}>
                      <div key="e" className="code-box-shape queue-anim-demo">
                        <Progress data-aos='fade-down' percent={60} type="dashboard" format={() => 'React Js'} strokeColor='#61DBFB' trailColor='lightgrey' />
                      </div>
                  </QueueAnim>
              </div>
              <div>
                  <QueueAnim key="queue" leaveReverse style={{ float: 'left', position: 'absolute', left: '70%', marginLeft: -165 }}>
                      <div key="f" className="code-box-shape queue-anim-demo">
                        <Progress data-aos='fade-down' percent={70} type="dashboard" format={() => 'Laravel'} strokeColor='#EF3C2D' trailColor='lightgrey' />
                      </div>
                  </QueueAnim>
              </div>
              <div>
                  <QueueAnim key="queue" leaveReverse style={{ float: 'left', position: 'absolute', left: '80%', marginLeft: -165 }}>
                      <div key="g" className="code-box-shape queue-anim-demo">
                        <Progress data-aos='fade-down' percent={70} type="dashboard" format={() => 'AWS'} strokeColor='#202B3C' trailColor='lightgrey' />
                      </div>
                  </QueueAnim>
              </div>
              <div>
                  <QueueAnim key="queue" leaveReverse style={{ float: 'left', position: 'absolute', left: '90%', marginLeft: -165 }}>
                      <div key="h" className="code-box-shape queue-anim-demo">
                        <Progress data-aos='fade-down' percent={90} type="dashboard" format={() => 'Terraform'} strokeColor='#7B42BC' trailColor='lightgrey' />
                      </div>
                  </QueueAnim>
              </div>
              <div>
                  <QueueAnim key="queue" leaveReverse style={{ marginTop:'200px', float: 'left', position: 'absolute', left: '20%', marginLeft: -165 }}>
                      <div key="i" className="code-box-shape queue-anim-demo">
                        <Progress data-aos='fade-down' percent={80} type="dashboard" format={() => 'PHP'} strokeColor='#516BEB' trailColor='lightgrey' />
                      </div>
                  </QueueAnim>
              </div>
              <div>
                  <QueueAnim key="queue" leaveReverse style={{ marginTop:'200px', float: 'left', position: 'absolute', left: '30%', marginLeft: -165 }}>
                      <div key="j" className="code-box-shape queue-anim-demo">
                        <Progress data-aos='fade-down' percent={75} type="dashboard" format={() => 'MySQL'} strokeColor='#5E454B' trailColor='lightgrey' />
                      </div>
                  </QueueAnim>
              </div>
              <div>
                  <QueueAnim key="queue" leaveReverse style={{ marginTop:'200px', float: 'left', position: 'absolute', left: '40%', marginLeft: -165 }}>
                      <div key="k" className="code-box-shape queue-anim-demo">
                        <Progress data-aos='fade-down' percent={85} type="dashboard" format={() => 'NoSQL'} strokeColor='#4C4C6D' trailColor='lightgrey' />
                      </div>
                  </QueueAnim>
              </div>
              <div>
                  <QueueAnim key="queue" leaveReverse style={{ marginTop:'200px', float: 'left', position: 'absolute', left: '50%', marginLeft: -165 }}>
                      <div key="l" className="code-box-shape queue-anim-demo">
                        <Progress data-aos='fade-down' percent={95} type="dashboard" format={() => 'Github'} strokeColor='#C449C2' trailColor='lightgrey' />
                      </div>
                  </QueueAnim>
              </div>
              <div>
                  <QueueAnim key="queue" leaveReverse style={{ marginTop:'200px', float: 'left', position: 'absolute', left: '60%', marginLeft: -165 }}>
                      <div key="m" className="code-box-shape queue-anim-demo">
                        <Progress data-aos='fade-down' percent={70} type="dashboard" format={() => 'CI/CD'} strokeColor='#966C3B' trailColor='lightgrey' />
                      </div>
                  </QueueAnim>
              </div>
              <div>
                  <QueueAnim key="queue" leaveReverse style={{ marginTop:'200px', float: 'left', position: 'absolute', left: '70%', marginLeft: -165 }}>
                      <div key="n" className="code-box-shape queue-anim-demo">
                        <Progress data-aos='fade-down' percent={50} type="dashboard" format={() => 'Figma'} strokeColor='#FF884B' trailColor='lightgrey' />
                      </div>
                  </QueueAnim>
              </div>
              <div>
                  <QueueAnim key="queue" leaveReverse style={{ marginTop:'200px', float: 'left', position: 'absolute', left: '80%', marginLeft: -165 }}>
                      <div key="o" className="code-box-shape queue-anim-demo">
                        <Progress data-aos='fade-down' percent={70} type="dashboard" format={() => 'Linux'} strokeColor='#7C9473' trailColor='lightgrey' />
                      </div>
                  </QueueAnim>
              </div>
              <div>
                  <QueueAnim key="queue" leaveReverse style={{ marginTop:'200px', float: 'left', position: 'absolute', left: '90%', marginLeft: -165 }}>
                      <div key="p" className="code-box-shape queue-anim-demo">
                        <Progress data-aos='fade-down'  percent={40} type="dashboard" format={() => 'JavaScript'} strokeColor='#DA9FF9' trailColor='lightgrey' />
                      </div>
                  </QueueAnim>
              </div>
            </div>
    </div>
    
    </div>
    <div className="experience" style={{height:'200px'}}>
      <h1 data-aos='zoom-in' className='text-end'>As a developer I am constantly <br />
      improving my <span className='skillword'>skills</span><span className='react-rotating-text-cursor skillword'>|</span></h1>    
    </div>
   
      
    
    
    
    
    </>
  );
}

export default TechnicalSkills;


