import React, { Component } from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import "../sytle/CustomNavbar.css";

export default class CustomNavbar extends Component {
  render() {
    return (
       < Navbar default collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <Image 
            src="asset/logo1.png"  
            roundedCircle
            className="logo"/>
          Software Engineering</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            <Nav.Link  href="/" to={"/#home"}>Home</Nav.Link>
            <Nav.Link eventKey={2} href="/about">
               About 
            </Nav.Link>
            <Nav.Link eventKey={2} href="/contact">
              Contact
            </Nav.Link>
            <Nav.Link eventKey={2} href="/service">
             Sevice
            </Nav.Link> 
            <Nav.Link eventKey={2} href="/mapSite">
              MapSite
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
