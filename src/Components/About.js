import React from 'react';
import styled from 'styled-components';

const TopDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  opacity: .8;
  margin-top: 15px;
  margin-bottom: 25px;
  background-color: #181415;
  border: 1px solid pink;
  `

  const MainDiv = styled.div`
    margin: 40px;
  `

  const BabyDiv = styled.div`
  width: 500px;
  line-height: 1.5;
  font-size: 17px;
`

function About() {
    return (
        <TopDiv className="TopDiv">
            <MainDiv className="MainDiv">
                <BabyDiv className="slide">
                    <h1> About Me</h1>
                    <p>I'm taking the high road
                    I'm high as fuck and these assholes won't shut up
                    Got me laughing, I ain't losin' no sleep
                    I'm taking the high road
                    I'm high as fuck and I don't know where I'll end up
                    But I'm laughing, I ain't losin' no sleep</p>
                </BabyDiv>
            </MainDiv>
        </TopDiv>
    )
}

export default About;
