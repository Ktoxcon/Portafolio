import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import "./navbar.styles.scss";

export const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>
        <img
          className="d-inline-block align-top"
          src="https://img.icons8.com/doodle/48/000000/linux-client.png"
        />
        <Link href="/">
          <a className="navbar-brand-personal">KToxcon</a>
        </Link>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Item>
          <Link href="/projects">
            <a className="nav-item">Proyectos</a>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link href="/contact">
            <a className="nav-item">Contacto</a>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link href="https://github.com/Ktoxcon">
            <a className="nav-item">Github</a>
          </Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
