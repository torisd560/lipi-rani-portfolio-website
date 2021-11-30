import React from 'react';
import { Link } from 'react-router-dom'
import './Home.css'
import Works from '../Works/Works'
import Contact from '../Contact/Contact'
import { Container } from 'react-bootstrap';

const Home = () => {
    return (
        <Container>
            <div className="row m-0 my-5">
                <div className="col-md-7 mt-5">
                    <div className='text-start p-5 lh-sm'>
                        <p style={{ color: '#64ffda' }}>Hello , I'm</p>
                        <h1>Lipi Rani</h1>
                        <p className='my-3' style={{ color: '#64ffda' }}>Junior Web developer</p>
                        <p >I'm a junior web developer . A hard working self-motivated and enthusiastic web developer with a deep interest in JavaScript ,as well as the ability to communicate effectively in a team setting, and possessing a strong willingness to learn about modern web technologies .</p>
                        <Link to='/about'>
                            <button className='custom-btn mt-3'>About Me</button>
                        </Link>
                    </div>
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