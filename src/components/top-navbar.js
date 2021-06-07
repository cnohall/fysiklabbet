import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

function TopNavbar() {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <LinkContainer to="/">
        <Navbar.Brand href="#home">Fysiklabbet</Navbar.Brand>
      </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <LinkContainer to="/">
            <Nav.Link >Hem</Nav.Link>
          </LinkContainer>
            <NavDropdown title="Lagar och Krafter" id="basic-nav-dropdown">
          <LinkContainer to="/newton">
            <NavDropdown.Item >Newtons lagar</NavDropdown.Item>
          </LinkContainer>
          <NavDropdown.Item href="#action/1.2">Krafter</NavDropdown.Item>
          <NavDropdown.Item href="#action/1.3">Resulterande Kraft</NavDropdown.Item>
          <NavDropdown.Item href="#action/1.4">Friläggning</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/1.5">Kraftresultanter</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Moment och Principer" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/1.1">Kraftmoment</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/1.2">Hävstångsprincipen</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Elektricitet" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Laddningar</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Fält</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Kretsar</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#link">Om oss</Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
  );
}

export default TopNavbar;
