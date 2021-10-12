import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import TitleMessage from "./TitleMessage";
import Slide1 from '../assets/img/carousel/slide1.jpg'
import Slide2 from '../assets/img/carousel/slide2.jpg'
import Slide3 from '../assets/img/carousel/slide3.jpg'

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    slide1Img: {
        height: '100vh',
        objectFit: 'cover',
        objectPosition: '50% 100%',
        filter: 'brightness(45%)'
      },
      slide2Img: {
        height: '100vh',
        objectFit: 'cover',
        objectPosition: '50% -35%',
        filter: 'brightness(40%)'
      },
      slide3Img: {
        height: '100vh',
        objectFit: 'cover',
        objectPosition: '50% 50%',
        filter: 'brightness(60%)'
      }
}))


export default function MyCarousel() {

    const classes = useStyles()

    return (
        <div id="home">
            <TitleMessage/>
          <Carousel controls={false} indicators interval={2500} pause={false}>
            <Carousel.Item>
                <img
                className={`d-block w-100 ${classes.slide1Img}`}
                src={Slide1}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className={`d-block w-100 ${classes.slide2Img}`}
                src={Slide2}
                alt="Second slide"
                />  
            </Carousel.Item>
            <Carousel.Item>
                <img
                className={`d-block w-100 ${classes.slide3Img}`}
                src={Slide3}
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>
        </div>
    );
}