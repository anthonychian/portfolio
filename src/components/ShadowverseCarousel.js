import React from "react";
import Carousel from "react-bootstrap/Carousel";

import shadowverseHome from "../assets/img/projects/picture/shadowverse0.png";
import shadowverseField from "../assets/img/projects/picture/shadowverse1.png";
import shadowverseView from "../assets/img/projects/picture/shadowverse2.png";
import shadowverseDeck from "../assets/img/projects/picture/shadowverse3.png";

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

export default function ShadowverseCarousel() {
  const classes = useStyles();

  const projectData = [
    {
      image: shadowverseHome,
      caption: "Home Page",
    },
    {
      image: shadowverseView,
      caption: "View Card",
    },
    {
      image: shadowverseDeck,
      caption: "Deck Creation",
    },
    {
      image: shadowverseField,
      caption: "Multiplayer 1v1",
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
