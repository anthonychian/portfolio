import React from 'react'
// import Card from "react-bootstrap/Card";
// import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button';

import Project1Carousel from '../../components/project1-carousel/project1carousel.component';
import Project2Carousel from '../../components/project2-carousel/project2carousel.component';

import './projects.style.css'


const Projects = () => {

    return (
        <div id='projects'>
            
            <div className="pt-5 projects">
                <h1 className="pt-5 pb-5 text-center projects-font pb-4">Projects</h1>
                <Project1Carousel/>
                <h2 className="pt-5 text-center projects-font pb-4">Genshin Impact Website</h2>
                <div className="pb-5 projectbuttons">
                    <div className="btn">
                        <a href="https://github.com/anthonychian/genshin" target="_blank" rel="noopener noreferrer">
                            <Button className="m-2" variant="outline-dark">Github</Button>
                        </a>
                    </div>
                    <div className="btn">
                        <a href="https://genshin-website.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <Button className="m-2" variant="outline-primary">Website</Button>
                        </a>
                    </div>
                </div>
                <Project2Carousel/>
                <h2 className="pt-5 text-center projects-font pb-4">Blog Website</h2>
                <div className="pb-5 projectbuttons">
                    <div className="btn">
                        <a href="https://github.com/anthonychian/blog" target="_blank" rel="noopener noreferrer">
                            <Button className="m-2" variant="outline-dark">Github</Button>
                        </a>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Projects


{/* <CardColumns className="pb-5">
                    <Card className="focus">
                        <Card.Body>
                            <Card.Title>
                                Genshin Impact Website
                            </Card.Title>
                            <Project1Carousel/>
                            
                            <div className="btn">
                                <a href="https://github.com/anthonychian/genshin" target="_blank" rel="noopener noreferrer">
                                    <Button className="m-2" variant="outline-dark">Github</Button>
                                </a>
                            </div>
                            <div className="btn">
                                <a href="https://genshin-website.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                    <Button className="m-2" variant="outline-primary">Website</Button>
                                </a>
                            </div>
                            
                        </Card.Body>
                    </Card>
                    <Card className="focus">
                        <Card.Body>
                            <Card.Title>
                                Blog Website
                            </Card.Title>
                            <Project2Carousel/>
                            <div className="btn">
                                <a href="https://github.com/anthonychian" target="_blank" rel="noopener noreferrer">
                                    <Button className="m-2" variant="outline-dark">Github</Button>
                                </a>
                            </div>
                        
                        </Card.Body>
                    </Card>
                    <Card className="focus">
                        <Card.Body>
                            
                        </Card.Body>
                    </Card>
            
                </CardColumns> */}