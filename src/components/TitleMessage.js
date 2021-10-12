import React from 'react'
import styled from "styled-components";
import Typewriter from 'typewriter-effect';

const MyTitleMessage = styled.h1`
  height: 100%;
  width: 100%;
  position: absolute;

  z-index: 1; 
  strong {
    font-size: 1.4em;
  }
  .titleMessage {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
  }
  div {
    color: #66fcf1;
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 300;
    letter-spacing: 10px;
    .main {
      font-size: clamp(0.7em, 5vw, 1.3em);
      letter-spacing: 7px;
    }
    .sub {
      font-size: clamp(0.5em, 4vw, 1em);
      letter-spacing: 3px;
    }

    @media only screen and (max-width: 768px) {
      letter-spacing: 3px;
    }
  }
  
`;


export default function TitleMessage() {
    return (
        <MyTitleMessage>
            <div className="titleMessage">
                <div className="heading">
                    <div className="main text-center mb-3">
                        <br />
                        <span>
                            <strong>Anthony Chian</strong>
                        </span>
                    </div>
                    <div className="sub text-center ">
                        <Typewriter
                            options={{
                                strings: ['Web Developer', 'Experienced in Full Stack', 'UCSC Class of 2020'],
                                autoStart: true,
                                loop: true,
                                delay: 20
                            }}
                        />
                    </div>
                </div>
            </div>
        </MyTitleMessage>
    )
}