import React from "react";
import Carousel from "react-bootstrap/Carousel";

import spotify1 from "../assets/img/projects/picture/spotify1.png";
import spotify2 from "../assets/img/projects/picture/spotify2.png";
import spotify3 from "../assets/img/projects/picture/spotify3.png";
import spotify4 from "../assets/img/projects/picture/spotify4.png";

import { makeStyles } from "@mui/styles";

import ModalImage from "react-modal-image";

const useStyles = makeStyles(() => ({
  carousel: {
    display: "block",
    margin: "auto",
    height: "500px",
    width: "1000px",
    objectFit: "cover",
  },
}));

export default function SpotifyCarousel() {
  const classes = useStyles();

  const projectData = [
    {
      image: spotify1,
      caption: "Dynamic background color",
    },
    {
      image: spotify2,
      caption: "Lyrics display view",
    },
    {
      image: spotify3,
      caption: "Particle Effects",
    },
    {
      image: spotify4,
      caption: "Playlist Selection",
    },
  ];

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
              <span style={{ backgroundColor: "black", color: "white" }}>
                {item.caption}
              </span>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
