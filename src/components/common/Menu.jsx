import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {
  const navegacion = useNavigate();
  const logout = () => {
    sessionStorage.removeItem("usuarioRecetas");
    setUsuarioLogueado("");
    navegacion("/");
  };
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
          />{" "}
          Blog de Recetas
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink end className="nav-link" to="/">
              Inicio
            </NavLink>
            {usuarioLogueado !== "" ? (
              <>
                <NavLink end className="nav-link" to="/administrador">
                  Administrador
                </NavLink>
                <Button
                  className="nav-link me-auto"
                  variant="link"
                  onClick={logout}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <NavLink end className="nav-link" to="/registro">
                  Registro
                </NavLink>
                <NavLink end className="nav-link" to="/login">
                  Login
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
