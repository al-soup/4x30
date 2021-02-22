import React from "react";
import styled from "styled-components";
import Logo from "../assets/images/svg/logo.inline.svg";

// TODO: Adaot for different screens:
// wider on medium screens
// full on mobile
const LogoStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    max-width: 60%;
  }
`;

export default function HippieLogo() {
  return (
    <LogoStyles>
      <Logo />
    </LogoStyles>
  )
}