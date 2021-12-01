import React from 'react';
import './ProjectDetail.css'
import { Carousel, Container } from 'react-bootstrap'
import homePage from '../../../src/images/drone/home.png'
import aboutPage from '../../../src/images/drone/about.png'
import manageOrders from '../../../src/images/drone/All-orders.png'

const ProjectDetail = () => {
    return (
        <Container className='my-5'>
            <div className='row g-5 align-items-center'>
                <div className="col-md-6">
                    <div>
                        <Carousel fade>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img-fluid"
                                    src={homePage}
                                    alt="First slide"

                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img-fluid"
                                    src={aboutPage}
                                    alt="Second slide"

                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img-fluid"
                                    src={manageOrders}
                                    alt="Third slide"

                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                <div className="col-md-6 lh-lg project-details">
                    <h2>Drone Store | Product-base-website</h2>
                    <h4>Features</h4>
                    <ul>
                        <li>A single-page drones-product-based web app with a dashboard and authentication system.</li>
                        <li>Where users can buy drone products and manage their orders and review our products.</li>
                        <li>Admin can manage products and manage all orders. Admin approved orders Then users purchase a product.</li>
                    </ul>
                    <h4>Technoloy use : </h4>
                    <div className='technology'>
                        <span>React.js</span>
                        <span>Express.js</span>
                        <span>MongoDB</span>
                        <span>React-Bootstrap</span>
                        <span>React-Router</span>
                        <span>React-hook-form</span>
                        <span>Firebase-Authentication</span>
                        <span>React-Router.</span>
                    </div>
                    <div className = 'project-code mt-3'>
                        <a target='_blank' rel="noreferrer" href="https://github.com/torisd560/Drone-Shop-Client--side"><i className="fab fa-github fs-5 " style={{ color: '#64ffda' }}></i></a>
                        <a target='_blank' rel="noreferrer" href="https://github.com/torisd560/Drone-Shop-Server-side"><i className="fab fa-github fs-5 " style={{ color: '#64ffda' }}></i></a>
                        <a target='_blank' rel="noreferrer" href="https://drone-store-33087.web.app/"><i className="fas fa-external-link-alt fs-5" style={{ color: '#64ffda' }}></i></a>
                    </div>
                </div>
                <div className="col-md-6">
                    <div>
                        <Carousel fade>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img-fluid"
                                    src={homePage}
                                    alt="First slide"

                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img-fluid"
                                    src={aboutPage}
                                    alt="Second slide"

                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img-fluid"
                                    src={manageOrders}
                                    alt="Third slide"

                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                <div className="col-md-6 lh-lg project-details">
                    <h2>Drone Store | Product-base-website</h2>
                    <h4>Features</h4>
                    <ul>
                        <li>A single-page drones-product-based web app with a dashboard and authentication system.</li>
                        <li>Where users can buy drone products and manage their orders and review our products.</li>
                        <li>Admin can manage products and manage all orders. Admin approved orders Then users purchase a product.</li>
                    </ul>
                    <h4>Technoloy use : </h4>
                    <div className='technology'>
                        <span>React.js</span>
                        <span>Express.js</span>
                        <span>MongoDB</span>
                        <span>React-Bootstrap</span>
                        <span>React-Router</span>
                        <span>React-hook-form</span>
                        <span>Firebase-Authentication</span>
                        <span>React-Router.</span>
                    </div>
                    <div className = 'project-code mt-3'>
                        <a target='_blank' rel="noreferrer" href="https://github.com/torisd560/Drone-Shop-Client--side"><i className="fab fa-github fs-5 " style={{ color: '#64ffda' }}></i></a>
                        <a target='_blank' rel="noreferrer" href="https://github.com/torisd560/Drone-Shop-Server-side"><i className="fab fa-github fs-5 " style={{ color: '#64ffda' }}></i></a>
                        <a target='_blank' rel="noreferrer" href="https://drone-store-33087.web.app/"><i className="fas fa-external-link-alt fs-5" style={{ color: '#64ffda' }}></i></a>
                    </div>
                </div>
                <div className="col-md-6">
                    <div>
                        <Carousel fade>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img-fluid"
                                    src={homePage}
                                    alt="First slide"

                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img-fluid"
                                    src={aboutPage}
                                    alt="Second slide"

                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img-fluid"
                                    src={manageOrders}
                                    alt="Third slide"

                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                <div className="col-md-6 lh-lg project-details">
                    <h2>Drone Store | Product-base-website</h2>
                    <h4>Features</h4>
                    <ul>
                        <li>A single-page drones-product-based web app with a dashboard and authentication system.</li>
                        <li>Where users can buy drone products and manage their orders and review our products.</li>
                        <li>Admin can manage products and manage all orders. Admin approved orders Then users purchase a product.</li>
                    </ul>
                    <h4>Technoloy use : </h4>
                    <div className='technology'>
                        <span>React.js</span>
                        <span>Express.js</span>
                        <span>MongoDB</span>
                        <span>React-Bootstrap</span>
                        <span>React-Router</span>
                        <span>React-hook-form</span>
                        <span>Firebase-Authentication</span>
                        <span>React-Router.</span>
                    </div>
                    <div className = 'project-code mt-3'>
                        <a target='_blank' rel="noreferrer" href="https://github.com/torisd560/Drone-Shop-Client--side"><i className="fab fa-github fs-5 " style={{ color: '#64ffda' }}></i></a>
                        <a target='_blank' rel="noreferrer" href="https://github.com/torisd560/Drone-Shop-Server-side"><i className="fab fa-github fs-5 " style={{ color: '#64ffda' }}></i></a>
                        <a target='_blank' rel="noreferrer" href="https://drone-store-33087.web.app/"><i className="fas fa-external-link-alt fs-5" style={{ color: '#64ffda' }}></i></a>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ProjectDetail;