import React from 'react';
import './About.css'
import lipiImage from '../../images/portfolio.jpg'
import { Container } from 'react-bootstrap';

const About = () => {
    return (
        <Container>
            <div className="row my-5 g-5">
                <div className="col-md-6 ">
                    <img src={lipiImage} alt="" className='img-fluid rounded-circle mb-3' style={{ width: '200px' }} />
                    <h2><span style={{ color: '#64ffda' }}>I'm </span> Lipi Rani</h2>
                    <p className='mt-3'>I'm a Junior web developer. For the last 6 months, I’ve been working and learning about web development. I have worked on different types of web pages. Many different types of web technologies have been but I  prefer to work with HTML, CSS, Bootstrap, JavaScript, React.js, Express.js, MongoDB, and  Rest API. As a programmer, I love taking on challenges and love being part of the solution. My hobby is keeping myself updated with all the latest technologies and tools.
                    </p>
                </div>
                <div className="col-md-6">
                    <h1 className='text-center mb-5'>My <span style={{ borderBottom: '1px solid #64ffda' }}>Skills</span></h1>
                    <div>
                        <h5 className='skills-title'>Comfortable</h5>
                        <div className='technology'>
                            <span>HTML5</span>
                            <span>CSS3</span>
                            <span>Bootstrap5</span>
                            <span>JavaScript</span>
                            <span>ES6</span>
                            <span>React.js</span>
                            <span>REST API</span>
                            <span>Express.js</span>
                            <span>MongoDB</span>
                            <span>React-Bootstrap</span>
                            <span>React-Router</span>
                            <span>JSON</span>
                        </div>
                    </div>
                    <div className='my-5'>
                        <h5 className='skills-title '>Familiar</h5>
                        <div className='technology'>
                            <span>Material UI</span>
                            <span>TypeScript</span>
                            <span>Node.js</span>
                            <span>React-Native</span>
                            <span>Tailwind</span>
                            <span>JWT</span>
                        </div>
                    </div>
                    <div>
                        <h5 className='skills-title '>Tools</h5>
                        <div className='technology'>
                            <span>Git</span>
                            <span>Create React App</span>
                            <span>NPM</span>
                            <span>VS Code</span>
                            <span>Chrome Dev tool</span>
                            <span>Firebase</span>
                            <span>Netlify</span>
                            <span>Heroku</span>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default About;