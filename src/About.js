import React from 'react';

const About = () => {
    return (
        <div>
            <div className="container-fluid p-0 mb-5">
                <div className="row ">
                    <div className="col position-relative bg-dark text-white py-5" style={{ backgroundImage: `url('https://images.pexels.com/photos/5439447/pexels-photo-5439447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`, backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 1 }}>
                        <div className="position-absolute top-0 start-0 w-100 h-100 opacity-50" style={{ zIndex: -1, backgroundColor: "#1a0dad" }}></div>
                        <div className="text-left my-3 py-5 px-5 ">
                            <h1 className="text-white pt-5 pb-3" style={{ zIndex: 100 }}>About Us</h1>
                            <p className="lead pb-5">Welcome to The Digital Agency</p>
                        </div>
                    </div>
                   
                </div>
            </div>

            <div className="container py-5">
    <div className="row">
    <div className="col">
    <img
    src="https://images.pexels.com/photos/1181422/pexels-photo-1181422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    alt="About"
    className="img-fluid  "
    style={{ borderBottomLeftRadius: '30%',borderTopRightRadius: '30%'}}
/>

</div>

        <div className="col">
            <h2 className="text-left text-dark pb-2">About Us</h2>
            <p className="text-left text-dark pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            <button type="button" className="btn btn-secondary p-3">Our Service</button>
        </div>
    </div>
</div>


            <div className="container-fluid bg-light text-dark py-5">
                <div className="container my-5">
                  
                    <h1 className="text-start my-5">Services</h1>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <img src="https://images.pexels.com/photos/2672979/pexels-photo-2672979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="Service 1" />
                                <div className="card-body">
                                    <h5 className="card-title">Economy</h5>
                                    <p className="card-text">Phasellus rutrum arcu nec ex fermentum, nec venenatis leo accumsan. Phasellus non odio dolor. Duis vitae posuere metus</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img src="https://images.pexels.com/photos/1181264/pexels-photo-1181264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="Service 2" />
                                <div className="card-body">
                                    <h5 className="card-title">Reflecting</h5>
                                    <p className="card-text">Phasellus rutrum arcu nec ex fermentum, nec venenatis leo accumsan. Phasellus non odio dolor. Duis vitae posuere metus</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="Service 3" />
                                <div className="card-body">
                                    <h5 className="card-title">Standard</h5>
                                    <p className="card-text">Phasellus rutrum arcu nec ex fermentum, nec venenatis leo accumsan. Phasellus non odio dolor. Duis vitae posuere metus</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container my-5">
                        <a href="#" className="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>

            <div className="container py-5">
                <h1>Why Choose Us</h1>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
