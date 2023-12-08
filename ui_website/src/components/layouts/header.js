import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Mooc Project</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
  <Nav className="me-auto">
    <Nav.Link as={Link} to="/home">
      Trang chủ
    </Nav.Link>

    <Nav.Link as={Link} to="/viewAllRoom">
      My Rooms
    </Nav.Link>
    
    <Nav.Link as={Link} to="/viewAllBills">
      All Bills
    </Nav.Link>

    <NavDropdown title="Pages" id="basic-nav-dropdown">
      <NavDropdown.Item as={Link} to="/Profile">
        Profile
      </NavDropdown.Item>
      <NavDropdown.Item as={Link} to="#action/3.2">
        Another action
      </NavDropdown.Item>
      <NavDropdown.Item as={Link} to="#action/3.3">
        Something
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item as={Link} to="#action/3.4">
        Separated link
      </NavDropdown.Item>
    </NavDropdown>
  </Nav>
</Navbar.Collapse>
        <div>
          <form className="form-inline my-2 my-lg-0 d-flex">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;