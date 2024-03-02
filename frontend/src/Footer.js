import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="footer bg-dark bg-ash">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            {/* Column 1 Content */}
                            <h4>Contact Us</h4>
                            <p>Address: 123 Main St, City, Country</p>
                            <p>Email: info@example.com</p>
                            <p>Phone: +123 456 7890</p>
                        </div>
                        <div className="col-md-4">
                            {/* Column 2 Content */}
                            <h4>Website Information</h4>
                            <ul className="list-unstyled">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            {/* Column 3 Content */}
                            <h4>Connect With Us</h4>
                            <ul className="list-unstyled">
                                <li><a href="#"><i className="fab fa-facebook"></i> Facebook</a></li>
                                <li><a href="#"><i className="fab fa-twitter"></i> Twitter</a></li>
                                <li><a href="#"><i className="fab fa-instagram"></i> Instagram</a></li>
                                {/* Add more social icons as needed */}
                            </ul>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-12 text-center">
                            {/* Logo */}
                            <img src="logo.png" alt="Logo" className="img-fluid" style={{ maxHeight: '50px' }} />
                        </div>
                    </div>
                </div>
                <div className="container text-dark ">
                    <p>&copy; 2024 Your Website. All Rights Reserved.</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;
