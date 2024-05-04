import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button, Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function CheckPortfolio() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" style={{ boxShadow: '0 6px 6px rgba(0, 0, 0, 0.1)' }}>
      {/* <Nav className="me-auto"></Nav> */}

        <Navbar.Brand href="#home" style={{ marginLeft: '10%' }}>Bizland.</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        
          <Nav className="me-auto"></Nav>
          
          <Nav style={{ marginRight: '20%' }}>
            <Nav.Link href="#deets">Home</Nav.Link>            
            <Nav.Link href="#deets">About</Nav.Link>
            <Nav.Link href="#deets">Service</Nav.Link>
            <Nav.Link href="#deets">Portfolio</Nav.Link>
            <Nav.Link href="#deets">Team</Nav.Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#deets">Contact</Nav.Link>

          </Nav>
        </Navbar.Collapse>
    </Navbar>
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '15vh' }}>
      <Button variant="info" style={{ backgroundColor: '#a8dadc', color: '#007bff', height: '30px', width: '80px' }} size="sm">
       <b>Portfolio</b>
      </Button>
      <br/>
    </Container>
    <h1 className="d-flex justify-content-center align-items-center" style={{ height: '5vh' }}>Check Our  <a style={{ textDecoration: 'none', marginLeft: '5px' }} href="#deets">Portfolio</a></h1>

    <p className="d-flex justify-content-center align-items-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque cupiditate quis facilis excepturi praesentium, nemo maiores nihil eos dolore natus? Ipsam aperiam cupidita</p>

    <h5 className="d-flex justify-content-center align-items-center" style={{ height: '10vh', marginRight: '40px' }}>ALL<h5 style={{ marginLeft: '40px' }}>APP</h5><h5 style={{ marginLeft: '40px' }}>CARD</h5><h5 style={{ marginLeft: '40px' }}>WEB</h5></h5>
    
    <Container>
      <Row>
        <Col xs={8} md={4}>
          <Image src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201611/dulquer_647_110316023721.jpg?VersionId=1oZwBNg30mwHoRvmT1I07g0U01ol3gau" rounded  
          alt="Description of image" height="250px" width="400px"/>
        </Col>
        
        <Col xs={6} md={4}>
          <Image src="https://www.adorama.com/alc/wp-content/uploads/2018/11/shutterstock_1167126355.jpg" rounded
          alt="Description of image" height="250px" width="400px" />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://www.hindustantimes.com/ht-img/img/2023/03/24/1600x900/robert-lukeman-zNN6ubHmruI-unsplash_1679659189331_1679659234951_1679659234951.jpg" rounded 
          alt="Description of image" height="250px" width="400px" /> 
        </Col>
        {/* <Col xs={6} md={3}>
          <Image src="holder.js/171x180" rounded />
        </Col> */}
      </Row>
    </Container>
  
    </>
    
  );
}

export default CheckPortfolio;