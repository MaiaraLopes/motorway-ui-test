import { render } from "@testing-library/react";
import { React, useState } from "react";
import { Card, CardGroup, Form, Button } from "react-bootstrap";
import "./App.css";

export function FormValidation() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
    }
    setValidated(true);
  };

  return (
    <CardGroup>
      <Card>
        <Card.Body className="form-card">
          <Card.Title>Please fill out the form below</Card.Title>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Name: </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter your name
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label>Email: </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter your email
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label>Birthday: </Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter your birthday"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter your birthday
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label>Favourite Colour: </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your favourite colour"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter your favourite colour
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label>Salary Range: </Form.Label>
              <br />
              <Form.Range min={20} max={50} required />
              <Form.Control.Feedback type="invalid">
                Please enter your salary range
              </Form.Control.Feedback>
            </Form.Group>

            <Button type="submit" className="float-right">
              Submit form
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

render(<FormValidation />);
