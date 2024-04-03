import React, { useState } from 'react';
import { Container, Tabs, Tab, Button, Form, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaGoogle, FaGithub } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';


function Login() {
  const [activeTab, setActiveTab] = useState('login');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: ''
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async () => {
    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error registering user');
    }
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error');
    }
  };
  const registerTab = () => {
    setActiveTab('register');
  };
  return (
    <Container className="p-3 my-5 d-flex flex-column w-50">
    <Tabs justify className='mb-3 d-flex flex-row justify-content-between' activeKey={activeTab} onSelect={(tab) => handleTabChange(tab)}>
      <Tab eventKey="login" title="Login">
        <Form className="mt-3">
          <div className="text-center mb-3">
            <p>Sign in with:</p>
            <div className='d-flex justify-content-between mx-auto' style={{ width: '30%' }}>
              <Button variant="outline-primary" className='m-1' style={{ color: '#222222' }}>
                <FaFacebookF size="sm" />
              </Button>
              <Button variant="outline-primary" className='m-1' style={{ color: '#222222' }}>
                <FaTwitter size="sm" />
              </Button>
              <Button variant="outline-primary" className='m-1' style={{ color: '#222222' }}>
                <FaGoogle size="sm" />
              </Button>
              <Button variant="outline-primary" className='m-1' style={{ color: '#222222' }}>
                <FaGithub size="sm" />
              </Button>
            </div>
            <p className="text-center mt-3">or:</p>
          </div>
          <Form.Group controlId="formBasicEmail" style={{marginTop: '2em'}}>
            <Form.Control type="email" placeholder="Enter email" name="email" value={formData.email} onChange={handleInputChange} />
          </Form.Group>
          <Form.Group controlId="formBasicPassword" style={{marginTop: '2em'}}>
            <Form.Control type="password" placeholder="Password" name="password" value={formData.password} onChange={handleInputChange} />
          </Form.Group>
          <div className="d-flex justify-content-between mx-4 mb-4" style={{marginTop: '2em'}}>
            <Form.Check type="checkbox" label="Remember me" />
            <a href="!#">Forgot password?</a>
          </div>
          <Button variant="primary" className="mb-4 w-100" onClick={handleLogin}>Sign in</Button>
          <p className="text-center">Not a member? <a href="#!" onClick={registerTab}>Register</a></p>
        </Form>
      </Tab>
      <Tab eventKey="register" title="Register">
        <Form className="mt-3">
          <div className="text-center mb-3">
            <p>Sign up with:</p>
            <div className='d-flex justify-content-between mx-auto' style={{ width: '30%' }}>
              <Button variant="outline-primary" className='m-1' style={{ ccolor: '#222222' }}>
                <FaFacebookF size="sm" />
              </Button>
              <Button variant="outline-primary" className='m-1' style={{ color: '#222222' }}>
                <FaTwitter size="sm" />
              </Button>
              <Button variant="outline-primary" className='m-1' style={{ color: '#222222' }}>
                <FaGoogle size="sm" />
              </Button>
              <Button variant="outline-primary" className='m-1' style={{ color: '#222222' }}>
                <FaGithub size="sm" />
              </Button>
            </div>
            <p className="text-center mt-3">or:</p>
          </div>
          <Row className="mb-4">
            <Col>
              <Form.Control placeholder="FirstName" style={{marginRight: '2em'}} name="firstName" value={formData.firstName} onChange={handleInputChange} />
            </Col>
            <Col>
              <Form.Control placeholder="LastName" name="lastName" value={formData.lastName} onChange={handleInputChange} />
            </Col>
          </Row>
          <Form.Group controlId="formBasicEmail" style={{marginTop: '2em'}}>
            <Form.Control type="email" placeholder="Username" name="username" value={formData.username} onChange={handleInputChange} />
          </Form.Group>
          <Form.Group controlId="formBasicEmail" style={{marginTop: '2em'}}>
            <Form.Control type="email" placeholder="Email" name="email" value={formData.email} onChange={handleInputChange} />
          </Form.Group>
          <Form.Group controlId="formBasicPassword" style={{marginTop: '2em'}}>
            <Form.Control type="password" placeholder="Password" name="password" value={formData.password} onChange={handleInputChange} />
          </Form.Group>
          <div className='d-flex justify-content-center mb-4' style={{marginTop: '2em'}}>
            <Form.Check type="checkbox" label="I have read and agree to the terms" />
          </div>
          <Button variant="primary" className="mb-4 w-100" onClick={handleRegister}>Sign up</Button>
        </Form>
      </Tab>
    </Tabs>
    
  </Container>
  );
}

export default Login;
