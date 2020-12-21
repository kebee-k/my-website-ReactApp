import React, { Component } from "react";
import { Container, Image, Col, Row, ListGroup } from "react-bootstrap";
import "../sytle/About.css";

export default class About extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row md="12">
            <Col md="6">
              <h1>Our Mission</h1>
              <p>
                Our mission is helping people and organizations to get connected
                to information, by combining our resources and knowledge to
                solve the challenging communications and computing problems. We
                conduct our business responsibly to earn an adequate financial
                return which is required by the firm to grow and provide the
                opportunity for the shareholders and employees to achieve their
                goals
              </p>
            </Col>
            <Col md="6">
              <h1>Our Vision</h1>
              Our vision is  will have developed the
              best ICT solutions and, becoming the industry leader in ethiopia. Moti Engineering will actively be promoting the
              technologies for both enterprise and public sector. 
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
