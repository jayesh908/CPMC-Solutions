import Head from './Head.js';
import Cim from './Cim.js';
import Mission from './Mision.js';
import Contact from './Contact.js';
import Foot from './Foot.js';
import './App.css';
import { BrowserRouter as Router,Routes,Route, BrowserRouter } from 'react-router-dom';
import Home from './HR/home/Home.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Construct from './construction/link/Construct.js'


function App() {
  return (
    <>
    <Router> 
      <Routes>
        <Route path='/page' element={<Home />}></Route>
        <Route path='/page' element={<Construct />}></Route>
      </Routes>
       <Head />
      <Cim />
      <Mission />
      
      <Contact />
      <Foot />

      </Router>  

    </>
  );
}

export default App;
