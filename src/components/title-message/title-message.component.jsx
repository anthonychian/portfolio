import React from 'react'
import styled from "styled-components";
import Typewriter from 'typewriter-effect';

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 50%;
  z-index: 1;
  margin-top: -5em;
  text-align: center;
  strong {
    font-size: 1.4em;
  }
  div {
    color: #66fcf1;
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 300;
    letter-spacing: 7px;
    
    .main {
      font-size: clamp(0.5em, 5vw, 1.3em);
    }
    .sub {
      font-size: clamp(0.3em, 4vw, 1em);
      letter-spacing: 2px;
    }
  }
`;

const TitleMessage = () => {
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
                    <div className="sub">
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

export default TitleMessage
