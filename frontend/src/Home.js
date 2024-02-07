import React from 'react';
import { FaUser, FaChartLine, FaToolbox, FaBriefcase } from 'react-icons/fa';

const Home = () => {
    return (
        <div className="container-fluid p-0 mb-5">
            <div className="row">
                <div className="col-md-12-lg-6 position-relative bg-dark text-white py-5" style={{backgroundImage: `url('https://images.pexels.com/photos/7356/startup-photos-7356.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`, backgroundSize: 'cover', backgroundPosition: 'center' ,zIndex: 1}}>
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50" style={{ zIndex: -1 }}></div>
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
        </div>
    );
}

export default Home;





