import React from 'react';
import lipiImg from '../../../images/portfolio.jpg'
import './Header.css'
const Header = () => {
    return (
        <div className='text-center' >
            <div style={{ position: 'relative' }}>
                <img src={lipiImg} alt="" className='img-fluid' style={{ verticalAlign: 'super' }} />
                <h2 className='p-1 w-100 text-white' style={{ backgroundColor: '#00A3E1', position: 'absolute', bottom: 0, left: 0 }}>LIPI RANI</h2>
            </div>
        </div>
    );
};

export default Header;