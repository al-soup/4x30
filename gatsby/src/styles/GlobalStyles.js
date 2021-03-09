import { createGlobalStyle } from 'styled-components';
import dots from '../assets/images/svg/dots.svg';

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #af505a;
    --black: #2E2E2E;
    --yellow: #FFFDD8;
    --darkwhite: #fdfcfa;
    --white: #fff;
    --grey: #efefef;
    --turquoise: #d3f0de;
    --orange: #da9057;
    --darkgreen: #729981;
    --green: #c4ca74;

    --bottom: 10rem; 
  }

  html {
    /* background by SVGBackgrounds.com */
    background-image: url(${dots});
    background-size: 450px;
    background-attachment: fixed;
    font-size: 10px;
    @media(max-width: 1300px) {
      background-size: 300px;
    }
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  button {
    background: var(--orange);
    color: white;
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
    cursor: pointer;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--grey);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
    }
  }

    // TODO: Try different img renderers
  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--red) var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--red) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }

  img {
    max-width: 100%;
  }

  .tilt {
    transform: rotate(-2deg);
    position: relative;
    display: inline-block;
  }

`;

export default GlobalStyles;
