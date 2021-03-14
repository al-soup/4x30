import React from "react";
import styled from "styled-components";
import Logo from "../assets/images/svg/logo.inline.svg";

const LogoStyles = styled.div`
  text-align: center;
  svg {
    max-width: 60%;
    @media (max-width: 900px) {
      max-width: 75%;
    }
    @media (max-width: 500px) {
      max-width: 90%;
    }
  }
`;

export default function HippieLogo() {
  return (
    <LogoStyles>
      <Logo />
    </LogoStyles>
  )
}