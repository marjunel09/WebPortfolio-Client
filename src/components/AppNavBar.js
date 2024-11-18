import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-scroll";
import './AppNavBar.css';

export default function AppNavBar() {
  return (
    <Navbar expand="lg" fixed="top" className="navbar">
      <Container>
        {/* Center brand on mobile and tablet screens */}
        <Navbar.Brand className="mx-auto d-block d-lg-inline">
          Marjunel Lagman
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto">
            <Nav.Link>
              <Link to="landing" smooth={true} duration={150} className="nav-link">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="projects" smooth={true} duration={150} className="nav-link">
                Projects
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="tools" smooth={true} duration={150} className="nav-link">
                Tools
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="contact" smooth={true} duration={150} className="nav-link">
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
