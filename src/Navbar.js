import React from 'react';

const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-light " style={{ backgroundColor: "#1a0dad",  zIndex: "20" }}>
      <div className="container mx-5 ">
        <a className="navbar-brand text-white" href="/">MERN Stack Website</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
      </div>
      <div className="collapse navbar-collapse text-dark mx-5" id="navbarNav">
          <ul className="navbar-nav ml-auto text-dark">
            <li className="nav-item mx-2 text-dark">
              <a className="nav-link text-white" href="/">Home</a>
            </li>
            <li className="nav-item mx-2 text-white">
              <a className="nav-link text-white" href="/about">About</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link text-white" href="/services">Services</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link text-white" href="/contact">Contact</a>
            </li>
          </ul>
        </div>
    </nav>
  );
}

export default Navbar;




