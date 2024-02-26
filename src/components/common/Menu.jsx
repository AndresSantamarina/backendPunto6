import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <Navbar expand="lg" className="bg-body-light navColor">
      <Container>
        <Navbar.Brand as={Link} to="/">
        <img
              alt="logo de comida"
              src="https://cdn-icons-png.flaticon.com/128/685/685352.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Blog de Recetas
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink end className="nav-link" to="/">
              Inicio
            </NavLink>
            <NavLink end className="nav-link" to="/administrador">
              Administrador
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
