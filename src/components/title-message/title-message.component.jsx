import React from 'react'
import styled from "styled-components";
import Typewriter from 'typewriter-effect';

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
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
      font-size: 55px;
    }
    .sub {
      font-size: 32px;
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
                                strings: ['Aspiring Web Developer', 'Experienced in Full Stack', 'UCSC Class of 2020'],
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
