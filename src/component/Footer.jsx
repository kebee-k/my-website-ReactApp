import React, { Component } from "react";
import { Row, Col,  } from "react-bootstrap";
import "../sytle/CustomNavbar.css";
import "../sytle/follow.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="social-container">
        <div className="social-container">
          <div className="sideItem">
            <Row md='12' className="sideItem">
              <Col md="4">
                <ul>
                <li><h4>Contact us</h4></li>
                  <li>Phone:+251938318340</li>
                  <li> Email:kebkit3@gmail.com</li>
                  <li></li>
                </ul>
              </Col>
              <Col md="4">
                <ul>
                  <li> <h1>Our Works</h1>
                  </li>
                  <li>About</li>
                  <li>service</li>
                  <li>feature</li>
                </ul>
              </Col>
              <Col md="3">
                <ul>
                  <li> 
                   </li>
                  <li>Blogs</li>
                  <li>Website</li>
                </ul>
              </Col>
            </Row>
          </div>
        </div>
        <div></div>
      </div>
    );
  }
}
