import {Container, Nav,} from "react-bootstrap";  
import Navbar from "react-bootstrap/Navbar";
import { CgProfile } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
  import { IoMdNotificationsOutline } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import "./Toolbar.css";

const NavbarVts = () => {
//added  changes in the toolbar


  return (
    <div className="nave">
      <Navbar collapseOnSelect expand="sm" bg="aliceblue" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <h5>Dashboard</h5>
          </Navbar.Brand>

          <Navbar.Collapse id="responsive-navbar-nav">
            {/* search bar */}
            <Nav className="me-auto">
              <div className="srch">
                {/* <form>
                  <input type="search" placeholder="Search..." />
                  <button type="submit">Search</button>
                </form> */}
                <form class="nosubmit">
                  <input
                    class="nosubmit"
                    type="search"
                    placeholder="Search..."
                  />
                </form>
              </div>
            </Nav>

            {/* navbar icons */}
            <Nav className="icons">
              <Nav.Link href="#deets">
                Rohan Sharma
              </Nav.Link>
              <Nav.Link href="#deets">

              </Nav.Link>
              <Nav.Link href="#deets">
                {" "}

              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarVts;
