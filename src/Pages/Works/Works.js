import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Work from './Work/Work';

const Works = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('./project.JSON')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    return (

        <div>
            <h1 className='text-center'>My <span style={{ borderBottom: '1px solid #64ffda' }}> Works</span></h1>
            <Container>
                <Row xs={1} md={3} className="g-4 my-5 mx-0">
                    {
                        projects.map(project => <Work project={project} key={project.id}></Work>)
                    }
                </Row>
            </Container>
        </div>

    );
};

export default Works;