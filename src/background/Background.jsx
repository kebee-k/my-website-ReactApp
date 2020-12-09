import React, { Component } from 'react'
import {Row,Col, Container} from 'react-bootstrap'
import '../sytle/background.css'

export default class Background extends Component {
    render() {
        return (
            <div className="background-image">
            <div className="font-image">
             <Container>
                
              <h1>The Bank Automation and It Solution</h1>
              <hr />
              <div className="box">
                <Row>
                  <Col md="6">
                    <ul>
                      <li>
                        {" "}
                        <h1>Support on it Solution</h1>
                      </li>
                      <li>software solution</li>
                      <li>Hardware solution </li>
                      <li>E-payment </li>
                    </ul>
                  </Col>
                  <Col md="6">
                  <ul>
                  <li> <h1>Providing Solution</h1>
                  </li>
                  <li>ATM</li>
                  <li>POS</li>
                  <li>CISCO</li>
                  <li>SERVER </li>
                  <li>...NCR..</li>
                </ul>
                  </Col>
                </Row>
              </div>
             </Container>
            </div>
          </div>
        )
    }
}
