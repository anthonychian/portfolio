import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Image1 from "../assets/img/projects/picture/cafe1.jpg";
import Image2 from "../assets/img/projects/picture/cafe2.jpg";
import Image3 from "../assets/img/projects/picture/cafe3.jpg";
import Image4 from "../assets/img/projects/picture/cafe4.jpg";

import { makeStyles } from '@mui/styles';

import ModalImage from "react-modal-image";


const useStyles = makeStyles(() => ({
    carousel: {
        display: 'block',
        margin: 'auto',
        height: '500px',
        width: '1000px',
        objectFit: 'cover'

    }
}))

export default function Project3Carousel() {

    const classes = useStyles()

    const projectData = [
        {
            image: Image1,
            caption: 'Welcome view',
        },
        {
            image: Image2,
            caption: 'Beverage selection',
        },
        {
            image: Image3,
            caption: 'Bakery selection and bottom bar',
        },
        {
            image: Image4,
            caption: 'Menu side bar',
        },
    ]

    return (
        <div>
            <Carousel controls={true} interval={null} pause={false}>
                {projectData.map((item, idx) => (
                    <Carousel.Item >
                        <ModalImage
                            small={item.image}
                            large={item.image}
                            alt={item.caption}
                            hideDownload={true}
                            hideZoom={true}
                            className={classes.carousel}
                        />
                        <Carousel.Caption>
                            <span style={{backgroundColor: 'black', color: 'white'}}>
                                {item.caption}
                            </span>
                        </Carousel.Caption> 
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}
