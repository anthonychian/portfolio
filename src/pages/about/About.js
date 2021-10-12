import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Profile from "../../assets/img/profile/profile3.jpg";
import Button from 'react-bootstrap/Button';
import ModalImage from "react-modal-image";


import "./about.style.css";

export default function About() {
    return (
        <div id="about">
            <div className="pt-5 aboutSection">
                <h1 className="pt-5 text-center font-details pb-5">About Me</h1>
                <Container className="pb-5">
                    <Row className="pt-3 pb-5 align-items-center">
                        {/* Profile Pic */}
                        <Col xs={12} md={6}>
                            <Row className="justify-content-center mb-2">
                                <ModalImage
                                    small={Profile}
                                    large={Profile}
                                    alt={''}
                                    hideDownload={true}
                                    hideZoom={true}
                                    className="pd-3 profile justify-content-end"
                                    
                                />
                            </Row>
                        </Col>
                        {/* Description */}
                        <Col xs={12} md={6}>
                            <Row className=" align-items-start p-3 my-details rounded">
                                Hello! I'm Anthony, a recent Computer Science graduate student from UCSC.
                                I enjoy creating projects on the web as well as developing interesting applications. 
                                My goal is to create meaningful projects that focus on user experience.
                                <br /><br />
                                I'm currently looking for job opportunities in Front End, Back End and Full Stack Development.
                                <br /><br />
                                <Col className="d-flex justify-content-center flex-wrap">
                                    {/* <div className="btn">
                                        <a href="#contact">
                                            <Button className="m-2" variant="outline-success">Resume</Button>
                                        </a>
                                    </div> */}
                                    <div className="btn">
                                        <a href="https://github.com/anthonychian" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-primary">Github</Button>
                                        </a>
                                    </div>
                                    <div className="btn">
                                        <a href="https://www.linkedin.com/in/anthonychian/" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-info">Linkedin</Button>
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};
