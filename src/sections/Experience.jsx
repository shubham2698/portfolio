import React,{useEffect} from 'react';
import Aos from 'aos';
import Accordion from 'react-bootstrap/Accordion';
import Nav from 'react-bootstrap/Nav';
import { Wave } from 'react-animated-text';

function Experience() {
  return (
        <>
        <div class="area" >
            <ul class="circles">
            <div className="work_exp">      
        </div>        
        <div className="container" style={{height:'600px'}}>
            
            <h1 data-aos='fade-up' style={{color:'white'}}  className='text-start wk'><Wave text="Work Experience" effect="color" effectChange={2.2} /></h1>            
            <div className='work_exp'>
              <h2 style={{color:'white',fontWeight:'600'}} data-aos='fade-left' className='text-start' >Freelancer as a DevOps Engineer( 2021-2022 ) :</h2> 
              <h5 style={{color:'white'}} data-aos='fade-left' className='text-start'>
              <h4 style={{color:'white'}}>Worked On Following Tasks For <span ><img style={{height:'3rem'}} src="/images/vodafone-logo.png" alt="" /></span></h4>
              o EC2 Failover : Lambda , CloudWatch , python Boto3 , EIP.<br/>
              o Cloud Automation : Custom Shell Scripts & AWS CLI & SSM .<br/>
              o Routing : Security Groups , SG Rules , Route Table , Internet gateway , Transit gateway, VPC Peering , Transit Gateway Peering , RAM.<br/>
              o IAM Roles , Policies , Restrictions Through Policies , CloudTrail.<br/>
              o SSM : Run Document , Maintenance Window.<br/>
              o Infrastructure As A Code : Terraform.<br/>
              </h5>
          </div>
        </div>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
        
        </div>
        </>
      )
}

export default Experience;