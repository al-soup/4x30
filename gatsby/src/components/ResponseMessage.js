import React from "react";
import styled from "styled-components";

export default function ResponseMessage({  message, success }) {

  const StyledResponseMessage = styled.div`
    font-size: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    text-align: center;
  `;

  return (
    <StyledResponseMessage className={ success ? "success" : "error" }>
      {message}
    </StyledResponseMessage>
  );
}