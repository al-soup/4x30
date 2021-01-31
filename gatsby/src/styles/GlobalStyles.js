import { createGlobalStyle } from 'styled-components';
import peeps from '../assets/images/peeps.svg';
import stripes from '../assets/images/stripes.svg';

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #af505a;
    --black: #2E2E2E;
    --yellow: #FFFDD8;
    --darkwhite: #fdfcfa;
    --white: #fff;
    --grey: #efefef;
    --turquoise: #d3f0de;
    --orange: #b9834d;
    --darkgreen: #729981;
    --green: #afb464;
  }
  html {
    /* background by SVGBackgrounds.com */
    background-image: url(${peeps});
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
    background: var(--red);
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

  hr {
    /* TODO: Change HR  */
    border: 0;
    height: 8px;
    background-image: url(${stripes});
    background-size: 1500px;
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
