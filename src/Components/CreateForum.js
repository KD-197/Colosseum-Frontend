import React, { useState } from 'react';
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import { FormControlLabel, Checkbox } from '@mui/material'
import { Avatar } from '@mui/material';
import { BsPlusCircle } from 'react-icons/bs';

const CreateForum = () => {
  const [forumName, setForumName] = useState('');
  const [description, setDescription] = useState('');
  const [role, setRole] = useState('');
  const [participants, setParticipants] = useState([]);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleAddParticipant = () => { 
    const newParticipant = `Participant ${participants.length + 1}`;
    setParticipants([...participants, newParticipant]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit form data to backend
    // Redirect to forum page or show success message
  };

  return (
    <Container style={{marginTop: '3.5em'}}>
      <h2>Create a Community</h2>
      <Form onSubmit={handleSubmit}>
        <Row className='display-flex align-items-center justify-content-center'>
          <Col md={2} xs={4}>
            <Avatar variant="rounded" src="https://via.placeholder.com/200" style={{ width: '100%', height: 'auto'}} />
            {/* Upload Image Button */}
          </Col>
          <Col>
            <Form.Group controlId="forumName">
              <Form.Label>Forum Name</Form.Label>
              <Form.Control 
              type="text" 
              placeholder="Enter forum name" 
              value={forumName} 
              onChange={(e) => setForumName(e.target.value)} 
              style={{width: '50%'}}
              required />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col style={{marginTop: '1em', marginBottom: '1em'}}>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter description" value={description} onChange={(e) => setDescription(e.target.value)} required />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col style={{marginTop: '1em', marginBottom: '1em'}}>
            <Form.Group controlId="role">
              <Form.Label>Role</Form.Label>
              <Form.Control type="text" placeholder="Enter role" value={role} onChange={(e) => setRole(e.target.value)} />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col style={{marginBottom: '1em'}}>
            <h4>Participants</h4>
            <div style={{marginTop: '1em', marginBottom: '1em', display: 'flex', flexDirection: 'row'}}>
              {participants.map((participant, index) => (
                <Avatar key={index} style={{ backgroundColor: '#007bff', marginRight: '-12px', zIndex: participants.length - index, border: '3px solid white' }} alt={participant}>{participant}</Avatar>
              ))}
              <BsPlusCircle onClick={handleAddParticipant} style={{ fontSize: '2.5em', marginLeft: '12px', cursor: 'pointer', zIndex:'99' }} />
            </div>
            <p>Minimum 3 participants required</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormControlLabel
              control={<Checkbox checked={agreeTerms} onChange={(e) => setAgreeTerms(e.target.checked)} />}
              label="I agree to the terms and conditions"
            />
          </Col>
        </Row>
        <Row>
          <Col style={{ textAlign: 'center' }}>
          <Button variant="primary" type="submit" style={{ width: '15%', marginBottom: '1em'}}>Create</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default CreateForum;
