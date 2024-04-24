import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Digilog() {
  return (
    <body style={{ margin: 0, padding: 0, height: '93vh', backgroundColor: 'pink' }}>
      <Container>
        <Row className="content-center my-5">
          <Col xs={12} md={12}>
            <h1 className="text-center" style={{ marginTop: '50px' }}>Connect With Our Digital Marketing Experts</h1>
            <p className="text-center"> Lorem ipsum dolor sit amet consectetur adi3r2epojhg0rjphers loLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, harum nesciunt vitae similique odio eius magnam sequi </p>
            
            <Form className="p-4" style={{ marginTop:'80px', borderRadius:'7px', backgroundColor: 'white', paddingLeft:'10px', paddingRight:'10px', height:'37vh', width:'110vh', marginLeft:'40px'}} >
              <Row className="abc">
                <Col>
                  <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Form.Group>

                  <Form.Group controlId="phone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="tel" placeholder="Enter your phone number" />
                  </Form.Group>

                  <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>
                </Col>

                <Col xs={12} md={6}>
                  <Form.Group controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={8} placeholder="Your message here" />
                  </Form.Group>
                </Col>
              </Row>
              <Col xs={12} md={12} className="d-flex justify-content-center align-items-center">
                <Button variant="vvp" type="submit" className=" w-50" style={{ marginTop:'15px', borderRadius:'20px'}}>
                  Get Started
                </Button>
              </Col>
            </Form>
          </Col>
        </Row>
      </Container>
    </body>
  );
}

export default Digilog;
