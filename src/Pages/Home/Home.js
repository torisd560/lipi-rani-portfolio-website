import React from 'react';
import { Link } from 'react-router-dom'
import './Home.css'
import Works from '../Works/Works'
import Contact from '../Contact/Contact'
import { Container } from 'react-bootstrap';
import lipiImage from '../../images/Lipi.png'

const Home = () => {
    return (
        <Container>
            <div className="row m-0 my-5 d-flex align-items-center justify-content-center">
                <div className="col-md-7 mt-5">
                    <div className='text-start p-5 lh-sm'>
                        <p style={{ color: '#64ffda' }}>Hello , I'm</p>
                        <h1>Lipi Rani</h1>
                        <p className='my-3' style={{ color: '#64ffda' }}>Junior Web developer</p>
                        <p >I'm a Junior web developer. I’ve been working and learning about web development. As a programmer, I love taking on challenges and love being part of the solution. My hobby is keeping myself updated with all the latest technologies and tools.</p>
                        <Link to='/about'>
                            <button className='custom-btn mt-3'>About Me</button>
                        </Link>
                    </div>
                </div>
                <div className="col-md-5">
                    <img src={lipiImage} alt="" className='img-fluid rounded-circle mb-3' style={{ width: '280px' }} />
                </div>
            </div>
            <div>
                <Works></Works>
                <Contact></Contact>
            </div>
        </Container>
    );
};

export default Home;