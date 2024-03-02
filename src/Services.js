import React from 'react';

const Services = () => {
    return (
        <div>
            <div className="container-fluid p-0 mb-5" >
                <div className="row " >
                    <div className="col-md-12  position-relative bg-dark text-white py-5" style={{backgroundImage: `url('https://images.pexels.com/photos/1181360/pexels-photo-1181360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`, backgroundSize: 'cover', backgroundPosition: 'center' ,zIndex: 1, }}>
                    <div className="position-absolute top-0 start-0 w-100 h-100 opacity-50" style={{ zIndex: -1, backgroundColor: "#1a0dad" }}></div>

                        <div className="text-left py-5 px-5" style={{ height: 350  }}>
                        <h1 className='text-white py-5 pb-3' style={{ zIndex: 100,  }}>Services</h1>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-5">
                
                <h1 className="text-center mb-5">Our Services</h1>

      <div className='row mb-5'>
        <div className='col p-4 text-left'>
        <h1>Own Your Office Environment</h1>
<h3>Blavity employees work in a fully remote environment from anywhere in the U.S.</h3>

<p>This work culture affords our employees the ability to work flexible hours,<br /> save money on transportation and meals, improve work-life balance, and reduce their environmental impact. </p>       </div>
<div className='col' style={{ borderRadius: '20px 0 0 0' }}>
    <img src="https://images.pexels.com/photos/1181232/pexels-photo-1181232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="About" className="img-fluid rounded" />
</div>


    
      </div>
      <div className='row p-5 bg-primary-subtle my-5' style={{ borderRadius: '30px' }}>
<div className='col p-5 '>
  <h1>Make Sure to Join us </h1>
</div>
<div className='col p-5 '>
<a href="#" className="btn btn-large btn-primary p-3">Learn More</a>

</div>

      </div>
 
      

                <div className="row mt-5">

                    <h2 className='my-5 pt-5'> Enjoy Perks & Rewards</h2>
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                            <img src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=600" alt="About" class="img-fluid" />

                                <h5 className="card-title">Product 1</h5>
                                <p className="card-text">Description of product 1.</p>
                                <a href="#" className="btn btn-primary">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">

                        <div className="card">
                            <div className="card-body">
                            <img src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=600" alt="About" class="img-fluid" />

                                <h5 className="card-title">Product 2</h5>
                                <p className="card-text">Description of product 2.</p>
                                <a href="#" className="btn btn-primary">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                            <img src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=600" alt="About" class="img-fluid" />

                                <h5 className="card-title">Product 3</h5>
                                <p className="card-text">Description of product 3.</p>
                                <a href="#" className="btn btn-primary">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                            <img src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=600" alt="About" class="img-fluid" />

                                <h5 className="card-title">Service 1</h5>
                                <p className="card-text">Description of service 1.</p>
                                <a href="#" className="btn btn-primary">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                            <img src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=600" alt="About" class="img-fluid" />

                                <h5 className="card-title">Service 2</h5>
                                <p className="card-text">Description of service 2.</p>
                                <a href="#" className="btn btn-primary">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                            <img src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=600" alt="About" class="img-fluid" />

                                <h5 className="card-title">Service 3</h5>
                                <p className="card-text">Description of service 3.</p>
                                <a href="#" className="btn btn-primary">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Additional space for more services */}
            </div>

            <div className="container mt-5 ">
       
       <div className="row mt-5">
         <div className="col-md-4   d-flex align-items-center justify-content-center">
           <div className="box">
             <h1>Small But Mighty</h1>
             <p>We Work 24/7 to make sure we provide the best services for you</p>
           </div>
         </div>
         <div className="col-md-4  bg-primary-subtle d-flex align-items-center justify-content-center">
           <div className="box">
             <h1>33%</h1>
             <p>Lorem Ipsum</p>
 
           </div>
         </div>
         <div className="col-md-4  bg-secondary-subtle  d-flex align-items-center justify-content-center">
           <div className="box">
             <h1>20%</h1>
             <p>Lorem Ipsum</p>
           </div>
         </div>
       </div>
 
       <div className="row mt-3 mb-5">
         <div className="col-md-4  bg-danger-subtle d-flex align-items-center justify-content-center">
           <div className="box">
           <h1>31%</h1>
             <p>Lorem Ipsum</p>
           </div>
         </div>
         <div className="col-md-4  bg-info d-flex  align-items-center justify-content-center">
           <div className="box">
             <h1>33%</h1>
             <p>Lorem Ipsum</p>
 
           </div>
         </div>
         <div className="col-md-4   bg-success-subtle mx- d-flex align-items-center justify-content-center">
           <div className="box mx-1">
             <h1>20%</h1>
             <p>Lorem Ipsum</p>
           </div>
         </div>
       </div>
     </div>

      <div className='row p-5 text-white mt-5  text-left'style={{  backgroundColor: "#1a0dad" }}>
        <div className='col p-4 text-left'>
        <h1 className=' text-left'>Own Your Office Environment</h1>
<h3>Blavity employees work in a fully remote environment from anywhere in the U.S.</h3>

<p>This work culture affords our employees the ability to work flexible hours,<br /> save money on transportation and meals, improve work-life balance, and reduce their environmental impact. </p>     
<a href="#" className="btn btn-secondary">Learn More</a>

  </div>
<div className='col' style={{ borderRadius: '20px 0 0 0' }}>
    <img src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=600" alt="About" className="img-fluid rounded" />
</div>


    
      </div>

           

      
        </div>

        
    );
}

export default Services;