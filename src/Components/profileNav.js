import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { RiHome3Line } from 'react-icons/ri';
import { RiGroupLine } from 'react-icons/ri'; 
import { RiNotification3Line } from 'react-icons/ri';
import { RiChat3Line } from 'react-icons/ri';
import { RiUser3Line } from 'react-icons/ri';
import './profileNav.css'; 


const ProfileNav = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleSelect = (selectedTab) => {
    setActiveTab(selectedTab);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-center align-items-center">
        <Nav
          className="profile-nav"
          activeKey={activeTab}
          onSelect={handleSelect}
        >
          <Nav.Link href="/home" eventKey="home">
            <RiHome3Line size={30} />
          </Nav.Link>
          <Nav.Link href="/groups" eventKey="group">
            <RiGroupLine size={30} />
          </Nav.Link>
          <Nav.Link href="/notificatons" eventKey="notification">
            <RiNotification3Line size={30} />
          </Nav.Link>
          <Nav.Link href="/chat" eventKey="chat">
            <RiChat3Line size={30} />
          </Nav.Link>
          <Nav.Link href="/profile" eventKey="profile">
            <RiUser3Line size={30} />
          </Nav.Link>
         {/* <div className="selector"></div>  Orange circular selector */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default ProfileNav;
