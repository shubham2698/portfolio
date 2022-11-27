import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function TitleBar() {
  return (
    <>
    
    <Navbar sticky='top' className='navbar' expand="lg" >
      <Container>
        <Navbar.Brand href="/" className='navbar_heading' >Shubham Joshi</Navbar.Brand>
        <Nav className="justify-content-end flex-grow-1 ">
            <Nav.Link className='nav_link' href="#about_us">About Me</Nav.Link>
            <Nav.Link className='nav_link' href="#tech_skill">My Skills</Nav.Link>
            <Nav.Link className='nav_link' href="#action2">Work Experience</Nav.Link>
            <Nav.Link className='nav_link' href="#action2">Download CV</Nav.Link>

                  
        </Nav>
      </Container>
      
    </Navbar>
    
    </>
  );
}

export default TitleBar;
