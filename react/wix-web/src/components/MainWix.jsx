import React from 'react'
import {Route, BrowserRouter, Routes } from "react-router-dom";
import Wix from './Wix';
import Wix2 from './Wix2';
import Wix3 from './Wix3';
import Wix4 from './Wix4';
import Wix5 from './Wix5';
import Wix6 from './Wix6';
import Wix7 from './Wix7';
const MainWix = () => {
    return (
      <>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Wix/>}/>
          <Route path="About" element={<Wix3/>}/>
          <Route path="Portfolio" element={<Wix2/>}/>
          <Route path="Books" element={<Wix4/>}/>
          <Route path="ClientAlbmuns" element={<Wix6/>}/>
          <Route path="Blogs" element={<Wix5/>}/>
          <Route path="Contact" element={<Wix7/>}/>
          
      </Routes>
      </BrowserRouter>
      </>
    );
  }
export default MainWix;