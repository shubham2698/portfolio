import React,{useEffect} from 'react';
import Aos from 'aos';

function Experience() {
  useEffect(() => {
    Aos.init({duration:1600});
  }, [])
  return (
        <>
        <div className="work_exp">
        <br />
       <br />
       <br />
       <br />
        <div className="container" style={{height:'110vh',zIndex:1}}>
        <h1 data-aos='zoom-in' className='text-end wk'>Work Experience</h1>
            <div className="flex-container">
              <div className='wk_exp_one'>
              
            <br />            
            <div className='work_exp'>
              <h2 style={{fontWeight:'600'}} data-aos='zoom-in' className='text-start' >Cloud Engineer ( 2021-2022 )</h2> 
              <h5 data-aos='fade-left' className='text-start'>
              <h4>Freelancer for <span ><img style={{height:'3rem'}} src="/images/vodafone-logo.png" alt="" /></span></h4>
              <p>
              o EC2 Failover : Lambda, CloudWatch, python Boto3, EIP.<br/>
              o Cloud Automation : Custom Shell Scripts & AWS CLI & SSM.<br/>
              o Routing : Security Groups, SG Rules, Route Table, Internet gateway,<br/>&nbsp;&nbsp;&nbsp;Transit gateway, VPC Peering, Transit Gateway Peering, RAM.<br/>
              o IAM Roles, Policies .<br/>
              o SSM : Run Document, Maintenance Window.<br/>
              o Infrastructure As A Code : Terraform.<br/>
              </p>
              </h5>
            </div>
            <br />
            <div className='work_exp'>
              <h2 style={{fontWeight:'600'}} data-aos='zoom-in' className='text-start' >Full-Stack Web Developer ( 2022-2023 )</h2> 
              <h5 data-aos='fade-left' className='text-start'>
              <h4>Projects</h4>
              o Web UI Design<br/>
              o Python, Data Scraping, ETL, Data Analysis, Dashboard<br/>
              o React-JS, Laravel, Flask, JavaScript  <br/>
              o Deployment, Jenkins, CI/CD, Trello  <br/>
              o Attendance Automation <br/>
              o Result Analysis Automation <br/>
              o Git , GitHub , Github Actions , AWS Pipeline , AWS Beanstalk<br/>
              </h5>
            </div>
              </div>
              <div className='agile-img'>
                  <img  src="/images/agile.png" alt="Error: Path incorrect" />
              </div>
            </div>
        </div>
        </div>
                    
        </>
      )
}

export default Experience;