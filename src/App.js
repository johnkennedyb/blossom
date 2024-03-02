import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './Footer';
import Services from './Services';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />

          {/* Define more routes here */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


