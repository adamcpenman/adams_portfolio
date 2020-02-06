import React from 'react';
import styled from "styled-components";

import { Html5 } from 'styled-icons/boxicons-logos/Html5';
import { FileCss } from 'styled-icons/boxicons-solid/FileCss';
import { Javascript } from 'styled-icons/boxicons-logos/Javascript';
import { ReactLogo } from 'styled-icons/boxicons-logos/ReactLogo';
import { Less } from 'styled-icons/boxicons-logos/Less';
import { Bootstrap } from 'styled-icons/boxicons-logos/Bootstrap';
import { Node } from 'styled-icons/fa-brands/Node';
import { Redux } from 'styled-icons/boxicons-logos/Redux';
import { Sass } from 'styled-icons/boxicons-logos/Sass';
import Knex from '../Images/knex.png';
import SQL from '../Images/SQL.png';


const TopCardHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const MainDiv = styled.div`
width: 100%;
max-width: 40rem;
margin: 10px auto;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
border: 1px solid black;
 border-radius: 5px;
  box-shadow: 5px 5px 8px #000000;
  transition: all 0.5s;
  &:hover {
    transform: translateY(-1rem) scale(1.03);
    box-shadow: 6px 6px 20px #000000;
  }
`

const Div = styled.div`
  width: 100%;
  max-width: 20rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 25px 15px;
  margin: 0 auto;
  text-align: center;
  border-radius: 5px;
  background-color: black;
  box-shadow: 5px 5px 8px #000000;
  transition: all 0.5s;
  &:hover {
    transform: translateY(-1rem) scale(1.03);
    box-shadow: 6px 6px 20px #000000;
  }
`;

const H1 = styled.h1`
  width: 100%;
  text-align: center;
`;

function Languages() {
  return (
    <MainDiv>
       <TopCardHolder className="">
        <H1>Languages and Libraires</H1>
        <Div>
          <Html5 className="icon" title="HTML"/>
          <FileCss className="icon" title="CSS"/>
          <Javascript className="icon" title="Javascript"/>
          <br/>
          <img src={Knex} alt="knex" title="knex" className="icon2" />
          <Node className='icon' title="Node.JS"/>
          <img src={SQL} alt="SQL" title="SQL" className="icon2" />
            <br/>
         <ReactLogo className="icon" title="React"/>
          <Redux className="icon" title="Redux"/>
          <Sass className="icon" title="Sass"/>
          <Bootstrap className="icon" title="Bootstrap"/>
           
          </Div>
      </TopCardHolder> 
     </MainDiv>
  );
}

export default Languages;