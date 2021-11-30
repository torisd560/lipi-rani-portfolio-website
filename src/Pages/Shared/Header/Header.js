import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="transparent" variant="transparent">
                <Container>
                    <Navbar.Brand className='navbarBrand'>L</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className = 'text-white' />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto custom-nav align-items-center">
                            <Nav.Link as={Link} to="/home" style={{ color: '#dde1e7' }}>Home</Nav.Link>
                            <Nav.Link as={Link} to="/about" style={{ color: '#dde1e7' }}>About</Nav.Link>
                            <Nav.Link as={Link} to="/work" style={{ color: '#dde1e7' }}>Works</Nav.Link>
                            <Nav.Link as={Link} to="/blog" style={{ color: '#dde1e7' }}>Blogs</Nav.Link>
                            <a className='resume-btn' target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1t9yGU7-_TSGQObXSRY0-L4LJpAkqqEpg/view?usp=sharing">Resume</a>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;