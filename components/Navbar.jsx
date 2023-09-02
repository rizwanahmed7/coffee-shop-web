import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Nav className="me-auto">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Brand href="items">Items</Navbar.Brand>
        <Navbar.Brand href="order">Order</Navbar.Brand>
        <Navbar.Brand href="customer">Customers</Navbar.Brand>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
