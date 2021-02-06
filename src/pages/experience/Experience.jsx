import React from 'react'
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_MAGNA from "../../assets/img/experience/magna.png";
import Tilt from "react-tilt";
import "./Experience.css";

const Experience = () => {
    return (
        <div id="experience">
            <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
            <Jumbotron className="jumbo-style">
            <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_MAGNA} alt="Magnaquest logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">QC Engineer</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Senior Build Engineer</strong>
                    <br />
                    <strong>Technology &amp; Tools:</strong> Jenkins,SQL,Nant.
                    <br />
                    <strong>Duration:</strong> Feb 2019 - Present
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li><strong>Developed &amp; enhanced</strong> Automating, Configuring and deploying instances on  IIS Web Server</li>
                      <li><strong>Performed</strong> Smoke/Sanity tests for the applications deployed and also troubleshooted the application for the issues that arise as part of the smoke test process.
                      </li>
                      <li><strong>Provided</strong> Continuous Build and Deployments to multiple environments like Dev, QA  and UAT.
                      </li>
                      <li><strong>Performed</strong> CRUD operations on multiple databases to load/ remove data according 
                      to the business requirements.</li>
                      <li><strong>Released</strong> the Product for the clients.</li>

                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
            </Jumbotron>
            
        </div>
    )
}

export default Experience
