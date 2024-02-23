import React from 'react';

const Contact = () => {
    return (

<div className="container-fluid p-0 mb-5">
                <div className="row">
                    <div className="col-md-12  position-relative bg-dark text-white py-5" style={{backgroundImage: `url('https://images.pexels.com/photos/7356/startup-photos-7356.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`, backgroundSize: 'cover', backgroundPosition: 'center' ,zIndex: 1}}>
                        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50" style={{ zIndex: -1 }}></div>
                        <div className="text-left py-5 px-5">
                            <h1 className='text-white pt-5 pb-3' style={{ zIndex: 100 }}>Contact</h1>
                            
                        </div>
                    </div>
                </div>
                <div className='container my-5'>
                <h1 className='text-dark' >Contact Us</h1>
                <div className="row justify-content-center">
        <div className="col-lg-6">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
                </div>
           
        </div>
    );
}

export default Contact;
