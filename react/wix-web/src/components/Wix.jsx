import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import RouterLink from './RouterLink';
const Wix=() => {
  return (
    <>
   <RouterLink/>
<br />
<br />
<br />
<Container>
      <Row>
        <Col>
          <div style={{ position: 'relative' }}>
            <div > 
              <img src="https://static.wixstatic.com/media/f61af8_97a68d95c3584eee8952b7b3184f5f80~mv2_d_6924_3840_s_4_2.jpg/v1/fill/w_1103,h_900,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_97a68d95c3584eee8952b7b3184f5f80~mv2_d_6924_3840_s_4_2.jpg" 
              alt="Your diff" style={{ width: '100%', height: '100%', filter: 'brightness(0.5)' }} />
            </div>            
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center', }}>
            <p style={{ fontSize: '70px', fontFamily: 'Sedan' }} className="text-5xl font-bold mb-4">THE ART OF FOOD</p>
                <p style={{fontSize:'30px'}}>P H O T O G R A P H Y </p>
                <Button variant="outline-light" style={{ borderRadius: '0', height: '45px', width: '150px', backgroundColor: 'transparent', color: 'white'}}>View More</Button>
              </div>
            </div>
          </Col>
        </Row>
        </Container>
        <br />
        <div className='d-flex justify-content-center align-items-center'>
          <PinterestIcon style={{ marginLeft: '20px' }} />
          <FacebookIcon style={{ marginLeft: '20px' }} />
          <TwitterIcon style={{ marginLeft: '20px' }} />
          <InstagramIcon style={{ marginLeft: '20px' }} />
        </div>
        <br />
        <p className='d-flex justify-content-center align-items-center'>&copy; {new Date().getFullYear()} By The Art of Food. Powered and secured by
          <a style={{ color: 'black', marginLeft: '5px' }} href='abc'>Wix</a>
        </p>
      </>
    );
}

export default Wix;
