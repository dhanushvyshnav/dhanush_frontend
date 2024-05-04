import {  Container, Row, Col } from 'react-bootstrap';
import * as React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import RouterLink from './RouterLink';

function Wix3() {
  return (
    <>
 <RouterLink/>
<br />
<br />
<br />

    <Container style={{ backgroundColor: '#F0F0F0', height:'140vh', width:'200vh'}}>
      <Row>
        <Col xs={9} md={6}>
          <br /> <br />
          <img src="https://assets-global.website-files.com/5fc8b9cce856d2881fb9dd2a/65032fe941ac15b0c054465b_Perfect.jpg" alt="Your abc" style={{ width: '100%', height: '130vh' }} />           
        </Col>

        <Col xs={6} md={6} className="d-flex justify-content-center">
  <div style={{ textAlign: 'center', maxWidth: '80%' }}>
    <h1 style={{ marginTop:'28%', marginBottom:'-10%', fontSize: '50px', fontFamily: 'Garamond', textAlign:'left', padding: '40px' }}>ABOUT ALEX</h1>
    <p style={{padding: '40px', textAlign: 'left', fontSize:'19px', fontFamily:'Times New Roman' }}>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page.</p>
    <p style={{padding: '40px', textAlign: 'left', marginTop:'-15%', fontSize:'19px', fontFamily:'Times New Roman'}}>This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company.</p>

    <h6 style={{ fontSize:'30px', marginBottom:'25px', marginTop:'-50px',fontFamily: 'Garamond', textAlign:'left', padding: '40px' }}>Education:</h6>
    <p style={{ padding: '40px', textAlign: 'left', marginTop:'-20%', fontSize:'19px', fontFamily:'Times New Roman'}}>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>

    <h6 style={{ fontSize:'30px', marginBottom:'25px', marginTop:'-50px',fontFamily: 'Garamond', textAlign:'left', padding: '40px' }}>Awards & Nominations:</h6>
    <p style={{ padding: '40px', textAlign: 'left', marginTop:'-20%', fontSize:'19px', fontFamily:'Times New Roman'}}>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
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

export default Wix3