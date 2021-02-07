import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import Profile from '../../assets/img/profile/bvk.png'

import './about.css'

const About = () => {
    return (
        <div id="about">
            <div className="about">
            <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
            <Container>
                <Row className="pt-3 pb-5 align-items-center">
                    <Col xs={12} md={6}>
                        <Row className="justify-content-center mb-2 mr-2 ">
                        <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
                        </Row>
                    </Col>
                    <Col xs={12} md={6}>
                        <Row className=" align-items-start p-2 my-details rounded">
                        Hi there! I am <strong>&nbsp;B V SAI KIRAN</strong>
                <br />A passionate programmer and designer, born and brought up in India. I am a Quick learner and currently working as Senior Build Engineer.
                <br />
                In 2019, I successfully completed my Engineering with specialization in 'Computer Science and Engineering'.
                <br />
                As a build engineer i need to build the code and release the product for the clients.
                <br />I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                <br /> <br />
                        </Row>
                        <Row>
                            <Col className="d-flex justify-content-center flex-wrap">
                                <div>
                                    <a href="#contact">
                                        <Button className="m-2" variant="outline-primary">Let's Talk</Button>
                                    </a>
                                </div>
                    <div>
                    <a href="https://drive.google.com/file/d/1PEK9WkCr97Cayt1HbkL5uzAZK2NPIoZB/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/bvsaikiran" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/bvsk1999" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </Container>
            </div>
        </div>
    )
}

export default About
