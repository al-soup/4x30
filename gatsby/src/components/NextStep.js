import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const NextStepStyled = styled.div`
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8rem;
`;

export default function NextStep({ text, link }) {
  return (
    <NextStepStyled>
      <Link to={link}>{text}</Link>
    </NextStepStyled>
  )
}