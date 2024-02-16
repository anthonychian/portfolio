import React from "react";
import Carousel from "react-bootstrap/Carousel";

import spotifyParticlesGif from "../assets/img/projects/picture/spotify_song.gif";
import spotifySongChangeGif from "../assets/img/projects/picture/spotify_songchange.gif";
import spotifyPlaylistGif from "../assets/img/projects/picture/spotify_playlist.gif";
import spotifyLyricsGif from "../assets/img/projects/picture/spotify_lyrics.gif";

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
      image: spotifySongChangeGif,
      caption: "Dynamic background color",
    },
    {
      image: spotifyLyricsGif,
      caption: "Lyrics display view",
    },
    {
      image: spotifyPlaylistGif,
      caption: "Playlist Selection",
    },
    {
      image: spotifyParticlesGif,
      caption: "Particle Effects",
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
