import  { React } from 'react'
import Card from 'react-bootstrap/Card';

function TechnicalSkills() { 
  return(
    <>
      <div className="tech_skills container"  >
        <h2 className='text-start tech_skill_heading' >What I do</h2>
        <p className='text-start tech_skill_p' >Below is the quick overview of my technical skill sets and technology i use. <br/>Want to find more about my experience ? Checkout my <span><a href="">Resume</a> & <a href="">Work Experience</a></span></p>
      </div>
      <div className="tech_skill">
      <div className="flex-container">
      <div>
      
      <Card style={{ width: '20rem' }}>
      <div className="conatainer">
          <div className="tech_logo text-start">
            <img src="/images/aws.png" alt="" />
            <img src="/images/huawei.png" alt="" />
            <img src="/images/terraform.png" alt="" />
            <img src="/images/bash.png" alt="" />
          </div>
        </div>
        <Card.Body>
          <Card.Title className='ct' >DevOps & Cloud Automation</Card.Title>
          <Card.Text className='ctt' >
            AWS <br />
            Terraform <br />
            Shell Scripting , CLI <br />
            Linux <br />
            EC2 Failover <br />
            AWS SSM <br />
            Serveless : Lambda Function <br />
          </Card.Text>
        </Card.Body>
      </Card>
      </div>

      <div>
      <Card style={{ width: '20rem' }}>
      <div className="conatainer">
          <div className="tech_logo text-start">
            <img src="/images/react-js.png" alt="" />
            <img src="/images/laravel.png" alt="" />
            <img src="/images/java.png" alt="" />
            <img src="/images/python.png" alt="" />
          </div>
        </div>
        <Card.Body>
          <Card.Title className='ct' >Full Stack Web Development</Card.Title>
          <Card.Text className='ctt' >
            HTML , CSS <br />
            React JS & Libraries <br />
            Java <br />
            Python <br />
            Laravel <br />
            MVC <br />
            MYSQL , MongoDB <br />
          </Card.Text>
        </Card.Body>
      </Card>
      </div>

      <div>
      <Card style={{ width: '20rem' }}>
      <div className="conatainer">
          <div className="tech_logo text-start">
            <img src="/images/flutter.png" alt="" />
            <img src="/images/androidstudio.png" alt="" />
          </div>
        </div>
        <Card.Body>
          <Card.Title className='ct' >Android / iOs Development</Card.Title>
          <Card.Text className='ctt'>
            Flutter <br />
            Android Java
          </Card.Text>
        </Card.Body>
      </Card>
      </div>

      <div>
      </div>
      
      </div>
      </div>
    </>
  );
}

export default TechnicalSkills;


