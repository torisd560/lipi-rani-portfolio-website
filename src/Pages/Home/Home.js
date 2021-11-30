import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className="row m-0 my-5">
            <div className="col-md-7">
                <div className='text-start p-5 lh-sm'>
                    <p style = {{color : '#64ffda'}}>Hello , I'm</p>
                    <h1>Lipi Rani</h1>
                    <li className = 'my-3' style = {{color : '#64ffda'}}>Junior Web developer</li>
                    <p >A hard working self-motivated and enthusiastic web developer with a deep interest in JavaScript ,as well as the ability to communicate effectively in a team setting, and possessing a strong willingness to learn about modern web technologies .</p>
                    <button className = 'custom-btn mt-3'>About Me</button>
                </div>
            </div>
        </div>
    );
};

export default Home; 