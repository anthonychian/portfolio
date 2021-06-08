import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Project1_1 from "../../assets/img/projects/picture/genshin1.jpg";
import Project1_2 from "../../assets/img/projects/picture/genshin2.jpg";
import Project1_3 from "../../assets/img/projects/picture/genshin3.jpg";
import Project1_4 from "../../assets/img/projects/picture/genshin4.jpg";

import "./project1carousel.style.css"

const Project1Carousel = () => {
    return (
        <div id="project1">
          <Carousel controls={false} indicators interval={3500} pause={false}>
            <Carousel.Item>
                <img
                    className="d-block w-100 slide1-img"
                    src={Project1_1}
                    alt="First slide"
                />
               <Carousel.Caption>
                    <div className="project1caption">
                        Home Page
                    </div>
                </Carousel.Caption> 
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 slide2-img"
                    src={Project1_2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <div className="project1caption">
                        Character Detail Page
                    </div>
                </Carousel.Caption> 
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 slide3-img"
                    src={Project1_3}
                    alt="Third slide"
                />
               <Carousel.Caption>
                    <div className="project1caption">
                        View Character Talents
                    </div>
                </Carousel.Caption> 
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 slide4-img"
                    src={Project1_4}
                    alt="Fourth slide"
                />
               <Carousel.Caption>
                    <div className="project1caption">
                        View Character Weapons (with tooltips)
                    </div>
                </Carousel.Caption> 
            </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Project1Carousel
