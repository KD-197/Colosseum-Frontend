import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, FormControlLabel, Checkbox, Avatar } from '@material-ui/core';
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
    <Container>
      <h2>Create a Community</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Avatar variant="rounded" src="https://via.placeholder.com/150" style={{ width: '25%', height: 'auto' }} />
            {/* Upload Image Button */}
          </Col>
          <Col>
            <Form.Group controlId="forumName">
              <Form.Label>Forum Name</Form.Label>
              <Form.Control type="text" placeholder="Enter forum name" value={forumName} onChange={(e) => setForumName(e.target.value)} required />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter description" value={description} onChange={(e) => setDescription(e.target.value)} required />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="role">
              <Form.Label>Role</Form.Label>
              <Form.Control type="text" placeholder="Enter role" value={role} onChange={(e) => setRole(e.target.value)} />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>Participants</h4>
            <div>
              {participants.map((participant, index) => (
                <Avatar key={index} style={{ backgroundColor: '#007bff', marginRight: '-10px', zIndex: participants.length - index }} alt={participant}>{participant}</Avatar>
              ))}
              <BsPlusCircle onClick={handleAddParticipant} style={{ fontSize: '2em', marginLeft: '-10px', cursor: 'pointer' }} />
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
            <Button variant="contained" color="primary" type="submit">Create</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default CreateForum;
