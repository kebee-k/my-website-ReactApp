import React, { Component } from 'react'
import {Row,Col, Container} from 'react-bootstrap'
import '../sytle/background.css'

export default class Background extends Component {
    render() {
        return (
            <div className="background-image">
            <div className="font-image">
             <Container>
              <hr />
              <div className="box">
                <Row>
                  <Col md="6">
                    <ul>
                      <li>
                        {" "}
                        <h1>Support  Solution<strong style={{color:'red'}}>In</strong> </h1>
                      </li>
                      <li>software solution</li>
                      <li>software implementation </li>
                      <li>design </li>
                    </ul>
                  </Col>
                  <Col md="6">
                  <ul>
                  <li> <h1>Providing Solution<strong style={{color:'red'}}>On</strong></h1>
                  </li>
                  <li>software developer</li>
                  <li>software update</li>
                  <li>software Providing</li>
                  <li>server side issue </li>
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
