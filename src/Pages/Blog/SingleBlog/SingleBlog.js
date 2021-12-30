import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SingleBlog = ({ blog }) => {

    const { img, title, blog_link } = blog

    return (
        <div className='blog'>
            <a className='ms-3' target='_blank' rel='noreferrer' href={blog_link}>
                <Col className='project-card h-100'>
                    <Card style={{ backgroundColor: 'rgb(23, 42, 69)' }}>
                        <Card.Img variant="top" src={img} className='img-fluid' style={{ height: '200px' }} />
                        <Card.Body className='p-3'>
                            <Card.Title >{title}</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </a>
        </div>
    );
};

export default SingleBlog;