import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Project2_1 from "../../assets/img/projects/picture/blog1.jpg";
import Project2_2 from "../../assets/img/projects/picture/blog2.jpg";
import Project2_3 from "../../assets/img/projects/picture/blog3.jpg";
import Project2_4 from "../../assets/img/projects/picture/blog4.jpg";
import Project2_5 from "../../assets/img/projects/picture/blog5.jpg";

import "./project2carousel.style.css"


const Project2Carousel = () => {
    return (
        <div id="project2">
          <Carousel controls={false} indicators interval={2500} pause={false}>
            <Carousel.Item>
                <img
                className="d-block w-100 slide1-img"
                src={Project2_1}
                alt="First slide"
                />
                <Carousel.Caption>
                    <div className="project2caption">
                        Home Page
                    </div>
                </Carousel.Caption> 
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 slide2-img"
                src={Project2_2}
                alt="Second slide"
                /> 
                <Carousel.Caption>
                    <div className="project2caption">
                        Create New Blog Post
                    </div>
                </Carousel.Caption>  
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 slide3-img"
                src={Project2_3}
                alt="Third slide"
                />
                <Carousel.Caption>
                    <div className="project2caption">
                        My Blog Posts
                    </div>
                </Carousel.Caption>    
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 slide4-img"
                src={Project2_4}
                alt="Fourth slide"
                />
                <Carousel.Caption>
                    <div className="project2caption">
                        Registration Page
                    </div>
                </Carousel.Caption>    
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 slide5-img"
                src={Project2_5}
                alt="Fifth slide"
                />
                <Carousel.Caption>
                    <div className="project2caption">
                        Login Page
                    </div>
                </Carousel.Caption>    
            </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Project2Carousel
