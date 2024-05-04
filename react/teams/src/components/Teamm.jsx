import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import * as React from 'react';
import  Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
function Teamm() {
  return (
    <>
    <div>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" style={{ boxShadow: '0 6px 6px rgba(0, 0, 0, 0.1)' }}>
      <Container>
        <Navbar.Brand href="#home"><b>BizLand.</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#deets">Home</Nav.Link>            
            <Nav.Link href="#deets">About</Nav.Link>
            <Nav.Link href="#deets">Service</Nav.Link>
            <Nav.Link href="#deets">Portfolio</Nav.Link>
            <Nav.Link href="#"><a href='tt'>Team</a></Nav.Link>

            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">CEO</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Product Owner</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">CTO</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Accountant</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#deets">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    <div>
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '140px' }}>
      <Button variant="info" style={{ backgroundColor: 'lightblue', color: '#007bff', height: '30px', width: '80px' }} size="sm">
       <b>TEAM</b>
      </Button>
    </Container>
    <h1 className="d-flex justify-content-center align-items-center">Our hardWorking  <a style={{ textDecoration: 'none', marginLeft: '5px' }} href="xyz"><b>Team</b></a></h1>
    <p className="d-flex justify-content-center align-items-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque cupiditate quis facilis excepturi praesentium,</p>
    <p className="d-flex justify-content-center align-items-center">nemo maiores nihil eos dolore natus? Ipsam aperiam cupidita</p>
    </div>
    <div>
    <Container>
      <Row>
        <Col xs={3} md={3}>
    <Card style={{ boxShadow: '0 5px 8px 0 rgba(0,0,0,0.2)' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTyRknfdWFhfvh8J9AZ-OcBapkuP0tkAHLl3p1FDq6ig&s" 
                      style={{ height: '350px', width: '304px'}}/>
        <Card.Body>
        <Card.Title>Walter White</Card.Title>
        <Card.Text>
          Chief Executive Officer
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col xs={3} md={3}>
    <Card style={{ boxShadow: '0 5px 8px 0 rgba(0,0,0,0.2)' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6BxknSntgmlklhjad3FNM6AFWI-H-YOrxIP4_Mey2Wg&s"
                      style={{ height: '350px', width: '305px'}}/>        
        <Card.Body>
        <Card.Title>Sara Jhonson</Card.Title>
        <Card.Text>
         Poduct manager
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col xs={3} md={3}>
    <Card style={{ boxShadow: '0 5px 8px 0 rgba(0,0,0,0.2)' }}>
      <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Andrew_Tate_on_%27Anything_Goes_With_James_English%27_in_2021.jpg/640px-Andrew_Tate_on_%27Anything_Goes_With_James_English%27_in_2021.jpg" 
                      style={{ height: '350px', width: '304px'}}/>
          <Card.Body>
        <Card.Title> Andrew Tate</Card.Title>
        <Card.Text>
         CTO
        </Card.Text> 
      </Card.Body>
    </Card>
    </Col>
    <Col xs={3} md={3}>
    <Card style={{ boxShadow: '0 5px 8px 0 rgba(0,0,0,0.2)' }}>
      <Card.Img variant="top" src="https://miro.medium.com/v2/resize:fit:540/1*pjEiqZqQNlAb-KWL5MdNmA.jpeg" 
                      style={{ height: '350px', width: '304px'}}/>
      <Card.Body>
        <Card.Title>Ranveer Allahbadia</Card.Title>
        <Card.Text>
          Accountant
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
</Row>
<br /><br />
</Container>
    </div>
    </>
    
  );
}

export default Teamm;