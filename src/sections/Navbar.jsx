import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function TitleBar() {
  return (
    <>
    
    <Navbar  expand="lg" style={{backgroundColor:'transparent',position:'relative'}} >
      <Container>
        <Navbar.Brand href="/" className='navbar_heading' >Shubham Joshi</Navbar.Brand>
        
      </Container>
    </Navbar>
    
    </>
  );
}

export default TitleBar;
