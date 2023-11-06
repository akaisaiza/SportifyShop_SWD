// Login.js
import React, { useState } from 'react';
import { Container, Row, Col, Card, CardBody, CardSubtitle, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../redux/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // Use the login function provided by AuthContext
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = async (event) => {
    event.preventDefault();
    if (!username || !password) {
      alert('Please fill in both fields.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', {
        email: username,
        password: password,
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.data) { 
        login(response.data.token); 
        navigate('/nike_webshop');
      } else {
        alert('Invalid login credentials');
      }
    } catch (error) {
      alert('An error occurred during login.');
      console.error('Login error:', error);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md="6">
          <Card>
            <CardBody>
              <CardSubtitle className="mb-2 text-muted" tag="h1">
                Login to Shoptify
              </CardSubtitle>
              <Form onSubmit={loginHandler}>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter email"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                  />
                </FormGroup>
                <Button type="submit" color="primary">
                  Login
                </Button>
                <Link to="/Register">
                    Register
                  </Link>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
