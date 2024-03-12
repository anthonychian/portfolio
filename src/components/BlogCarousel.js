import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image1 from "../assets/img/projects/picture/blog1.png";
import Image2 from "../assets/img/projects/picture/blog2.png";
import Image3 from "../assets/img/projects/picture/blog3.png";
import Image4 from "../assets/img/projects/picture/blog4.png";
import Image5 from "../assets/img/projects/picture/blog5.png";
import Image6 from "../assets/img/projects/picture/blog6.png";

import { makeStyles } from "@mui/styles";
import ModalImage from "react-modal-image";

const useStyles = makeStyles(() => ({
  carousel: {
    display: "block",
    margin: "auto",
    height: "500px",
    width: "1000px",
    objectFit: "cover",
    filter: "brightness(70%)",
  },
}));

export default function BlogCarousel() {
  const classes = useStyles();

  const projectData = [
    {
      image: Image1,
      caption: "Home page",
    },
    {
      image: Image2,
      caption: "My blog posts",
    },
    {
      image: Image3,
      caption: "Create new blog post",
    },
    {
      image: Image4,
      caption: "View blog post",
    },
    {
      image: Image5,
      caption: "Registration page",
    },
    {
      image: Image6,
      caption: "Login page",
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
