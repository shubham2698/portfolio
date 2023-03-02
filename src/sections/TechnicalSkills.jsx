import  { React } from 'react'
import Card from 'react-bootstrap/Card';
const width_card="18rem"
function TechnicalSkills() { 
  return(
    
    <>
    
      <div style={{height:'100vh'}} className='tech_skills' >
        <br />
        <br />
        <div className="container" >
          <h2 className='text-start tech_skill_heading' >What I do</h2>
          <p className='text-start tech_skill_p' >Below is the quick overview of my technical skill sets and technology i use. <br/>Want to find more about my experience ? Checkout my <span><a href="">Resume</a> & <a href="">Work Experience</a></span></p>
        </div>
      <div className="flex-container tech_skill_cards">
      <div>
        <Card style={{ width: width_card}}>
          <div className="container">
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
      <Card style={{ width: width_card }}>
      <div className="container">
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
            Flask <br/>
            Django <br />
            Python , Pandas <br />
            PHP,Laravel <br />
            MYSQL , MongoDB <br />
          </Card.Text>
        </Card.Body>
      </Card>
      </div>

      <div>
      <Card style={{ width: width_card }}>
      <div className="container">
          <div className="tech_logo text-start">
            <img src="/images/photoshop.png" alt="" />
            <img src="/images/figma.png" alt="" style={{width:'30px'}} />
          </div>
        </div>
        <Card.Body>
          <Card.Title className='ct' >Data Mining</Card.Title>
          <Card.Text className='ctt'>
            Data Scraping <br />
            Data Cleaning <br />
            Data Extracting <br />
            Data Transformation <br />
            Data Analysis <br />
            <br />
            <br />
            <br />
          </Card.Text>
        </Card.Body>
      </Card>
      </div>

      <div>
      <Card style={{ width: width_card }}>
      <div className="container">
          <div className="tech_logo text-start">
            <img src="/images/react-js.png" alt="" />
            <img src="/images/laravel.png" alt="" />
            <img src="/images/java.png" alt="" />
            <img src="/images/python.png" alt="" />
          </div>
        </div>
        <Card.Body>
          <Card.Title className='ct' >Programming Languages</Card.Title>
          <Card.Text className='ctt' >
            C <br />
            C++ <br />
            Advanced Java <br/>
            Python <br />
            Hashi Corp ( HCL ) <br />
            Shell, Bash <br />
            JavaScript <br />
            GitHub, Trello, JIRA, Figma<br />

          </Card.Text>
        </Card.Body>
      </Card>
      </div>

      <div>
      
      </div>
          
      </div>
      </div>
      <div id='wr_exp'>

      </div>

    </>
  );
}

export default TechnicalSkills;


