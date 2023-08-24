import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Button from 'react-bootstrap/Button';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary p-4">
      <Container fluid>
        <Navbar.Brand href="#home" className='font-style-bold'>LOGOIPUSIM</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto d-flex  content-align">
          <NavDropdown title="Services" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Company" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Case Studies</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#features">Case Studies</Nav.Link>
            <Nav.Link href="#pricing">Blog</Nav.Link>

            <NavDropdown title="Resources" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
           
      
          </Nav>
          <Nav>
          <div className="d-flex align-items-right">
                <div className="px-4 header-contact">
                    <button className="client-support-button border-0 rounded fw-semibold py-0 px-1">
                                    Client Support <i className="bi bi-arrow-right"></i>
                    </button>
                    <br />
                    <a href="tel:1-800-356-8933" className="contact-number">1-800-356-8933</a>
                </div>
                <div>
                    <Button variant="dark">Contact us</Button>
                </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;