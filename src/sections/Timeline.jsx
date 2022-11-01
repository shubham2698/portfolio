import React from "react";
import { WorkIcon,StarIcon,SchoolIcon,VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Timeline() {
    return (
        <>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date="2011 - present"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              
            >
              <h3 className="vertical-timeline-element-title">Creative Director</h3>
              <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
              </p>
            </VerticalTimelineElement>
  
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              date="2008 - 2010"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              
            >
              <h3 className="vertical-timeline-element-title">Web Designer</h3>
              <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
              <p>
                User Experience, Visual Design
              </p>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="April 2013"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              
            >
              <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
              <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
              <p>
                Strategy, Social Media
              </p>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
              iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
              
            />
          </VerticalTimeline>
        </>
    );
  }
  
export default Timeline;