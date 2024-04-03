import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaChartLine, FaHistory, FaMoneyBillWave, FaCog } from 'react-icons/fa';
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import StandingsAccordion from '../Components/Accordion';
import Matches from '../Components/AvailableMatches';
import ProfileNav from '../Components/profileNav';

function ProfilePage() {
  return (
    <Container fluid>
      <Row>
        {/* Column 1 */}
        <Col md={2}>
          {/* Profile Image */}
          <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
            <div className="rounded-circle bg-secondary" style={{ width: '150px', height: '150px' }}></div>
          </div>
          {/* Tabs */}
          <Nav className="flex-column mt-3">
            <Nav.Link href="#tab1"><FaChartLine className="me-2" /> Predict</Nav.Link>
            <Nav.Link href="#tab2"><TbDeviceDesktopAnalytics className="me-2" /> Analysis</Nav.Link>
            <Nav.Link href="#tab3"><FaHistory className="me-2" /> History</Nav.Link>
            <Nav.Link href="#tab4"><FaMoneyBillWave className="me-2" /> Earnings</Nav.Link>
            <Nav.Link href="#tab5"><FaCog className="me-2" /> Settings</Nav.Link>
          </Nav>
        </Col>

        {/* Column 2 */}
        <Col md={7} style={{ marginTop: '5%', height: '100%'}}>
          {/* Content of col-2 goes here */}
          <div style={{height: '65vh'}}>
             <p style={{ marginBottom: '15px', fontSize: '20px'}}> Standings</p>
           <StandingsAccordion  />
          </div>
        </Col>

        {/* Column 3 */}
        <Col md={3}  >
          {/* Row 1 */}
          <Row className="d-flex justify-content-center align-items-center" style={{width: '99%', height: '20%', marginBottom: '10%', marginTop: '10%', border: 'none', borderRadius: '15px' }}>
            {/* Content of row-1 goes here */}
            <ProfileNav/>
          </Row>
          {/* Row 2 */}
          <Row  style={{width: '99%', height: '40%',  marginBottom: '10%', border: 'none', borderRadius: '15px' }}>
            {/* Content of row-2 goes here */}
            <Matches />
          </Row>
          {/* Row 3 */}
          <Row className="bg-warning" style={{width: '99%', height: '50%',  marginBottom: '10%', border: 'none', borderRadius: '15px'}}>
            {/* Content of row-3 goes here */}

          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default ProfilePage;
