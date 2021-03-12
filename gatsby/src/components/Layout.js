import "normalize.css";
import React from "react";
import styled from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import Typography from "../styles/Typography";
import Footer from "./Footer";
import Nav from "./Nav";


const SiteBorderStyles = styled.div`
  max-width: 1200px;
  margin: 12em auto 4rem auto;
  margin-top: 0;
   /* margin-top: clamp(2rem, 10vh, 12rem); */
  background: var(--darkgreen);
  padding: 0 0.3rem 0.3rem 0.3rem;
  box-shadow: 0 0 5px 3px rgba(0,0,0,0.15);
  border: 5px solid var(--yellow);
  @media(max-width: 1300px) {
    margin-right: 1.5rem;
    margin-left: 1.5rem;
  }
`;

const ContentStyles = styled.div`
  background: var(--yellow);  
  padding: 2rem;
  padding-bottom: 8rem;
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <SiteBorderStyles>  
        <ContentStyles>
          <Nav />
          { children }
        </ContentStyles>
        <Footer />
      </SiteBorderStyles>
    </>
  );
}