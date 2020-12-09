import React, { Component } from "react";
import { Container, Image, Col, Row, ListGroup } from "react-bootstrap";
import "../sytle/About.css";

export default class About extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row md='12'>
            <Col>
            <Row>
                <Col>
                  <Image
                    src="asset/atmAbout.jpg"
                    className="about-profile-pic"
                    roundedCircle
                  />
                  <h3> Over views </h3>
                  <p>
                    Moti Engineering mission is helping people and organizations
                    to get connected to information, by combining our resources
                    and knowledge to solve the challenging communications and
                    computing problems. We conduct our business responsibly to
                    earn an adequate financial return which is required by the
                    firm to grow and provide the opportunity for the
                    shareholders and employees to achieve their goals.
                  </p>
                  <p>
                    Moti Engineering Plc, headquartered in Addis Ababa with more
                    than 450 employees across 11 district offices, 43 regional
                    branch offices and 60 Point of Presence in the country.
                  </p>
                  <p>
                    That's what makes life fun. That you can make these
                    decisions. That you can create the world that you want. Of
                    course he's a happy little stone, cause we don't have any
                    other kind. It's so important to do something every day that
                    will make you happy.
                  </p>
                  <p>
                    You better get your coat out, this is going to be a cold
                    painting. That's the way I look when I get home late; black
                    and blue. That's crazy. We're trying to teach you a
                    technique here and how to use it.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row style={{ marginTop: "50px" }}>
            <Col sm={6} smOffset={2}>
              <Row>
                <Col>
                  <Image
                    src="asset/atmAbout.jpg"
                    className="about-profile-pic"
                    roundedCircle
                  />
                  <h3> Our Mission </h3>
                  <p>
                    Moti Engineering mission is helping people and organizations
                    to get connected to information, by combining our resources
                    and knowledge to solve the challenging communications and
                    computing problems. We conduct our business responsibly to
                    earn an adequate financial return which is required by the
                    firm to grow and provide the opportunity for the
                    shareholders and employees to achieve their goals.
                  </p>
                  <p>
                    Moti Engineering Plc, headquartered in Addis Ababa with more
                    than 450 employees across 11 district offices, 43 regional
                    branch offices and 60 Point of Presence in the country.
                  </p>
                  <p>
                    That's what makes life fun. That you can make these
                    decisions. That you can create the world that you want. Of
                    course he's a happy little stone, cause we don't have any
                    other kind. It's so important to do something every day that
                    will make you happy.
                  </p>
                  <p>
                    You better get your coat out, this is going to be a cold
                    painting. That's the way I look when I get home late; black
                    and blue. That's crazy. We're trying to teach you a
                    technique here and how to use it.
                  </p>
                </Col>
              </Row>
              
            </Col>
            <Col sm={6} smOffset={2}>
              <Row>
                <Col>
                  <Image
                    src="asset/images.jpg"
                    className="about-profile-pic"
                    roundedCircle
                  />
                  <h3>Our Vision</h3>
                  <p>
                    Our vision is by 2016 Moti Engineering will have developed
                    the best ICT solutions and, becoming the industry leader in
                    East Africa. Moti Engineering will actively be promoting the
                    technologies for both enterprise and public sector. Moti
                    Engineering intent is to become the blue-chip ICT Company of
                    the region through its business efforts in two core areas:
                    Data and Telecom Network infrastructure and E-payment
                    solutions.
                  </p>
                  <p>
                    Anyone can paint. You can do anything here. So don't worry
                    about it. Life is too short to be alone, too precious. Share
                    it with a friend. Every highlight needs it's own personal
                    shadow.
                  </p>
                  <p>
                    That's what makes life fun. That you can make these
                    decisions. That you can create the world that you want. Of
                    course he's a happy little stone, cause we don't have any
                    other kind. It's so important to do something every day that
                    will make you happy.
                  </p>
                  <p>
                    You better get your coat out, this is going to be a cold
                    painting. That's the way I look when I get home late; black
                    and blue. That's crazy. We're trying to teach you a
                    technique here and how to use it.
                  </p>
                </Col>
              </Row>
            </Col>
            <hr className="foo" />
            <h2>WE OFFER AND PROVIDE TECHNICAL SUPPORT ON</h2>
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
          </Row>
        </Container>
      </div>
    );
  }
}
