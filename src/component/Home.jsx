import React, { Component } from "react";
import { Link } from "react-router-dom";
//import Back from "../image/back.jpg";
import "../sytle/home.css";
import { Jumbotron, Container, Row, Col, Image, Button,ListGroup } from "react-bootstrap";
class Home extends Component {
  render() {
    return (
      <>
        <Jumbotron className="bind">
          <h4> Well Come To Software clicker </h4>
          <a href="#endregion">Software developing area within</a>
          <p>
            We are developing software by using language like recent update
            language like
            <strong> React Redux JavaScript Node-js Expess</strong> most popular
            know language like <strong>PHP and JAVA</strong>, and frame like
            design Wordpress SquereSpace laveral. In addition to Mysql databases
            we also use popular databases mongodb database
          </p>
        </Jumbotron>
        <Container>
          <Row className="show-grid text-center">
            <Col xs={12} sm={4} className="person-wrapper">
              <Image src="asset/javas.png" className="profile-pic" />
              <h3>Script</h3>
              <h3>coding...</h3>
              <p>
                That's a crooked tree. We'll send him to Washington. These
                little son of a guns hide in your brush and you just have to
                push them out.
              </p>
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <Image src="asset/images.jpg" circle className="profile-pic" />
              <h5>Estroil</h5>
              <p>
                That's a crooked tree. We'll send him to Washington. These
                little son of a guns hide in your brush and you just have to
                push them out.
              </p>
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <Image src="asset/doo.gif" circle className="profile-pic" />
              <h3>Animating</h3>
              <p>
                That's a crooked tree. We'll send him to Washington. These
                little son of a guns hide in your brush and you just have to
                push them out.
              </p>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col xs={12} sm={4} className="person-wrapper">
              <Image
                src="asset/plugin.png"
                roundedCircle
                className="profile-pic"
              />
              <h3>Riff</h3>
              <p>
                That's a crooked tree. We'll send him to Washington. These
                little son of a guns hide in your brush and you just have to
                push them out.
              </p>
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <ul>
                <li>
                  {" "}
                  <h3>Our languges</h3>
                </li>
                <li></li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Express</li>
              </ul>
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <ul>
                <li>
                  {" "}
                  <h3>Our Capability</h3>
                </li>
                <p>
                  Helping enterprises with software solutions As a local
                  software company based locally , our goal is to
                  build the most comprehensive suite of software solutions to
                  enterprises that need to build, improve and scale their
                  business. 
                </p>
                <li>Market</li>
                <li>Call log</li>
              </ul>
            </Col>
          </Row>
          <Jumbotron>
            <h3> Latest News </h3>
            <p>
              Moti Engineering PLC is one of the leading Information and
              Communication Technology solutions providers in Ethiopia with a
              primary focus in IT infrastructures and E-payment Solutions.
            </p>
            <Link to="/latestPost">
              <Button bsStyle="primary">See latest News</Button>
            </Link>
          </Jumbotron>
          <hr className="foo" />
            <h2>WE OFFER AND PROVIDE </h2>
            <Row md="12">
              <Col md="6">
                <Image src="asset/amt2.png" className="about-profile-file" />
                <div className="about">
                  <ListGroup as="ul">
                    <ListGroup.Item as="li" active>
                      ATM software solution
                    </ListGroup.Item>
                    <ListGroup.Item as="li" disabled>
                      POS software solution
                    </ListGroup.Item>
                    <ListGroup.Item as="li" disabled>
                      ATM providing
                    </ListGroup.Item>
                    <ListGroup.Item as="li" disabled>
                      ATM hardware solution
                    </ListGroup.Item>
                    <ListGroup.Item as="li" disabled>
                      E-payment
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              </Col>
              <Col md="6">
                <Image src="asset/amt2.png" className="about-profile-pic" />
                <h2> WE OFFER AND PROVIDE TECHNICAL SUPPORT ON</h2>
                <ListGroup as="ul">
                  <ListGroup.Item as="li" active>
                    Supply of Banking Automation
                  </ListGroup.Item>
                  <ListGroup.Item as="li" disabled>
                    IT material and Solutions
                  </ListGroup.Item>{" "}
                  <ListGroup.Item as="li" disabled>
                    Telecom and IT infrastructures
                  </ListGroup.Item>{" "}
                </ListGroup>
              </Col>
            </Row>
        </Container>
      </>
    );
  }
}
export default Home;
