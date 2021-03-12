import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const NextStyled = styled.div`
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8rem;
`;

export default function({ text, link }) {
  return (
    <NextStyled>
      <Link to={link}>{text}</Link>
    </NextStyled>
  )
}