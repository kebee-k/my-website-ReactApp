import React, { Component } from "react";
import { Link } from "react-router-dom";
//import Back from "../image/back.jpg";
import "../sytle/home.css";
import { Jumbotron, Container, Row, Col, Image, Button } from "react-bootstrap";
class Home extends Component {
  render() {
    return (
      <>
        <Jumbotron className="bind">
          <h4> Well Come To Moti Engineering </h4>
          <a href="#endregion">Software Engineering Plc</a>
          <p>
            Moti Engineering PLC is one of the leading Information and
            Communication Technology solutions providers in Ethiopia with a
            primary focus in IT infrastructures and E-payment Solutions.
          </p>
        </Jumbotron>
        <Container>
          <Row className="show-grid text-center">
            <Col xs={12} sm={4} className="person-wrapper">
              <Image src="asset/amt2.png" className="profile-pic" />
              <h3>NCR...</h3>
              <h3>Diabold...</h3>
              <p>
                That's a crooked tree. We'll send him to Washington. These
                little son of a guns hide in your brush and you just have to
                push them out.
              </p>
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <Image src="asset/images.jpg" circle className="profile-pic" />
              <h3>Estroil</h3>
              <p>
                That's a crooked tree. We'll send him to Washington. These
                little son of a guns hide in your brush and you just have to
                push them out.
              </p>
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <Image src="asset/doo.gif" circle className="profile-pic" />
              <h3> popoca</h3>
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
                src="asset/atm22.jpg"
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
                  <h3>Our Blogs</h3>
                </li>
                <li>About</li>
                <li>service</li>
                <li>Market</li>
                <li>Call log</li>
              </ul>
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <ul>
                <li>
                  {" "}
                  <h3>Our Capability</h3>
                </li>
                <p>
                  Moti Engineering PLC is one of the leading Information and
                  Communication Technology solutions providers in Ethiopia with
                  a primary focus in IT infrastructures and E-payment Solutions.
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
        </Container>
      </>
    );
  }
}
export default Home;
