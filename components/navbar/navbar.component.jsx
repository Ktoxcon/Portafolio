import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";

export const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>
        <Link href="/">
          <a className="navbar-brand-p">KToxcon</a>
        </Link>
      </Navbar.Brand>
    </Navbar>
  );
};
