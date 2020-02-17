import React from 'react';
import styled from 'styled-components';
import { FacebookSquare } from 'styled-icons/boxicons-logos/FacebookSquare';
import { Github } from 'styled-icons/boxicons-logos/Github';
import { LinkedinSquare } from 'styled-icons/boxicons-logos/LinkedinSquare';
import { Instagram } from 'styled-icons/boxicons-logos/Instagram';
import { Spotify } from 'styled-icons/boxicons-logos/Spotify';

const Div = styled.div`
text-align: center;
margin: 5px;
`
const A = styled.a`
color: black;
`

function Footer() {
    return (
        <Div>
            <A href="http://www.facebook.com/adambullet" target="_blank"><FacebookSquare className="footer-icons" /></A>
            <A href="https://github.com/adamcpenman" target="_blank"><Github className="footer-icons" /></A>
            <A href="https://www.linkedin.com/in/adamcpenman/" target="_blank"><LinkedinSquare className="footer-icons" /></A>
            <A href="https://www.instagram.com/adambullet/" target="_blank"><Instagram className="footer-icons" /></A>
            <A href="https://open.spotify.com/playlist/22J8LlcJBk3Qmd0m07dw8T?si=R6fjSZD5R-Cyj7HdziPsPg" target="_blank"><Spotify className="footer-icons" /></A>
            <h5>Adam Penman ©2019</h5>
        </Div>
    )
}

export default Footer;