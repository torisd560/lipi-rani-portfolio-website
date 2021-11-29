import Button from '@restart/ui/esm/Button';
import React from 'react';
import lipiImg from '../../../images/portfolio.jpg'

const Header = () => {
    return (
        <div className='text-center' >
            <div style={{ position: 'relative' }}>
                <img src={lipiImg} alt="" className='img-fluid' style={{ verticalAlign: 'super' }} />
                <h2 className='p-1 w-100 text-white' style={{ backgroundColor: '#00A3E1', position: 'absolute', bottom: 0, left: 0 }}>LIPI RANI</h2>
            </div>
            <a title = "_blank" href="https://drive.google.com/file/d/1t9yGU7-_TSGQObXSRY0-L4LJpAkqqEpg/view?usp=sharing">Resume</a>
        </div>
    );
};

export default Header;