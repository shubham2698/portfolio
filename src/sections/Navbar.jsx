import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function TitleBar() {
  return (
    <>
    
    <Navbar bg="#0000" expand="lg" className='navbar' sticky='top' variant='dark' >
      <Container>
        <Navbar.Brand href="#home"  className='navbar_heading'>Shubham Joshi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end flex-grow-1">
          <Nav.Link className='nav_link' href="#about_us">About Me</Nav.Link>
            <Nav.Link className='nav_link' href="#tech_skill">My Skills</Nav.Link>
            <Nav.Link className='nav_link' href="#wr_exp">Work Experience</Nav.Link>
            <Nav.Link className='nav_link' href="#action2">Contact Me</Nav.Link>         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>
  );
}

export default TitleBar;
