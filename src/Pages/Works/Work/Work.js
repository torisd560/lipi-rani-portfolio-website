import React from 'react';
import './Work.css'
import { Card, Col, CardGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Work = ({ project }) => {
    const { title, img, github, live_link } = project

    return (
        <div >
            <Col className='project-card h-100'>
                <CardGroup>
                    <Card style={{ backgroundColor: 'rgb(23, 42, 69)' }}>
                        <Card.Img variant="top" src={img} className='img-fluid' style={{ height: '300px' }} />
                        <Card.Body className='p-3'>
                            <Card.Title >{title}</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                            <div className='d-flex justify-content-between'>
                                <span>
                                    <a target='_blank' rel='noreferrer' href={github}><i className="fab fa-github fs-5 " style={{ color: '#64ffda' }}></i></a>

                                    <a className='ms-3' target='_blank' rel='noreferrer' href={live_link}><i className="fas fa-external-link-alt fs-5" style={{ color: '#64ffda' }}></i></a>
                                </span>
                                <Link to='/projectDetails'>
                                    <Button variant="outline-success">Details</Button>
                                </Link>
                            </div>
                        </Card.Footer>
                    </Card>

                </CardGroup>
            </Col>
        </div>
    );
};

export default Work;