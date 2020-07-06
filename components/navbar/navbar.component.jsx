import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import "./navbar.styles.scss";

export const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>
        <Link href="/">
          <a className="navbar-brand-personal">KToxcon</a>
        </Link>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link>
          <Link href="/projects">
            <a className="nav-item">Projects</a>
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link href="https://github.com/Ktoxcon">
            <a className="nav-item">Github</a>
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link href="/about">
            <a className="nav-item">About</a>
          </Link>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
