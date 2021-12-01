import React from 'react';
import './Work.css'
import { Card, Col, CardGroup } from 'react-bootstrap';

const Work = ({ project }) => {
    const { title, description, img, github, live_link, technology } = project
    console.log(technology)
    return (
        <div >
            <Col className='project-card h-100'>
                <CardGroup>
                    <Card style = {{backgroundColor : 'rgb(23, 42, 69)'}}>
                        <Card.Img variant="top" src={img} className='img-fluid' style={{ height: '200px' }} />
                        <Card.Body className='p-3'>
                            <Card.Title >{title}</Card.Title>
                            <Card.Text className='my-3' style={{ fontSize: '15px' }}>{description}</Card.Text>
                            <div className='technology'>
                                {
                                    technology.map(th => <span>{th}</span>)
                                }
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <a target='_blank' rel='noreferrer' href={github}><i className="fab fa-github fs-5 " style={{ color: '#64ffda' }}></i></a>

                            <a className='ms-3' target='_blank' rel='noreferrer' href={live_link}><i className="fas fa-external-link-alt fs-5" style={{ color: '#64ffda' }}></i></a>
                        </Card.Footer>
                    </Card>

                </CardGroup>
            </Col>
        </div>
    );
};

export default Work;