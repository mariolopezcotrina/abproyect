import React from "react";
import './App.css';
import './components/css/style.css';


import 'bootstrap/dist/css/bootstrap.min.css' ;

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Services from "./components/pages/Services";
import Navbar from "./components/inc/Navbar";
import Slider from "./components/inc/Slider";
import Footer from "./components/inc/Footer";
import Copy from "./components/inc/Copy";
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Slider/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer/>
        <Copy/>

      </div>
    </Router>
  );
}

export default App;
