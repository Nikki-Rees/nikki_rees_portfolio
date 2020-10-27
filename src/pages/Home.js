import React from "react";
import "./style.css";
import { Col, Row, Container } from "../components/Grid";


export function Home() {
    // Setting our component's initial state

    return (

        <Container fluid>
            <Row>
                <Col size="md-12">
                    <div class="d-flex justify-content-start">
                        <div className="hero-container">
                            <img id="hero-logo" src="../assets/images/nrlogo5.png" alt="Nikki Rees Web Development" />
                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col size="md-9 sm-12">
                    <div class="d-flex justify-content-end">


                        <p>With over 15 years of project and stakeholder management in digital, consulting and financial industry. I love to problem solve and fixing things. I enjoy thinking creatively to develop practical solutions that deliver to a brief with the end-user in focus.</p>


                    </div>
                </Col>
                <Col size="md-3 sm-12">

                    <div className="contact-details">
                        <h3>Contact</h3>

                        <ul>
                            <li><i class="fa fa-file-pdf-o" aria-hidden="true"> <a
                                href="./Assets/NikkiReesResume2020.pdf">
                                Nikk Rees resume</a></i></li>
                            <li><i class="fa fa-envelope" aria-hidden="true"> <a href="mailto:nikki-rees@outlook.com">
                                nikki-rees@outlook.com</a></i></li>
                            <li><i class="fa fa-github" aria-hidden="true"> <a href="https://github.com/Nikki-Rees">
                                nikki-rees</a></i></li>
                            <li><i class="fa fa-linkedin" aria-hidden="true"> <a href="https://www.linkedin.com/in/nrees/">
                                Nikki Rees</a></i></li>

                        </ul>
                    </div>

                </Col>
            </Row >

        </Container >

    );
};

export default Home;