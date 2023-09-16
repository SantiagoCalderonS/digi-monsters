import ProgressBar from 'react-bootstrap/ProgressBar';
import { Nav, Button, Offcanvas, Navbar} from 'react-bootstrap';
import { useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
import style from "./navBar.module.css"
import { Link } from 'react-router-dom';

const NavBar = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
    <div className={style.barraLateral}>
         <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>tablilla</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav className={style.tablilla}>
            <Nav.Link ><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/bolsa">bolsa</Link></Nav.Link>
            <Nav.Link ><Link to="/coleccion">Colección</Link></Nav.Link>
            <Nav.Link ><Link to="/escenario">Duelo</Link></Nav.Link>

            {/*<NavDropdown title="etapa" id="basic-nav-dropdown">
              <NavDropdown.Item href="/bolsa">
              <Link to="/bolsa">Home</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/bolsa">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>*/}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
    )
}

export default NavBar;