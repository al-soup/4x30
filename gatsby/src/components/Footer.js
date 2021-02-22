import React from "react";
import styled from "styled-components";
import { FaGithub as GithubIcon } from "react-icons/fa";
import Flower from "../assets/images/svg/flower.inline.svg";
import Smile from "../assets/images/svg/smile.inline.svg";


const FooterStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
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
    width: 20rem;
    justify-self: end
  }
  svg.github {
    vertical-align: text-bottom;
  }
  .right {
    justify-content: end;
    display: flex;
  }
  .smile-container {
    display: flex;
    justify-content: start;
  }

`;

export default function Footer() {
  return (
    <FooterStyles>
      <div>
        <p>Webseite von Alex Kräuchi | <a href="https://github.com/al-soup/4x30" target="_blank"><wbr/>source code &nbsp;<GithubIcon className="github" /></a></p>
        <p>Logo & Flyer von Chantal Kocher</p>
        <p>&copy; 4x30 Truppe { new Date().getFullYear() }</p>
        <div className="smile-container">
        <Smile className="smile" />
        </div>
      </div>
      <div className="right">
        <Flower className="flower" />
      </div>
    </FooterStyles>
  )
}