import React from "react";
import { WorkIcon,StarIcon,SchoolIcon,VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Timeline() {
    return (
        <>
        
          <div className="timeline_background">
          <div className="timeline_text text-end">
        <h1 data-aos="flip-up">Timeline</h1>
        </div>
          <VerticalTimeline>
                      
                      <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="April 2018-2021"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        
                      >
                        <h3 className="vertical-timeline-element-title">Bachelor of Computer Application</h3>
                        <h4 className="vertical-timeline-element-subtitle">D.Y.Patil International University</h4>
                        <h5>Cloud Computing & Information Security</h5>
                        <p>
                          Strategy, Social Media
                        </p>
                      </VerticalTimelineElement>
                      
                      <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="April 2021-2022"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        
                      >
                        <h3 className="vertical-timeline-element-title">Freelacer DevOps Engineer</h3>
                        <h4 className="vertical-timeline-element-subtitle">Vodafone</h4>
                        
                        <p>
                          Strategy, Social Media
                        </p>
                      </VerticalTimelineElement>
                      
                      <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="April 2021-2022"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        
                      >
                        <h3 className="vertical-timeline-element-title">Full Stack Web Developer</h3>
                        <h4 className="vertical-timeline-element-subtitle">Freelancer</h4>
                        
                        <p>
                          Strategy, Social Media
                        </p>
                      </VerticalTimelineElement>
          
                      <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="April 2021-2023"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        
                      >
                        <h3 className="vertical-timeline-element-title">Masters in Computer Application</h3>
                        <h4 className="vertical-timeline-element-subtitle">Pratibha Institue Of Business Management</h4>
                        
                        <p>
                          Strategy, Social Media
                        </p>
                      </VerticalTimelineElement>
          
                    </VerticalTimeline>
          </div>
        </>
    );
  }
  
export default Timeline;