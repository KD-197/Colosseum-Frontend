import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Navigation from '../Components/Navigation';
import { AiOutlineBell, AiOutlineMessage, AiOutlineUser, AiOutlinePlus, AiOutlineClose } from 'react-icons/ai';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';

const MainPage = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div style={{ width: '100%', height: '100vh', overflowY: 'hidden' }}>
      <Navigation />
      <Container fluid style={{ height: '80%', marginTop: '5%' }}>
        <Row style={{ height: '100%' }}>
          <Col md={2} style={{ backgroundColor: 'lightblue', padding: '5px' }}>
            <div style={{ height: '40%', marginBottom: '5px', backgroundColor: 'lightgreen' }}>
                Row 1
            </div>
            <div style={{ height: '55%', backgroundColor: 'lightcoral' }}>Row 2</div>
          </Col>
          <Col md={6} style={{ backgroundColor: 'lightyellow', padding: '5px' }}>
            <div style={{ height: '10%', backgroundColor: 'lightgray', marginBottom: '5px' }}>
                Heading
            </div>
            <Form.Control type="text" placeholder="Search" style={{ height: '10%', backgroundColor: 'lightpink', marginBottom: '5px' }} />
            <div style={{ height: '80%', backgroundColor: 'lightseagreen' }}>
                Main Page
            </div>
          </Col>
          <Col md={4} style={{ backgroundColor: 'lightsalmon', padding: '5px', position: 'relative' }}>
            <div style={{ height: '45%', marginBottom: '5px', backgroundColor: 'lightskyblue' }}>
                Row 1
            </div>
            <div style={{ height: '45%', backgroundColor: 'lightsteelblue' }}>Row 2</div>
            {/* Speed Dial */}
            <div style={{ position: 'absolute', bottom: '10px', right: '10px', zIndex: '999' }}>
              <SpeedDial
                ariaLabel="SpeedDial"
                direction="up"
                icon={<SpeedDialIcon icon={open ? <AiOutlineClose /> : <AiOutlinePlus />} />}
                onClick={handleToggle}
                onOpen={handleToggle}
                open={open}
              >
                <SpeedDialAction icon={<AiOutlineBell />} tooltipTitle="Notification" />
                <SpeedDialAction icon={<AiOutlineMessage />} tooltipTitle="Chat" />
                <SpeedDialAction icon={<AiOutlineUser />} tooltipTitle="Profile" />

              </SpeedDial>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainPage;
