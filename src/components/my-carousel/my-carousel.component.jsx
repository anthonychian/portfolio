import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Slide1 from '../../assets/img/carousel/slide1.jpg'
import Slide2 from '../../assets/img/carousel/slide2.jpg'
import Slide3 from '../../assets/img/carousel/slide3.jpg'

import "./my-carousel.style.css"


const MyCarousel = () => {
    return (
        <div id="home">
          <Carousel controls={false} indicators interval={2500} pause={false}>
            <Carousel.Item>
                <img
                className="d-block w-100 slide1-img"
                src={Slide1}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 slide2-img"
                src={Slide2}
                alt="Second slide"
                />  
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 slide3-img"
                src={Slide3}
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default MyCarousel
