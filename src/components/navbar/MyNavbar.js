import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "./my-navbar.style.css"
 
export default function MyNavbar() {
    return(
        <>
        <Navbar collapseOnSelect expand="md" variant="dark" className="animate-navbar nav-theme justify-content-between">
            <Navbar.Brand href="#home">
                <div className="navName">
                    Anthony Chian
                </div>
                <div className="navTitle">
                    Full Stack Developer
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                {/* <Nav.Link href="#skills">Skills</Nav.Link> */}
                <Nav.Link href="#projects">Projects</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

        </>
    )
}