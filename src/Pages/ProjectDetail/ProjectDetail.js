import React from 'react';
import './ProjectDetail.css'
import { Carousel, Container } from 'react-bootstrap'
import homePage from '../../../src/images/drone/home.png'
import aboutPage from '../../../src/images/drone/about.png'
import manageOrders from '../../../src/images/drone/All-orders.png'
import femaleHome from '../../../src/images/female-care/home (1).png'
import femaleAbout from '../../../src/images/female-care/about (1).png'
import femaleContact from '../../../src/images/female-care/contacr (1).png'
import tarvenuHome from '../../../src/images/travenu/home (1).png'
import travenuAbout from '../../../src/images/travenu/about (1).png'
import tarvenuContact from '../../../src/images/travenu/contact (1).png'

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
                    </div>
                    <div className='project-code mt-3'>
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
                                    src={tarvenuHome}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img-fluid"
                                    src={travenuAbout}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img-fluid"
                                    src={tarvenuContact}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                <div className="col-md-6 lh-lg project-details">
                    <h2>Travenu | Travelling-website</h2>
                    <h4>Features</h4>
                    <ul>
                        <li>A single-page tourism-based web app with a simple dashboard and authentication system.</li>
                        <li>Where people can book the tour service that we provide.</li>
                        <li>People can manage their booking orders.</li>
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
                    </div>
                    <div className='project-code mt-3'>
                        <a target='_blank' rel="noreferrer" href="https://github.com/torisd560/travenu-client-side"><i className="fab fa-github fs-5 " style={{ color: '#64ffda' }}></i></a>
                        <a target='_blank' rel="noreferrer" href="https://github.com/torisd560/travenu-server-side"><i className="fab fa-github fs-5 " style={{ color: '#64ffda' }}></i></a>
                        <a target='_blank' rel="noreferrer" href="https://travel-authentication-b244d.web.app/"><i className="fas fa-external-link-alt fs-5" style={{ color: '#64ffda' }}></i></a>
                    </div>
                </div>
                <div className="col-md-6">
                    <div>
                        <Carousel fade>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img-fluid"
                                    src={femaleHome}
                                    alt="First slide"

                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img-fluid"
                                    src={femaleAbout}
                                    alt="Second slide"

                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img-fluid"
                                    src={femaleContact}
                                    alt="Third slide"

                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                <div className="col-md-6 lh-lg project-details">
                    <h2>Female Care | health care-website</h2>
                    <h4>Features</h4>
                    <ul>
                        <li>A simple dynamic healthcare website with a login system.</li>
                        <li>Where females can make an appointment.</li>
                        <li>Gynecology doctors prescribe to the patients.</li>
                    </ul>
                    <h4>Technoloy use : </h4>
                    <div className='technology'>
                        <span>React.js</span>
                        <span>React-Bootstrap</span>
                        <span>React-Router</span>
                        <span>Firebase-Authentication</span>
                    </div>
                    <div className='project-code mt-3'>
                        <a target='_blank' rel="noreferrer" href="https://github.com/torisd560/Female-Care-Website"><i className="fab fa-github fs-5 " style={{ color: '#64ffda' }}></i></a>
                        <a target='_blank' rel="noreferrer" href="https://healthcare-firebase-auth.web.app/"><i className="fas fa-external-link-alt fs-5" style={{ color: '#64ffda' }}></i></a>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ProjectDetail;