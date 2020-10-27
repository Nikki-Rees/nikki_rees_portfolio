import React from "react";
import ContactForm from "../components/ContactForm";
import { Col, Row, Container } from "../components/Grid";


function Contact() {
    // Setting our component's initial state

    return (
        <Container>


            <Row>
                <Col size="md-8">
                    <ContactForm />
                </Col>
            </Row>

        </Container>
    )

};

export default Contact;