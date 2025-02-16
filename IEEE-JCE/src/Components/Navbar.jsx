// import {Link,NavLink} from 'react-router-dom'

// function Navbar() {
//   return (
//     <nav>

//     </nav>
//   )
// }

// export default Navbar

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css'
import {Link,NavLink} from 'react-router-dom';

function BasicExample() {
  return (
    <Navbar expand="lg"   className='navbar' data-bs-theme="dark" sticky='top'>
      <Container>
        <Navbar.Brand href="/" className='logo'><b>IEEE-JCE</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className='navlink' >About</Nav.Link>
            <Nav.Link href="events" className='navlink'>Events</Nav.Link>
            {/* <NavDropdown title="Communities" id="basic-nav-dropdown">
              <NavDropdown.Item href="wie">WIE</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="aess">AESS</NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="gallery" className='navlink'>Gallery</Nav.Link>
            <Nav.Link href="team" className='navlink'>Team</Nav.Link>
            <Nav.Link href="contact" className='navlink'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;

