import React from "react";
import styled from "styled-components";
import { FaGithub as GithubIcon } from "react-icons/fa";
import Flower from "../assets/images/svg/flower.inline.svg";
import Smile from "../assets/images/svg/smile.inline.svg";
import LoungeLogo from "../assets/images/img/Lounge_Logo_sw.png";


const FooterStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 2rem;
  padding: 2rem;
  p {
    margin: 1rem 0 1rem 0;
    font-size: 1.5rem;
  }

  svg.smile {
    width: 8rem;
    margin: 1rem;
  }
  svg.flower {
    @media(max-width: 632px) {
      width: 10rem;
    }
    @media(max-width: 440px) {
      display: none;
    } 
    width: 20rem;
    justify-self: end
  }
  svg.github {
    vertical-align: text-bottom;
  }
  .flower-container {
    justify-content: end;
    display: flex;
  }
  .smile-container {
    @media(max-width: 720px) {
      display: none;
    } 
    display: flex;
    justify-content: start;
  }
  img.loungeLogo {
    max-width: 25rem;
  }

`;

export default function Footer() {
  return (
    <FooterStyles>
      <div>
        <p>Webseite von Alex | <a href="https://github.com/al-soup/4x30" target="_blank" rel="noreferrer"><wbr/>source code &nbsp;<GithubIcon className="github" /></a></p>
        <p>Logo & Flyer von Chantal Kocher</p>
        <p>&copy; 4x30 Truppe { new Date().getFullYear() }</p>
        <a href="http://www.hospitium.ch/" target="_blank" rel="noreferrer">
          <img className="loungeLogo" src={LoungeLogo} alt="Logo Hospitium Lounge"/>
        </a>
      </div>
      <div className="smile-container">
        <Smile className="smile" />
      </div>
      <div className="flower-container">
        <Flower className="flower" />
      </div>
    </FooterStyles>
  )
}