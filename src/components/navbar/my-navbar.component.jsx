import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "./my-navbar.style.css"
 
const MyNavbar = () => {
    return(
        <>
        <Navbar fixed="top" collapseOnSelect expand="md" variant="dark" className="animate-navbar nav-theme justify-content-between">
            <Navbar.Brand href="#home">
                <div className="navName">
                    Anthony Chian
                </div>
                <div className="navTitle">
                    Web/Software Developer
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link href="">Home</Nav.Link>
                <Nav.Link href="">About</Nav.Link>
                <Nav.Link href="">Skills</Nav.Link>
                <Nav.Link href="">Projects</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

        </>
    )
}

export default MyNavbar
