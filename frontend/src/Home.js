import React from 'react';
import { FaUser, FaChartLine, FaToolbox, FaBriefcase } from 'react-icons/fa';

const Home = () => {
    return (
        <div className="container-fluid p-0 mb-5">
            <div className="row">
                <div className="col-md-12-lg-6 position-relative bg-dark text-white py-5" style={{backgroundImage: `url('https://images.pexels.com/photos/7356/startup-photos-7356.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`, backgroundSize: 'cover', backgroundPosition: 'center' ,zIndex: 1}}>
                    <div className="position-absolute top-0 start-0 w-100 h-100  opacity-50" style={{ zIndex: -1, backgroundColor: "#6a0dad" } }></div>
                    <div className="text-left py-5 px-5 " >
                        <h1 className='text-white pt-5 pb-3' style={{ zIndex: 100 }}>Business Planning and Execution</h1>
                        <p className="lead ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt<br/> ut labore et dolore magna aliqua.
                         Ut enim ad minim veniam, quis nostrud exercitation<br/> ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                        <div className='pt-4 pb-5'>
                            <button type="button" className="btn btn-primary mx-2 p-3">Contact us</button>
                            <button type="button" className="btn btn-secondary p-3">Our Service</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mx-auto px-5 mx-5 px-5 mb-5 justify-content-center" style={{ position: 'relative', zIndex: 2 , marginTop:"-50px"}}>
                <div className="col-md-4 pt-2 pb-2 mb-4">
                    <div className="position-relative bg-white border rounded text-dark py-3 d-flex flex-column align-items-center justify-content-center">
                        <FaUser size={30} />
                        <h4 className='pt-2'>FINANCE MANAGEMENT</h4>
                        <p >Serat nuec umsan id nisi in ullamcorper, nullam leo diam seplatun</p>
                    </div>
                </div>
                <div className="col-md-4 pt-2 pb-2 mb-4">
                    <div className="position-relative bg-white border rounded text-dark py-3 d-flex flex-column align-items-center justify-content-center">
                        <FaChartLine size={30} />
                        <h4  className='pt-2'>BUSINESS CONSULTING</h4>
                        <p>Serat nuec umsan id nisi in ullamcorper, nullam leo diam seplatun</p>
                    </div>
                </div>
                <div className="col-md-4 pt-2 pb-2 mb-4">
                    <div className="position-relative bg-white border rounded text-dark py-3 d-flex flex-column align-items-center justify-content-center">
                        <FaToolbox size={30} />
                        <h4  className='pt-2'>TECHNOLOGY SOLUTIONS</h4>
                        <p>Serat nuec umsan id nisi in ullamcorper, nullam leo diam seplatun</p>
                    </div>
                </div>
                
            </div>
            <div class=" text-white py-5 bg-purple" style={{ backgroundColor: "#6a0dad" }}>
    <div class="container">
        <div class="row justify-content-center py-5">
            <div class="col-md-6 text-start">
                <h2 class="text-left text-white  pb-2  text-start">About Us</h2>
                <p class="text-left text-white  text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et suscipit neque. Mauris sed nunc ac lorem feugiat placerat. Proin ut bibendum felis. Quisque vel urna a arcu posuere vestibulum non et turpis. Duis nec tortor quam. Suspendisse nec faucibus felis. Nullam eget mi a nunc placerat molestie eget nec lacus. Pellentesque quis eros sed dolor pretium finibus. Donec ultricies, nunc non fermentum molestie, ipsum odio hendrerit elit, id dignissim mi elit vitae lorem.</p>
                <p class="text-left text-white  pb-2 text-start">Phasellus rutrum arcu nec ex fermentum, nec venenatis leo accumsan. Phasellus non odio dolor. Duis vitae posuere metus. Duis auctor, elit sit amet tempus fermentum, purus orci convallis purus, in placerat turpis lectus in ligula. Fusce vel gravida libero. Duis maximus malesuada nibh, in eleifend purus finibus eget. Pellentesque vitae dolor lectus. Cras venenatis turpis in orci vehicula aliquet.</p>
                <button type="button" class="btn btn-secondary p-3 text-start btn-start">Our Service</button>
            </div>
            <div class="col-md-6">
                <img src="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=600" alt="About" class="img-fluid" />
            </div>
        </div>
    </div>
</div>








<div class="bg-light text-dark py-5">

<div className="container my-5 bg-light">
<h1 className='text-start my-5'>Services</h1>

    <div className="row">
        <div className="col-md-4">
            <div className="card">
                <img src="https://images.pexels.com/photos/2672979/pexels-photo-2672979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="Service 1" />
                <div className="card-body">
                    <h5 className="card-title">Economy</h5>
                    <p className="card-text">Phasellus rutrum arcu nec ex fermentum, nec venenatis leo accumsan. Phasellus non odio dolor. Duis vitae posuere metus</p>
                    <a href="#" className="btn btn-primary">Learn More</a>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card">
                <img src="https://images.pexels.com/photos/1181264/pexels-photo-1181264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="Service 2" />
                <div className="card-body">
                    <h5 className="card-title">Reflecting</h5>
                    <p className="card-text">Phasellus rutrum arcu nec ex fermentum, nec venenatis leo accumsan. Phasellus non odio dolor. Duis vitae posuere metus</p>
                    <a href="#" className="btn btn-primary">Learn More</a>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card">
                <img src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="Service 3" />
                <div className="card-body">
                    <h5 className="card-title">Standard</h5>
                    <p className="card-text">Phasellus rutrum arcu nec ex fermentum, nec venenatis leo accumsan. Phasellus non odio dolor. Duis vitae posuere metus</p>
                    <a href="#" className="btn btn-primary">Learn More</a>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
<img
  src="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=600"
  alt="About"
  className="img-fluid w-100"
  style={{
    height: '400px',
    backgroundAttachment: 'fixed',
    objectFit: 'cover',
    position: 'fixed',

  }}
/>


<div className="text-white py-5 bg-purple" style={{ background: "linear-gradient(to bottom, #6a0dad, white)" }}>


<div class="row justify-content-center py-5 ">
    <div class="col-md-6 p-5 text-start">
        <h2 class="text-left text-white  pb-2  text-start">About Us</h2>
        <p class="text-left text-white  text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et suscipit neque. Mauris sed nunc ac lorem feugiat placerat. Proin ut bibendum felis. Quisque vel urna a arcu posuere vestibulum non et turpis. Duis nec tortor quam. Suspendisse nec faucibus felis. Nullam eget mi a nunc placerat molestie eget nec lacus. Pellentesque quis eros sed dolor pretium finibus. Donec ultricies, nunc non fermentum molestie, ipsum odio hendrerit elit, id dignissim mi elit vitae lorem.</p>
        <button type="button" class="btn btn-secondary p-3 text-start btn-start">Our Service</button>
    </div>
    <div class="col-md-6">
        <img src="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=600" alt="About" class="img-fluid" />
    </div>
</div>

<div class="row justify-content-center py-5 ">
    <div class="col-md-6 px-5">
        <img src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="About" class="img-fluid" />
    </div>
    <div class="col-md-6  text-start">
        <h2 class="text-left text-white  pb-2  text-start">Lorem ipsum dolor sit amet</h2>
        <p class="text-left text-white  text-start"> Sed et suscipit neque. Mauris sed nunc ac lorem feugiat placerat. Proin ut bibendum felis. Quisque vel urna a arcu posuere vestibulum non et turpis. Duis nec tortor quam. Suspendisse nec faucibus felis. Nullam eget mi a nunc placerat molestie eget nec lacus. Pellentesque quis eros sed dolor pretium finibus. Donec ultricies, nunc non fermentum molestie, ipsum odio hendrerit elit, id dignissim mi elit vitae lorem.</p>
        <button type="button" class="btn btn-secondary p-3 text-start btn-start">Our Service</button>
    </div>
</div>
</div>
        </div>
    );
}

export default Home;





