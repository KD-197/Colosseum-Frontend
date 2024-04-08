import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Navigation from '../Components/Navigation';
import PopularTags from '../Components/PopularTags';
import LeagueScoreBoard from '../Components/LeagueScoreBoard';
import CardList from '../Components/CardList'
import SpeedDialButton from '../Components/SpeedDial';


const MainPage = () => {
  return (
    <div style={{ width: '100%', height: '100vh', overflowY: 'hidden' }}>
      <Navigation />
      <Container fluid style={{ height: '80%', marginTop: '5%' }}>
        <Row style={{ height: '100%' }}>
          <Col md={2} style={{ backgroundColor: 'lightblue', padding: '5px' }}>
            <div style={{ height: '40%', marginBottom: '5px', backgroundColor: 'lightgreen' }}>
                <PopularTags/>
            </div>
            <div style={{ height: '55%', backgroundColor: 'lightcoral' }}>Row 2</div>
          </Col>
          <Col md={6} style={{ backgroundColor: 'lightyellow', padding: '5px' }}>
            <div style={{ height: '10%', backgroundColor: 'lightgray', marginBottom: '5px' }}>
                Heading
            </div>
            <Form.Control type="text" placeholder="Search" style={{ height: '10%', backgroundColor: 'lightpink', marginBottom: '5px' }} />
            <div style={{ height: '80%', backgroundColor: 'lightseagreen' }}>
                <CardList/>
            </div>
          </Col>
          <Col md={4} style={{ backgroundColor: 'lightsalmon', padding: '5px', position: 'relative' }}>
            <div style={{ height: '50%', marginBottom: '5px', backgroundColor: 'lightskyblue', padding: '0.25em', border: 'none', borderRadius: '8px' }}>
                <LeagueScoreBoard/>
            </div>
            <div style={{ height: '45%', backgroundColor: 'lightsteelblue' }}>Row 2</div>
            {/* Speed Dial */}
            <SpeedDialButton/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainPage;
