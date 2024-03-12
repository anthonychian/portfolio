import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image1 from "../assets/img/projects/picture/lostark1.png";
import Image2 from "../assets/img/projects/picture/lostark2.png";
import Image3 from "../assets/img/projects/picture/lostark3.png";
import Image5 from "../assets/img/projects/picture/lostark4.png";

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

export default function LostArkCarousel() {
  const classes = useStyles();

  const projectData = [
    {
      image: Image2,
      caption: "Create builds",
    },
    {
      image: Image3,
      caption: "Save and load builds",
    },
    {
      image: Image1,
      caption: "Class Selection",
    },
    {
      image: Image5,
      caption: "Log In",
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
