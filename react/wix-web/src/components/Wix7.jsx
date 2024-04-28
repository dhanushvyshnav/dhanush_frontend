import {  Container, Row, Col, Form } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import * as React from 'react';
import Button from 'react-bootstrap/Button';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import RouterLink from './RouterLink';




function Wix7() {
  return (
    <>
    <RouterLink/>


    <Container style={{ backgroundColor: '#F0F0F0', height: '140vh', width: '100vw'}}>
      <Row>
        <Col xs={6} md={6}>
          <div style={{ position: 'relative' }}>
            <img src="https://static.wixstatic.com/media/f61af8_bed971a2eea0451d8a185669c2cbe5c7~mv2.jpg/v1/fill/w_562,h_1118,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_bed971a2eea0451d8a185669c2cbe5c7~mv2.jpg" 
            alt="Your img" style={{ width: '100%', height:'140vh'}} />
           
          </div>
        </Col>

        <Col xs={6} md={6}>
          <div style={{ position: 'relative' }}>
          <div style={{ position: 'relative', top: '80%',paddingTop:'200px' }}>
          <h1 className="d-flex justify-content-center align-items-center" style={{margin:'4%', marginTop:'7%', fontSize: '50px', fontFamily:'Garamond', textAlign:'left' }}>GET IN TOUCH</h1>
             <p>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
             <p>Tel: 123-456-7890  |  Email: mailto:info@mysite.com</p>

             <Form style={{ marginTop: '80px', paddingLeft: '50px', paddingRight: '10px', height: '40vh' }}>
  <Col>
    <Form.Group className="mb-3" controlId="name">
      <Form.Label>First Name *</Form.Label>
      <Form.Control type="text" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="phone">
      <Form.Label>Last name *</Form.Label>
      <Form.Control type="tel" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="email">
      <Form.Label>Email *</Form.Label>
      <Form.Control type="email" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="sub">
      <Form.Label>Subject *</Form.Label>
      <Form.Control type="text" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="message">
      <Form.Label>Message *</Form.Label>
      <Form.Control as="textarea" rows={4} />
    </Form.Group>

    <Button variant="outline-light" style={{ borderRadius: '0', height: '40px', width: '130px',backgroundColor: 'darkslategray', color: 'white', marginLeft:'73%' }}>View</Button>

    <br /> <br />
    <p>Stay Up-To-Date with New Posts</p>
            <div className='d-flex'>
            <Form.Group  controlId="email">
                  <Form.Label>Email *</Form.Label>
                  <Form.Control type="email" style={{width:'300px'}}/>
                </Form.Group>

                <Button style={{ borderRadius: '0', height: '40px', width: '100px',backgroundColor: 'darkslategray', color: 'white', marginLeft:'10px', marginTop:'30px'}} type="submit" className=" w-50" >
              Subscrib Now
            </Button>
            </div>

  </Col>
</Form>
          </div>
          </div>
        </Col>
      </Row>
    </Container>
<br />

    <div className='d-flex justify-content-center align-items-center'>
    <PinterestIcon style={{  marginLeft: '20px' }}></PinterestIcon>
    <FacebookIcon style={{  marginLeft: '20px' }}></FacebookIcon>
    <TwitterIcon style={{  marginLeft: '20px' }}></TwitterIcon>
    <InstagramIcon style={{  marginLeft: '20px' }}></InstagramIcon>
    </div> <br />

    <p className='d-flex justify-content-center align-items-center'>&copy; {new Date().getFullYear(2035)} By The Art of Food. Powered and secured by 
    <a style={{ color:'black', marginLeft: '5px' }} href='ph'>Wix</a></p>

    </>
  );
}

export default Wix7;