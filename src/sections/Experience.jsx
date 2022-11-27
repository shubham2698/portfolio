import React,{useEffect} from 'react';
import Aos from 'aos';

function Experience() {
  useEffect(() => {
    Aos.init({duration:1600});
  }, [])
  return (
        <>
       
            
        <div className="container" style={{height:'100vh',zIndex:1}}>
            
            <h1 data-aos='fade-up' className='text-end wk'>Work Experience</h1>            
            <div className='work_exp'>
              <h2 style={{fontWeight:'600'}} data-aos='fade-left' className='text-start' >Freelancer as a DevOps Engineer ( 2021-2022 )</h2> 
              <h5 data-aos='fade-left' className='text-start'>
              <h4>Worked On Following for <span ><img style={{height:'3rem'}} src="/images/vodafone-logo.png" alt="" /></span></h4>
              o EC2 Failover : Lambda , CloudWatch , python Boto3 , EIP.<br/>
              o Cloud Automation : Custom Shell Scripts & AWS CLI & SSM .<br/>
              o Routing : Security Groups , SG Rules , Route Table , Internet gateway , Transit gateway, VPC Peering , Transit Gateway Peering , RAM.<br/>
              o IAM Roles , Policies .<br/>
              o SSM : Run Document , Maintenance Window.<br/>
              o Infrastructure As A Code : Terraform.<br/>
              </h5>
          </div>
        </div>
                    
        </>
      )
}

export default Experience;