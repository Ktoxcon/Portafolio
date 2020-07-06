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
        <Nav.Item>
          <Link  href="/projects">
            <a className="nav-item">Projects</a>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link href="https://github.com/Ktoxcon">
            <a className="nav-item">Github</a>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link href="/contact">
            <a className="nav-item">Contact</a>
          </Link>
        </Nav.Item> 
      </Nav>
    </Navbar>
  );
};

export default NavBar;
