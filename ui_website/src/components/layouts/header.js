import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Mooc Project</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="home">Trang chủ</Nav.Link>

            <Nav.Link href="viewAllRoom">My Rooms</Nav.Link>
            <Nav.Link href="viewAllBills">All Bills</Nav.Link>

             <Nav.Link href="viewBillDetails">Bill Details</Nav.Link>
            <Nav.Link href="createNewBill">New Bill</Nav.Link>
           {/* <Nav.Link href="#">Login</Nav.Link> */}

            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="Profile">Profile</NavDropdown.Item>
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
        </Navbar.Collapse>
        <div>
          <form class="form-inline my-2 my-lg-0 d-flex">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;