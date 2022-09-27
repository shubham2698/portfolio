import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function TitleBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/" style={{fontSize:"30px", marginRight:"20px" , fontFamily: '"eurostile", sans-serif'}}>Shubham Joshi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link  href="#home">Home</Nav.Link>
            <Nav.Link  href="#about">About Me</Nav.Link>
            <Nav.Link  href="#work">My Work</Nav.Link>
            <Nav.Link className='navlinks' href="#link">Say Hello</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TitleBar;

