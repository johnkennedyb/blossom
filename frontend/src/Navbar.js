import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark text-white">
      <div className="container mx-5 ">
        <a className="navbar-brand text-white" href="/">MERN Stack Website</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
      </div>
      <div className="collapse navbar-collapse text-white mx-5" id="navbarNav">
          <ul className="navbar-nav ml-auto text-white">
            <li className="nav-item text-white">
              <a className="nav-link text-white" href="#">Home</a>
            </li>
            <li className="nav-item text-white">
              <a className="nav-link text-white" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Contact</a>
            </li>
          </ul>
        </div>
    </nav>
  );
}

export default Navbar;




