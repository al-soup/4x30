import React from "react";
import styled from "styled-components";
import { FaGithub as GithubIcon } from "react-icons/fa";

const FooterStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 2rem;
  p {
    margin: 0;
    font-size: 1.5rem;
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div>
        <p>&copy; 4x30 Truppe { new Date().getFullYear() }</p>
      </div>
      <div>
        <p>&copy; 4x30 Truppe { new Date().getFullYear() }</p>
      </div>
    </FooterStyles>
  )
}