import React from 'react';
import styled from 'styled-components';
import { FacebookSquare } from 'styled-icons/boxicons-logos/FacebookSquare';
import { Github } from 'styled-icons/boxicons-logos/Github';
import { LinkedinSquare } from 'styled-icons/boxicons-logos/LinkedinSquare';
import { Instagram } from 'styled-icons/boxicons-logos/Instagram';
import { Spotify } from 'styled-icons/boxicons-logos/Spotify';

const A = styled.a`
  color: black;
`;

function Footer() {
  return (
    <div className='footerDiv'>
      <A href='http://www.facebook.com/adambullet' target='_blank'>
        <FacebookSquare className='footer-icons' />
      </A>
      <A href='https://github.com/adamcpenman' target='_blank'>
        <Github className='footer-icons' />
      </A>
      <A href='https://www.linkedin.com/in/adamcpenman/' target='_blank'>
        <LinkedinSquare className='footer-icons' />
      </A>
      <A href='https://www.instagram.com/adambullet/' target='_blank'>
        <Instagram className='footer-icons' />
      </A>
      <A
        href='https://open.spotify.com/playlist/1St1SvL1bH7ieuzJpsFPXU?si=bp6trk1GSLKGjFiVJ6K9BA'
        target='_blank'
      >
        <Spotify className='footer-icons' />
      </A>
      <h5>Adam Penman ©2020</h5>
    </div>
  );
}

export default Footer;
