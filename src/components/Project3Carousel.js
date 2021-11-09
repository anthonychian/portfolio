import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Image1 from "../assets/img/projects/picture/spotify1.jpg";
import Image2 from "../assets/img/projects/picture/spotify2.jpg";
import Image3 from "../assets/img/projects/picture/spotify3.jpg";
import Image4 from "../assets/img/projects/picture/spotify4.jpg";
import Image5 from "../assets/img/projects/picture/spotify5.jpg";
import Image6 from "../assets/img/projects/picture/spotify6.jpg";
import Image7 from "../assets/img/projects/picture/spotify7.jpg";

import { makeStyles } from '@mui/styles';

import ModalImage from "react-modal-image";

// import "./project3carousel.style.css"

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
            caption: 'Song display view',
        },
        {
            image: Image2,
            caption: 'Lyrics display view',
        },
        {
            image: Image3,
            caption: 'Dynamic background color',
        },
        {
            image: Image4,
            caption: '',
        },
        {
            image: Image5,
            caption: 'Settings and bottom song bar',
        },
        {
            image: Image6,
            caption: 'Playlist selection',
        },
        {
            image: Image7,
            caption: 'Song selection',
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
