import React from 'react';

import { Html5 } from 'styled-icons/boxicons-logos/Html5';
import { FileCss } from 'styled-icons/boxicons-solid/FileCss';
import { Javascript } from 'styled-icons/boxicons-logos/Javascript';
import { ReactLogo } from 'styled-icons/boxicons-logos/ReactLogo';
import { Git } from 'styled-icons/boxicons-logos/Git';
import { Bootstrap } from 'styled-icons/boxicons-logos/Bootstrap';
import { Node } from 'styled-icons/fa-brands/Node';
import { Redux } from 'styled-icons/boxicons-logos/Redux';
import { Sass } from 'styled-icons/boxicons-logos/Sass';
import Knex from '../Images/knex.png';
import SQL from '../Images/SQL.png';

function Languages() {
  return (
    <div className='border'>
      {/* <h1 className="langTitle">Langauges & Libraries</h1>
      <div className="mainDiv">
        <div className="topDiv">

          <div className="babyDiv">

            <Html5 className="icon" title="HTML" />
            <FileCss className="icon" title="CSS" />
            <Javascript className="icon" title="Javascript" />
            <ReactLogo className="icon" title="React" />
            <br/>
            <Redux className="icon" title="Redux" />
            <Sass className="icon" title="Sass" />
            <Bootstrap className="icon" title="Bootstrap" />
             <Git className="icon" title="Git"/>
             <br/>
            
            <Node className='icon' title="Node.JS" />
             <img src={Knex} alt="knex" title="knex" className="icon2" />
            <img src={SQL} alt="SQL" title="SQL" className="icon2" />

          </div>
          <p className="pL"> For a full list of languages, libaries, and frameworks - Take a look at my resume <a href="https://resume.creddle.io/resume/30s59fxpaxv" target="_blank">here</a></p>
        </div>
      </div> */}
    </div>
  );
}

export default Languages;
