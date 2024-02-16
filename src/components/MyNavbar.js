import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  logo: {
    width: "25%",
  },
  navName: {
    fontSize: "20px",
  },
  navTitle: {
    fontSize: "12px",
  },
  navTheme: {
    backgroundColor: "#101018f8",
    fontSize: "20px",
  },
  animateNavbar: {
    boxShadow: "1px 1px 1px #222",
    animation: "moveDown 1s ease-in-out",
  },
}));

export default function MyNavbar() {
  const classes = useStyles();

  return (
    <>
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="md"
        variant="dark"
        className={`${classes.animateNavbar} ${classes.navTheme} justify-content-between`}
      >
        <Navbar.Brand href="#home">
          <div className={classes.navName}>Anthony Chian</div>
          <div className={classes.navTitle}>Full Stack Developer</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
