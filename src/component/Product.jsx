import React, { Component } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
 class Product extends Component {
   constructor(){
     super()
     this.state={
       showMe:false
     }
   }
   operation(){
     this.setState({
       showMe:!this.state.showMe
     })
   }

  render() {
    return (
      <div>
        <a href="#moti-products.html">
          <h1> Partners and Products</h1>
        </a>
        <Row md="12">
          <Col md="3">
            <div className="product">
              <Image
                src="asset/atmAbout.jpg"
                className="about-profile-pic"
                roundedCircle
              />
              <Button className='btn btn-warning' onClick={()=>this.operation()} >
              <h3>Details</h3>
              </Button>
              <div>
                {
                  this.state.showMe ?
                  <ul style={{ color: "black" }}>
                <li style={{ listStyle: "cjk-ideographic" }}>
                  NCR Products
                  <ul style={{ color: "black" }}>
                    <li>ATM and consumable products.</li>
                  </ul>
                </li>
              </ul>
              :null
              
                }
             
              </div>
            </div>
          </Col>
          <Col md="6">
            <h3>Details</h3>
            <div>
              <ul style={{ color: "black" }}>
                <li style={{ listStyle: "cjk-ideographic" }}>
                  NCR Products
                  <ul style={{ color: "black" }}>
                    <li>ATM and consumable products.</li>
                  </ul>
                </li>
                <li>
                  Cisco Products
                  <ul style={{ color: "black" }}>
                    <li style={{ listStyle: "circle" }}>
                      Switches and Routers... etc
                    </li>
                  </ul>
                </li>
                <li>
                  IBM Products
                  <ul style={{ color: "black" }}>
                    <li>Servers, Storage,Tape Liabrary... etc</li>
                  </ul>
                </li>
              </ul>
            </div>
          </Col>
          <Col md="3">
            <div className="product">
              <Image
                src="asset/atmAbout.jpg"
                className="about-profile-pic"
                roundedCircle
              />
              <Button className='btn btn-warning' onClick={()=>this.operation()} >
              <h3>Details</h3>
              </Button>
              <div>
                {
                  this.state.showMe ?
                  <ul style={{ color: "black" }}>
                <li style={{ listStyle: "cjk-ideographic" }}>
                  NCR Products
                  <ul style={{ color: "black" }}>
                    <li>ATM and consumable products.</li>
                  </ul>
                </li>
              </ul>
              :null
              
                }
             
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Product;