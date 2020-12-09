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
                <li>Addis Ababa</li>
                 <li>Ethiopia</li>
                 <li>PO BOX xxx</li>
                 <li>Phone:+2519xxxxx</li>
                  <li> Email:contact@gmail.com</li>
                  <li></li>
                </ul>
              </Col>
              <Col md="4">
                <ul>
                  <li> <h1>Our Works</h1>
                  </li>
                  <li>About</li>
                  <li>service</li>
                  <li>Market</li>
                  <li>product </li>
                  <li>Call log</li>
                </ul>
              </Col>
              <Col md="3">
                <ul>
                  <li> <h3>Our Products</h3>
                  </li>
                  <li>About</li>
                  <li>service</li>
                  <li>Market</li>
                  <li>product </li>
                  <li>Call log</li>
                </ul>
              </Col>
              <Col md="1">
                <ul>
                  <li> <h4>Our Blogs</h4>
                  </li>
                  <li>About</li>
                  <li>service</li>
                  <li>Market</li>
                  <li>Call log</li>
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
