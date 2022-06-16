import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Image1 from "../assets/img/projects/picture/mhw1.JPG";
import Image2 from "../assets/img/projects/picture/mhw2.JPG";
import Image3 from "../assets/img/projects/picture/mhw3.JPG";

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

export default function MonsterHunterCarousel() {

    const classes = useStyles()

    const projectData = [
        {
            image: Image1,
            caption: 'Home page',
        },
        {
            image: Image2,
            caption: 'Armor selection',
        },
        {
            image: Image3,
            caption: 'Equipment view',
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
