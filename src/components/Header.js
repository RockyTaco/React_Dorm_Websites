// src/components/Header.js

import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <div className="container">
        <Navbar.Brand href="/">Your Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ml-auto">
            <Nav.Link href="/events">Events</Nav.Link>
            <NavDropdown title="Forms" id="basic-nav-dropdown">
              <NavDropdown.Item href="/forms/form1">Form 1</NavDropdown.Item>
              <NavDropdown.Item href="/forms/form2">Form 2</NavDropdown.Item>
              {/* Add more forms as needed */}
            </NavDropdown>
            <Nav.Link href="/announcements">Announcements</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            {/* Add more navigation links as needed */}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
