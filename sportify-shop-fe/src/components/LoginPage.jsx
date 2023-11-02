import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardSubtitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios

const Login = (props) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async (ev) => {
    ev.preventDefault();
    if (!username || !password) {
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/api/auth/login", {
        email: username,
        password: password,
      }, {
        headers: {
          'Content-Type': 'application/json' 
        }
      });

      if (response.data) {
        props.setToken(response.data);
        navigate("/nike_webshop");
      } else {
        alert("Login failed");
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Login error:", error);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <CardBody>
              <CardSubtitle className="mb-2 text-muted" tag="h1">
                Login to Shoptify
              </CardSubtitle>
              <Form onSubmit={loginHandler}>
                <FormGroup className="pb-2 mr-sm-2 mb-sm-0">
                  <Label for="exampleEmail" className="mr-sm-2">
                    Email
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    onChange={(ev) => setUsername(ev.currentTarget.value)}
                  />
                </FormGroup>
                <FormGroup className="pb-2 mr-sm-2 mb-sm-0">
                  <Label for="examplePassword" className="mr-sm-2">
                    Password
                  </Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    onChange={(ev) => setPassword(ev.currentTarget.value)}
                  />
                </FormGroup>
                <Button type="submit" color="primary">
                  Login
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
