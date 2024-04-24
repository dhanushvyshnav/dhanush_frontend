import {  Container, Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import * as React from 'react';
import Button from 'react-bootstrap/Button';


import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { grey, red } from '@mui/material/colors';

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

function Wix5() {
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


  <h1 className="d-flex justify-content-center align-items-center" style={{margin:'4%', marginTop:'80px', fontSize: '50px', fontFamily:'Garamond', }}>BLOGS</h1>
  <br />
  
  <Container style={{ backgroundColor: '#DCDCDC', width: '100vw'}}>
  <Row>
    <Col xs={6} md={6}>
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '50vh' }}>
        <img src="https://static.wixstatic.com/media/495dbf5ead054840a9b405f5b8e55af3.jpg/v1/fill/w_514,h_386,fp_0.50_0.50,q_90,enc_auto/495dbf5ead054840a9b405f5b8e55af3.jpg" alt="Your abc" style={{ width: '80%', maxHeight: '100%' }} />
      </div>
    </Col>

    <Col xs={6} md={6} style={{ maxWidth: '500px', margin: '0 auto' }}>
  <Card sx={{ width: '100%', height: '350px', marginTop: '60px' }}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: grey[500] }} aria-label="recipe">
          
        </Avatar>
      }
      title="Admin"
      subheader="May 23, 2023 . 1 min"/>
    <CardContent>
      <h6>The holiday special</h6>
      <Typography variant="body2" color="text.secondary">
        Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....
      </Typography>
    </CardContent>
    <hr />
    <CardActions disableSpacing>
    </CardActions>
  </Card>
</Col>
  </Row>

</Container>



    <Container style={{ backgroundColor: '#DCDCDC', height: '50vh', width: '100vw'}}>
      <Row>
      <Col xs={6} md={6}>
          <div style={{ position: 'relative' }}>
            <img src="https://static.wixstatic.com/media/cd1da2d221ec4d71af4e3ed305010c7c.jpg/v1/fill/w_514,h_386,fp_0.50_0.50,q_90,enc_auto/cd1da2d221ec4d71af4e3ed305010c7c.jpg" alt="Your abc" style={{ width: '50%', height:'30vh'}} />
          </div>
        </Col>
        <Col xs={6} md={6}>
            <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            
          </Avatar>
        }
        
        title="Admin"
        subheader="May 23, 2023 . 1 min"
      />
     
      <CardContent>
        <h6>Simple backdrops for food shots</h6>
        <Typography variant="body2" color="text.secondary">
        Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....
        </Typography>
      </CardContent>
      <hr />
      <CardActions disableSpacing>
      </CardActions>
    </Card>
        </Col>
      </Row>
    </Container>

    <Container style={{ backgroundColor: '#DCDCDC', height: '50vh', width: '100vw'}}>
      <Row>

      <Col xs={6} md={6}>
          <div style={{ position: 'relative' }}>
            <img src="https://static.wixstatic.com/media/ce9814ce9f304fd6a9ae1bb862863c81.jpg/v1/fill/w_514,h_386,fp_0.50_0.50,q_90,enc_auto/ce9814ce9f304fd6a9ae1bb862863c81.jpg" alt="Your abc" style={{ width: '50%', height:'30vh'}} />
           
          </div>
        </Col>
        <Col xs={6} md={6}>
            <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            
          </Avatar>
        }
        
        title="Admin"
        subheader="May 23, 2023 . 1 min"
      />
   
      <CardContent>
        <h6>Before the drip</h6>
        <Typography variant="body2" color="text.secondary">
        Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....
        </Typography>
      </CardContent>
      <hr />
      <CardActions disableSpacing>
      </CardActions>
    </Card>   
        </Col>

      </Row>
    </Container>
    

    <Container style={{ backgroundColor: '#DCDCDC', height: '50vh', width: '100vw'}}>
      <Row>

      <Col xs={6} md={6}>
          <div style={{ position: 'relative' }}>
            <img src="https://static.wixstatic.com/media/57a7b875930547cdb003bc37b6713574.jpg/v1/fill/w_514,h_386,fp_0.50_0.50,q_90,enc_auto/57a7b875930547cdb003bc37b6713574.jpg" alt="Your abc" style={{ width: '50%', height:'30vh'}} />
            </div>
            </Col>

            <Col xs={6} md={6}>
            <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            
          </Avatar>
        }
        
        title="Admin"
        subheader="May 23, 2023 . 1 min"
      />
    
      <CardContent>
        <h6>Styling your shots</h6>
        <Typography variant="body2" color="text.secondary">
        Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....
        </Typography>
      </CardContent>
      <hr />
      <CardActions disableSpacing>
     
        
      </CardActions>
    </Card>
          
       
          
        </Col>

      </Row>
    </Container>


    <Container style={{ backgroundColor: '#DCDCDC', height: '50vh', width: '100vw'}}>
      <Row>

      <Col xs={6} md={6}>
          <div style={{ position: 'relative' }}>
            <img src="https://static.wixstatic.com/media/9e01dfb9a15749e482e69dbc82886703.jpg/v1/fill/w_514,h_386,fp_0.50_0.50,q_90,enc_auto/9e01dfb9a15749e482e69dbc82886703.jpg" alt="Your abc" style={{ width: '50%', height:'30vh'}} />
           
          </div>
        </Col>
        <Col xs={6} md={6}>
            <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            
          </Avatar>
        }
        
        title="Admin"
        subheader="May 23, 2023 . 1 min"
      />
    
      <CardContent>
        <h6>The perfect sizzle</h6>
        <Typography variant="body2" color="text.secondary">
        Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....
        </Typography>
      </CardContent>
      <hr />
      <CardActions disableSpacing>
     
        
      </CardActions>
    </Card>
          
       
          
        </Col>

      </Row>
    </Container>


    <Container style={{ backgroundColor: '#DCDCDC', height: '50vh', width: '100vw'}}>
      <Row>

      <Col xs={6} md={6}>
          <div style={{ position: 'relative' }}>
            <img src="https://static.wixstatic.com/media/c4f7ff68441b408eb753f40e1ba38756.jpg/v1/fill/w_514,h_386,fp_0.50_0.50,q_90,enc_auto/c4f7ff68441b408eb753f40e1ba38756.jpg" alt="Your abc" style={{ width: '50%', height:'30vh'}} />
           
          </div>
        </Col>
        <Col xs={6} md={6}>
            <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            
          </Avatar>
        }
        
        title="Admin"
        subheader="May 23, 2023 . 1 min"
      />
     
      <CardContent>
        <h6>Eating with your eyes first</h6>
        <Typography variant="body2" color="text.secondary">
        Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....
        </Typography>
        <hr />
      </CardContent>
      <CardActions disableSpacing>
     
        
      </CardActions>
    </Card>
          
       
          
        </Col>

      </Row>
    </Container>




    <div className='d-flex justify-content-center align-items-center'>
    <PinterestIcon style={{  marginLeft: '20px' }}></PinterestIcon>
    <FacebookIcon style={{  marginLeft: '20px' }}></FacebookIcon>
    <TwitterIcon style={{  marginLeft: '20px' }}></TwitterIcon>
    <InstagramIcon style={{  marginLeft: '20px' }}></InstagramIcon>
    </div>

    <p className='d-flex justify-content-center align-items-center'>&copy; {new Date().getFullYear(2035)} By The Art of Food. Powered and secured by 
    <a style={{ color:'black', marginLeft: '5px' }} href='nbn'>Wix</a></p>

    </>
  );
}

export default Wix5



