// Register.js
import React, { useState } from 'react';
import {
  Container, Row, Col, Card, CardBody, Button, Form, FormGroup, Label, Input,
} from 'reactstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    address: ''
  });

  const { firstName, lastName, email, phone, address, password } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const registerHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/auth/register', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(response.data); // Handle the response appropriately
      // You might want to log the user in directly, or confirm that the account needs to be verified etc.
      alert('Registration successful!');
      navigate('/login'); // Navigate to login page or maybe home depending on your flow
    } catch (error) {
      alert('An error occurred during registration. Please try again.');
      console.error('Registration error:', error);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md="8">
          <Card>
            <CardBody>
              <h1 className="mb-3">Register</h1>
              <Form onSubmit={registerHandler}>
                <FormGroup>
                  <Label for="firstName">First Name</Label>
                  <Input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={firstName}
                    onChange={onChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="lastName">Last Name</Label>
                  <Input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={lastName}
                    onChange={onChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={onChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={onChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="phone">Phone</Label>
                  <Input
                    type="text"
                    name="phone"
                    id="phone"
                    value={phone}
                    onChange={onChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="address">Address</Label>
                  <Input
                    type="text"
                    name="address"
                    id="address"
                    value={address}
                    onChange={onChange}
                  />
                </FormGroup>
                <Button type="submit" color="primary">
                  Register
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
