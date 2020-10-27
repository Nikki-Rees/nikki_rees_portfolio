import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import { Col, Row, Container } from "../components/Grid";


function Contact() {
    // Setting our component's initial state

    return (
        <Container>
            <Nav />

            <Row>
                <Col size="md-8">
                    <ContactForm />
                </Col>
            </Row>
            <Footer />
        </Container>
    )

};

export default Contact;