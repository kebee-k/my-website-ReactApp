import React, { Component } from "react";
import { Jumbotron, Card, Container, Row, Col, Image } from "react-bootstrap";

export default class Service extends Component {
  render() {
    return (
      <div>
       { /* <Image src="asset/mountain-man.jpg" className="header-image" />*/}
        <Container>
          <h2>Our Service</h2> {"  "}
          <Row>
            <Col xs={12} sm={8} className="main-section">
              <Jumbotron className="bind">
                <div>
                  <div className="btn">
                    <a href="#endregion">
                      {" "}
                      <h4> Our Service</h4>
                    </a>
                  </div>
                  <p>
                    Consultancy, Design, Planning and Procurement, Engineering,
                    Installation, Testing and commissioning, quality control,
                    project implementation and supervision, operation and
                    maintenance, Network Management System development and
                    support, Training and Managerial support.
                  </p>
                </div>
              </Jumbotron>
              <h3> Our activities in the above industries include:</h3>
              <p>
                Consultancy, Design, Planning and Procurement, Engineering,
                Installation, Testing and commissioning, quality control,
                project implementation and supervision, operation and
                maintenance, Network Management System development and support,
                Training and Managerial support.
              </p>
              <p>
                Through a long-term commitment to this mission, we will be known
                as a company that provides quality products and services. Our
                customers, vendors, and employees see Moti Engineering as
                offering the best technology transfer and knowledge.
              </p>
              <p>
                News Feed: Since we have support services for the installed base
                NCR ATMs with our stationed Technical Support Staff, we are also
                to introduce online ATM Support Service Call Log System soon.
              </p>
            </Col>
            <Col xs={12} sm={4} className="sidebar-section">
              <Image src="asset/service.jpg" />
            </Col>
          </Row>
          <hr></hr>
          <Row>
            <Col>
              <Card bg="primary" text="white" style={{ width: "18rem" }}>
                <Card.Header>Planning and Procurement </Card.Header>
                <Card.Body>
                  <Card.Title>Goal of Planning and Procurement </Card.Title>
                  <Card.Text>
                    The ultimate goal of procurement planning is coordinated and
                    integrated action to fulfil a need for goods, services or
                    works in a timely manner and at a reasonable cost. Early and
                    accurate planning is essential to avoid last minute,
                    emergency or ill-planned procurement, which is contrary to
                    open, efficient and effective – and consequently transparent
                    – procurement.
                  </Card.Text>
                  <Card.Footer>footer</Card.Footer>
                </Card.Body>
              </Card>
              <br />
            </Col>
            <Col>
              <Card bg="danger" text="white" style={{ width: "18rem" }}>
                <Card.Header>
                  project implementation and supervision
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    Project supervision covers monitoring, evaluative review,
                    reporting, and technical assistance activities to:
                    <ul>
                      <li></li>
                    </ul>
                    (a) ascertain whether the borrower is carrying out the
                    project with due diligence to achieve its development
                    objectives in conformity with the legal agreements;<br></br>
                    (b) identify problems promptly as they arise during
                    implementation and recommend to the borrower ways to resolve
                    them;<br></br>
                    (c) recommend changes in project concept or design, as
                    appropriate, as the project evolves or circumstances change;
                    (d) prepare the Bank’s Implementation Completion Report to
                    account for the use of Bank resources, and to draw lessons
                    to improve the design of future projects, sector and country
                    strategies, and policies
                  </Card.Text>
                </Card.Body>
              </Card>
              <br />
            </Col>
            <Col>
              <Card bg="success" text="white" style={{ width: "18rem" }}>
                <Card.Header>
                  Engineering, Testing and commissioning
                </Card.Header>
                <Card.Title>
                  Engineering,Installation, Testing and Commissioning
                </Card.Title>
                <Card.Body>
                  <Card.Text>
                    . Design specifications - Mechanical and Electrical<br></br>
                    . Requirements of the validation process Safety department
                    <br></br>. policy statements Tender documentation ICT
                    Network standards<br></br>. Estate Facilities requirements
                    Building Engineering services<br></br>
                    particularly requirements .Review project and delivery to
                    date. .Identification of areas where delivery worked well
                    and where it did not.
                  </Card.Text>
                </Card.Body>
                <Card.Footer> testing & commissioning</Card.Footer>
              </Card>
              <br />
            </Col>
          </Row>
          <Row>
            <Col>
              <Card bg="warning" style={{ width: "18rem" }}>
                <Card.Header>Consultancy</Card.Header>
                <Card.Body>
                  <Card.Title> our Consultancy</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <br />
            </Col>
            <Col>
              <Card bg="warning" style={{ width: "18rem" }}>
                <Card.Header>Training and Managerial support.</Card.Header>
                <Card.Body>
                  <Card.Title>Training and Managerial support. </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <br />
            </Col>
            <Col>
              <Card bg="warning" style={{ width: "18rem" }}>
                <Card.Header>Network Management System</Card.Header>
                <Card.Body>
                  <Card.Title>Network Management System</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <br />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
