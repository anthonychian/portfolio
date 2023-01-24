import React from 'react'
import Button from 'react-bootstrap/Button';

import SpotifyCarousel from '../../components/SpotifyCarousel';
import GenshinCarousel from '../../components/GenshinCarousel';
import BlogCarousel from '../../components/BlogCarousel';
import LostArkCarousel from '../../components/LostArkCarousel';
import CoffeeCarousel from '../../components/CoffeeCarousel';
import styled from "styled-components";

import './projects.style.css'

const MyTitle = styled.div`
    font-size: 2.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #66fcf1;
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 300;
    letter-spacing: 5px;
    padding-bottom: 2em;
`;

export default function Projects() {

    return (
        <div id='projects' className="pt-4 projects">
            
            <div className="pt-5 projects">
                <MyTitle>
                    Projects
                </MyTitle>
                <SpotifyCarousel/>
                <div style={{ margin: 'auto', width: '80%', padding: '2em 0 1em 0'}}>
                    A music visualizer website made with the <a href="https://developer.spotify.com/documentation/web-api/"> Spotify API, React, Javascript, Nodejs </a>
                    , and the <a href="https://docs.genius.com/"> Genius API </a>. Features user authenticaiton via spotify premium account, built in music player that plays tracks with corresponding lyrics for each song, displays user playlists, dynamic background color and particles,
                    responsive web design that includes mobile view.
                </div>
                <div className="pb-5 projectbuttons">
                    <div className="btn">
                        <a href="https://github.com/anthonychian/spotifyapp" target="_blank" rel="noopener noreferrer">
                            <Button className="m-2" variant="outline-primary">Github</Button>
                        </a>
                    </div>
                    {/* <div className="btn">
                        <a href="https://spotify-api-react-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <Button className="m-2" variant="outline-primary">Website</Button>
                        </a>
                    </div> */}
                </div>
                <GenshinCarousel/>
                <div style={{ margin: 'auto', width: '80%', padding: '2em 0 1em 0'}}>
                    A database website for Genshin Impact. Made using <a href="https://genshin.dev/"> genshin.dev </a> api, React, Javascript Nodejs.
                    Features character selection page, character detail page, game data (attributes, skills, and items). Realtime updates that reflect in game content via genshin.dev. 
                </div>
                <div className="pb-5 projectbuttons">
                    <div className="btn">
                        <a href="https://github.com/anthonychian/genshin" target="_blank" rel="noopener noreferrer">
                            <Button className="m-2" variant="outline-primary">Github</Button>
                        </a>
                    </div>
                    {/* <div className="btn">
                        <a href="https://genshin-website.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <Button className="m-2" variant="outline-primary">Website</Button>
                        </a>
                    </div> */}
                </div>
                <BlogCarousel/>
                <div style={{ margin: 'auto', width: '80%', padding: '2em 0 1em 0'}}>
                    A full stack blog website. Allows users to create, edit, delete, like and display their blog posts. Features home page, my blogs page, creation page, editing page, user authenticaiton.
                </div>
                <div className="pb-5 projectbuttons">
                    <div className="btn">
                        <a href="https://github.com/anthonychian/blogger" target="_blank" rel="noopener noreferrer">
                            <Button className="m-2" variant="outline-primary">Github</Button>
                        </a>
                    </div>
                </div>
                <LostArkCarousel/>
                <div style={{ margin: 'auto', width: '80%', padding: '2em 0 1em 0'}}>
                    A full stack build simulator for Lost Ark. Features saving and loading builds as well as an authentication system. Made using React, Redux, Firebase, Javascript, Nodejs.
                </div>
                <div className="pb-5 projectbuttons">
                    <div className="btn">
                        <a href="https://github.com/anthonychian/lostark" target="_blank" rel="noopener noreferrer">
                            <Button className="m-2" variant="outline-primary">Github</Button>
                        </a>
                    </div>
                </div>
                <CoffeeCarousel/>
                <div style={{ margin: 'auto', width: '80%', padding: '2em 0 1em 0'}}>
                    Simple landing page for a cafe. Includes menu items, sidebar menu navigation, responsive web design. 
                </div>
                <div className="pb-5 projectbuttons">
                    <div className="btn">
                        <a href="https://github.com/anthonychian/coffee" target="_blank" rel="noopener noreferrer">
                            <Button className="m-2" variant="outline-primary">Github</Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
