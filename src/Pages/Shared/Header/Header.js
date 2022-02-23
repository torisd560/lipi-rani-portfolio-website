import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logoImg from '../../../images/lipi_logo.png'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
                <Container>
                    <Navbar.Brand className='navbarBrand text-white'>
                        <img src={logoImg} alt="logo.png" style={{ width: '120px' }} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className='bg-white' />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto custom-nav align-items-center">
                            <Nav.Link as={Link} to="/home" style={{ color: '#dde1e7' }}>Home</Nav.Link>
                            <Nav.Link as={Link} to="/about" style={{ color: '#dde1e7' }}>About</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#work" style={{ color: '#dde1e7' }}>Works</Nav.Link>
                            <Nav.Link as={Link} to="/blog" style={{ color: '#dde1e7' }}>Blogs</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#contact" style={{ color: '#dde1e7' }}>Contact</Nav.Link>
                            <a className='resume-btn' target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1hDHuPkvBVF5cZQ5coYFO4TfoBnyoMzMU/view?usp=drivesdk">Resume</a>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;