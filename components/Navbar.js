import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const navBarStyles = {
  paddingLeft: "70px",
  paddingRight: "70px",
  backgroundColor: "#003366",
  color: "#ffffff",
};

const menuItemStyles = {
  marginRight: "35px",
};

function NavBar() {
  return (
    <Navbar expand='lg' style={navBarStyles}>
      <Navbar.Brand href='#home'>
        <img
          src='https://cfstatic.safaribookings.com/img/logos/logo-240x35@2x.png'
          alt='Safari Bookings'
          style={{ height: "27px", width: "auto" }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-nav-collapse' />
      <Navbar.Collapse id='basic-nav-collapse' className='justify-content-end'>
        <Nav className='ml-auto'>
          <Nav.Link href='/' style={{ ...menuItemStyles, color: "#ffffff" }}>
            Home
          </Nav.Link>
          <Nav.Link href='#' style={{ ...menuItemStyles, color: "#ffffff" }}>
            About Us
          </Nav.Link>
          <Nav.Link href='/' style={{ ...menuItemStyles, color: "#ffffff" }}>
            Top Deals
          </Nav.Link>
          <Nav.Link href='#' style={{ ...menuItemStyles, color: "#ffffff" }}>
            Top Destinations
          </Nav.Link>
          <Nav.Link href='#' style={{ ...menuItemStyles, color: "#ffffff" }}>
            Top Tours
          </Nav.Link>
          <Nav.Link href='#' style={{ ...menuItemStyles, color: "#ffffff" }}>
            Safari Style
          </Nav.Link>
          <Nav.Link href='#' style={{ ...menuItemStyles, color: "#ffffff" }}>
            Contact Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
