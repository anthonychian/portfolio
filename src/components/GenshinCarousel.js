import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Image1 from "../assets/img/projects/picture/genshin1.jpg";
import Image2 from "../assets/img/projects/picture/genshin2.jpg";
import Image3 from "../assets/img/projects/picture/genshin3.jpg";
import Image4 from "../assets/img/projects/picture/genshin4.jpg";

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

export default function GenshinCarousel() {

    const classes = useStyles()

    const projectData = [
        {
            image: Image1,
            caption: 'Home page',
            alt: 'First Slide'
        },
        {
            image: Image2,
            caption: 'Character detail page',
            alt: 'Second Slide'
        },
        {
            image: Image3,
            caption: 'View character talents',
            alt: 'Third Slide'
        },
        {
            image: Image4,
            caption: 'View character weapons (with Tooltip)',
            alt: 'Fourth Slide'
        },
    ]

    return (
        <div>
            <Carousel controls={true} interval={null} pause={false}>
                {projectData.map((item, idx) => (
                    <Carousel.Item key={idx}>
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

