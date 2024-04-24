import {  Container, Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import * as React from 'react';

import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';


import { NavLink } from 'react-router-dom';
const navLinkStyle = ({isActive}) => {
    return{
      fontWeight:  'normal',
      textDecoration:  'none',
      color: 'gray',
      textAlign:'justify',
      marginRight:'30px',
      fontSize: '20px'
    }
  }

function Wix6() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary fixed-top" style={{ height: '90px' }}>
    <Container>
      <Navbar.Brand href="#home" style={{ fontSize: '35px', fontFamily:'Quicksand' }} >THE WILD KITCHEN</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">

      <Nav>
            <NavLink to="/" style={navLinkStyle}>Home</NavLink>            
            <NavLink to="Wix2" style={navLinkStyle}>Portfolio</NavLink>
            <NavLink to="Wix3" style={navLinkStyle}>About</NavLink>
            <NavLink to="Wix4" style={navLinkStyle}>Books</NavLink>
            <NavLink to="Wix5" style={navLinkStyle}>Blogs</NavLink>
            <NavLink to="Wix6" style={navLinkStyle}>Client Albums</NavLink>
            <NavLink to="Wix7" style={navLinkStyle}>Contact</NavLink>
          </Nav>
        
      </Navbar.Collapse>
    </Container>
  </Navbar>
  <h1 className="d-flex justify-content-center align-items-center" style={{margin:'4%', marginTop:'80px', fontSize: '50px', fontFamily:'Garamond', }}>CLIENT ALBUMS</h1>
  <br />
    <Container>
      <Row>
        <Col xs={4} md={4}>
          <div style={{ position: 'relative' }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMgPiLf1w5KPL25IZBRcVe51y_6tHTx--W7gjo4EtZqg&s" 
    alt="Your abc" style={{ width: '100%', height: '60vh',  filter: 'brightness(0.7) blur(1px)' }} />
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
              <h1 style={{margin:'2%', marginTop:'8%', fontSize: '40px', fontFamily:'Garamond' ,}}>GREEN EDITORIAL</h1>
              <p style={{fontFamily:'Monaco',  whiteSpace: 'nowrap'}}>Client: Herbal Magazine</p>
            </div>
          </div>
        </Col>

        <Col xs={4} md={4}>
          <div style={{ position: 'relative' }}>
            <img src="https://makeitdough.com/wp-content/uploads/2022/12/Basic-Sourdough-14-1.jpg" 
    alt="Your abc" style={{ width: '100%', height: '60vh',  filter: 'brightness(0.7) blur(1px)' }} />
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
              <h1 style={{margin:'2%', marginTop:'8%', fontSize: '40px', fontFamily:'Garamond',  }}>BREAD BAKING RECEPIES </h1>
              <p style={{fontFamily:'Monaco',  whiteSpace: 'nowrap'}}>Client: The Baker Blog</p>
            </div>
          </div>
        </Col>

        <Col xs={4} md={4}>
          <div style={{ position: 'relative' }}>
            <img src="https://www.baconismagic.ca/wp-content/uploads/2020/10/Filipino-friuits-12.jpg" 
    alt="Your abc" style={{ width: '100%', height: '60vh',  filter: 'brightness(0.7) blur(1px)' }} />
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
              <h1 style={{margin:'2%', marginTop:'8%', fontSize: '40px', fontFamily:'Garamond' }}>FRENCH COOKBOOK</h1>
              <p style={{fontFamily:'Monaco',  whiteSpace: 'nowrap'}}>Client: La Peche </p>
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
    <a style={{ color:'black', marginLeft: '5px' }} href='xyz'>Wix</a></p>


    </>
  );
}

export default Wix6;