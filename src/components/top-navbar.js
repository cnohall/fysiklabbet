import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import logo from '../logo.svg';


function TopNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container>

      <LinkContainer to="/">

        <Navbar.Brand href="#home"><img src={logo} className="App-logo-navbar" alt="logo" />Fysiklabbet</Navbar.Brand>
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
            <LinkContainer to="/krafter">
              <NavDropdown.Item >Krafter</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/resulterande-kraft">
              <NavDropdown.Item >Resulterande Kraft</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/frilaggning">
              <NavDropdown.Item >Friläggning</NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Divider />
            <LinkContainer to="/kraftresultanter">
              <NavDropdown.Item >Kraftresultanter</NavDropdown.Item>
            </LinkContainer>
            </NavDropdown>
            
            <NavDropdown title="Moment och Principer" id="basic-nav-dropdown">
            <LinkContainer to="/kraftmoment">
              <NavDropdown.Item >Kraftmoment</NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Divider />
            <LinkContainer to="/havstangsprincipen">
              <NavDropdown.Item >Hävstångsprincipen</NavDropdown.Item>
            </LinkContainer>
            
            </NavDropdown>
            <NavDropdown title="Elektricitet" id="basic-nav-dropdown">
            <LinkContainer to="/laddningar">
              <NavDropdown.Item >Laddningar</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/falt">
              <NavDropdown.Item >Fält</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/kretsar">
              <NavDropdown.Item >Kretsar</NavDropdown.Item>
            </LinkContainer>
            </NavDropdown>
            
            <LinkContainer to="/om-oss">
              <Nav.Link >Om oss</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
  );
}

export default TopNavbar;
