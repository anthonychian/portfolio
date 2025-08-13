import React from "react";
import Button from "react-bootstrap/Button";

import SpotifyCarousel from "../../components/SpotifyCarousel";
import ShadowverseCarousel from "../../components/ShadowverseCarousel";
import GenshinCarousel from "../../components/GenshinCarousel";
import BlogCarousel from "../../components/BlogCarousel";
import LostArkCarousel from "../../components/LostArkCarousel";
import styled from "styled-components";

import "./projects.style.css";

const MyTitle = styled.div`
  font-size: 2.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #66fcf1;
  text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
  font-weight: 300;
  letter-spacing: 5px;
  padding-bottom: 0em;
`;

export default function Projects() {
  return (
    <div id="projects" className="pt-4 projects">
      <div className="pt-5 projects">
        <MyTitle>Projects</MyTitle>
        <section className="spotifyProject">
          <SpotifyCarousel />
          <div style={{ width: "80%", padding: "2em 0 1em 0" }}>
            A music visualizer website made with{" "}
            <a href="https://developer.spotify.com/documentation/web-api/">
              Spotify API
            </a>
            ,{" "}
            <b style={{ color: "orange" }}>
              React, Javascript, HTML/CSS, Nodejs, Express
            </b>
            , and <a href="https://docs.genius.com/">Genius API</a>. Features
            user authenticaiton via spotify premium account, built in music
            player with song lyrics, displays user playlists, dynamic background
            color and particles, responsive web design that includes mobile
            view.
          </div>
          <div className="pb-5 projectbuttons">
            <div className="btn">
              <a
                href="https://github.com/anthonychian/spotifyapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="m-2" variant="outline-primary">
                  Github
                </Button>
              </a>
            </div>
          </div>
        </section>
        <section className="shadowverseProject">
          <ShadowverseCarousel />
          <div style={{ width: "80%", padding: "2em 0 1em 0" }}>
            An online multiplayer card game simulator for Shadowverse Evolve.
            Features deck creation with 1000+ cards, 1v1 battles with real-time
            player communication, card database. Made using{" "}
            <b style={{ color: "orange" }}>
              {" "}
              React, Javascript, HTML/CSS, Node.js, Express, Socket.IO
            </b>
            .
          </div>
          <div className="pb-5 projectbuttons">
            <div className="btn">
              <a
                href="https://sveclient.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="m-2" variant="outline-primary">
                  Demo
                </Button>
              </a>
            </div>
            <div className="btn">
              <a
                href="https://github.com/anthonychian/shadowverse-client"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="m-2" variant="outline-primary">
                  Github
                </Button>
              </a>
            </div>
          </div>
        </section>
        <section className="lostarkProject">
          <LostArkCarousel />
          <div style={{ width: "80%", padding: "2em 0 1em 0" }}>
            A full-stack build simulator for Lost Ark. Features saving and
            loading builds, as well as an authentication system. Made using
            <b style={{ color: "orange" }}>
              {" "}
              React, Javascript, HTML/CSS, Firebase, Nodejs, Express
            </b>
            .
          </div>
          <div className="pb-5 projectbuttons">
            <div className="btn">
              <a
                href="https://github.com/anthonychian/lostark"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="m-2" variant="outline-primary">
                  Github
                </Button>
              </a>
            </div>
          </div>
        </section>
        <section className="genshinProject">
          <GenshinCarousel />
          <div style={{ width: "80%", padding: "2em 0 1em 0" }}>
            A database website for Genshin Impact. Made using{" "}
            <a href="https://genshin.dev/"> genshin.dev API</a>,{" "}
            <b style={{ color: "orange" }}>
              {" "}
              React, Javascript, HTML/CSS, Nodejs
            </b>
            . Features character selection page, character detail page, game
            data (attributes, skills, and items). Realtime updates that reflect
            in game content.
          </div>
          <div className="pb-5 projectbuttons">
            <div className="btn">
              <a
                href="https://github.com/anthonychian/genshin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="m-2" variant="outline-primary">
                  Github
                </Button>
              </a>
            </div>
            <div className="btn">
              <a
                href="https://genshin-database.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="m-2" variant="outline-primary">
                  Demo
                </Button>
              </a>
            </div>
          </div>
        </section>
        <section className="blogProject">
          <BlogCarousel />
          <div style={{ width: "80%", padding: "2em 0 1em 0" }}>
            A full-stack blog website. Allows users to create, edit, delete,
            like and display their blog posts. Features home page, my blogs
            page, creation page, editing page, user authenticaiton. Made using{" "}
            <b style={{ color: "orange" }}>
              Vanilla JS, HTML/CSS, MongoDB, Express, Cloudinary
            </b>
            .
          </div>
          <div className="pb-5 projectbuttons">
            <div className="btn">
              <a
                href="https://github.com/anthonychian/blogger"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="m-2" variant="outline-primary">
                  Github
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
