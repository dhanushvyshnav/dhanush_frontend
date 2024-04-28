import {  Container, Row, Col } from 'react-bootstrap';

import * as React from 'react';
import Button from 'react-bootstrap/Button';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import RouterLink from './RouterLink';



function Wix2() {
  return (
    <>
  
  <RouterLink/>


    <h1 className="d-flex justify-content-center align-items-center" style={{margin:'4%', marginTop:'10%', fontSize: '50px', fontFamily:'Garamond', }}>PORTFOLIO</h1>
<Container>

      <Row>
        <Col xs={8} md={4}>
          <div style={{ position: 'relative',  }}>
            <img src="https://static.wixstatic.com/media/f61af8_2ef1fc57fdd849a19df076e8fb6e036f~mv2_d_2681_2546_s_4_2.jpg/v1/fill/w_367,h_869,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f61af8_2ef1fc57fdd849a19df076e8fb6e036f~mv2_d_2681_2546_s_4_2.jpghttps://static.wixstatic.com/media/f61af8_2ef1fc57fdd849a19df076e8fb6e036f~mv2_d_2681_2546_s_4_2.jpg/v1/fill/w_367,h_869,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f61af8_2ef1fc57fdd849a19df076e8fb6e036f~mv2_d_2681_2546_s_4_2.jpg" 
            alt="Your abc" style={{ width: '100%', height:'90vh', filter: 'brightness(0.6) blur(1px)'}} />
            <div style={{ position: 'absolute', top: '25%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
              <h1 style={{margin:'2%', marginTop:'8%', fontSize: '45px', fontFamily:'Garamond', }}>EDITORIAL</h1> <br />
              <Button variant="outline-light" style={{ borderRadius: '0', height: '45px', width: '100px', ':hover': { backgroundColor: 'black', color: 'white' }}}>View</Button>
            </div>
          </div>
        </Col>

        <Col xs={8} md={4}>
  <div style={{ position: 'relative' }}>
    <img src="https://images.squarespace-cdn.com/content/v1/611bc387b63b0f6f4d8644a0/0b76b58c-d028-4e63-89a8-728972baf71b/Fresh+Homemade+Spaghetti+with+Pork+and+Beed+Meatballs+and+Shaved+Parmesan+Cheese.jpg" 
    alt="Your abc" style={{ width: '100%', height: '90vh',  filter: 'brightness(0.7) blur(1px)' }} />
    <div style={{ position: 'absolute', top: '25%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
      <h1 style={{ fontSize: '45px', fontFamily: 'Garamond', whiteSpace: 'nowrap', marginTop:'2%' }}>FOOD & SERVE</h1> <br />
              <Button variant="outline-light" style={{ borderRadius: '0', height: '45px', width: '100px', ':hover': { backgroundColor: 'black', color: 'white' }}}>View</Button>
            </div>
          </div>
         </Col>

        <Col xs={8} md={4}>
          <div style={{ position: 'relative' }}>
            <img src="https://hips.hearstapps.com/hmg-prod/images/crepes-1640022818.jpeg?crop=0.445xw:1.00xh;0.366xw,0&resize=980:*" 
            alt="Your abc" style={{ width: '100%', height:'90vh', filter: 'brightness(0.5) blur(1px)'}} />
            <div style={{ position: 'absolute', top: '25%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
            <h1 style={{ fontSize: '45px', fontFamily: 'Garamond', whiteSpace: 'nowrap', marginTop:'2%' }}>BAKED GOODS</h1> <br />
            <Button variant="outline-light" style={{ borderRadius: '0', height: '45px', width: '100px', ':hover': { backgroundColor: 'black', color: 'white' }}}>View</Button>
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
    </div>
<br />
    <p className='d-flex justify-content-center align-items-center'>&copy; {new Date().getFullYear(2035)} By The Art of Food. Powered and secured by 
    <a style={{ color:'black', marginLeft: '5px' }} href='xyz'>Wix</a></p>


    </>
  );
}

export default Wix2;