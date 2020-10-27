import React from "react";
import { Form, Button } from "react-bootstrap";

export default function ContactForm() {

    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
    </Form.Text>
            </Form.Group>

            <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Name" />
            </Form.Group>

            <Form.Group controlId="formName">
                <Form.Label>Message</Form.Label>
                <Form.Control type="Message" placeholder="Message" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
  </Button>
        </Form>
    );

}