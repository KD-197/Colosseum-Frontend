import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';

export default function Navigation() {
  const [openNavCentred, setOpenNavCentred] = useState(false);

  return (
    <Navbar fixed='top' bg='light' expand='lg'>
      <Container fluid>
        <Navbar.Brand href='#'>Colosseum</Navbar.Brand>
        <Navbar.Toggle
          aria-controls='navbarCenteredExample'
          aria-label='Toggle navigation'
          onClick={() => setOpenNavCentred(!openNavCentred)}
        >
          <FaBars />
        </Navbar.Toggle>

        <Navbar.Collapse id='navbarCenteredExample'>
          <Nav className='mb-2 mb-lg-0 ms-auto'>
            <Nav.Link href='/home' active>Home</Nav.Link>
            <Nav.Link href='#'>Link</Nav.Link>
            <NavDropdown title='Forums & Community' id='basic-nav-dropdown'>
              <Nav.Link href="/forum">Global Forums</Nav.Link>
              <Nav.Link href="/create-forum">Create a Forum</Nav.Link>
              <Nav.Link href="#something-else">Something else here</Nav.Link>
            </NavDropdown>
            <Nav.Link href='#'>Link</Nav.Link>
            <Nav.Link href='#'>Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}