
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Wix from './components/Wix';
//import Portfolio from './components/Portfolio';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import Wix2 from './components/Wix2';
import Wix3 from './components/Wix3';
import Wix4 from './components/Wix4';
import Wix5 from './components/Wix5';
import Wix6 from './components/Wix6';
import Wix7 from './components/Wix7';
function App() {
  //let name="john";
  return (

    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Wix/>}></Route>
      <Route path='/Wix2' element={<Wix2/>}>
      </Route>
      <Route path='/Wix3' element={<Wix3/>}></Route>
      <Route path='/Wix4' element={<Wix4/>}></Route>
      <Route path='/Wix5' element={<Wix5/>}></Route>
      <Route path='/Wix6' element={<Wix6/>}></Route>
      <Route path='/Wix7' element={<Wix7/>}></Route>
    </Routes>
    </BrowserRouter>
);}


export default App;
