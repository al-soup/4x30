import { graphql } from "gatsby";
import React from 'react';
import styled from "styled-components";
import BirthdayBoysGrid from "../components/BirthdayBoysGrid";
import HippieLogo from "../components/HippieLogo";
import SEO from "../components/SEO";
import NextStep from "../components/NextStep";

const HomePageStyles = styled.div`
  p.subtitle {
    font-size: 3rem;
    text-align: center;
    margin: 4rem 0 4rem 0;
    @media (max-width: 500px) {
    font-size: 2rem;
  }
  }
`;

export default function HomePage({ data }) {
  const birthdayBoys = data.birthdayBoys.nodes;
  return (
    <>
      <SEO title="Let's go!" />
      <HomePageStyles>
        <HippieLogo />
        <p className="subtitle">Alex, Moritz, Luca und Nils kennen sich seit Schulzeiten und werden alle dieses Jahr 30 Jahre alt. Aus diesem Anlass wollen wir gemeinsam mit unseren Freunden und Familienangehörigen ein schönes und unvergessliches Fest durchführen. Gemäss dem Motto Woodstock nehmen wir uns 3 Tage Zeit fürs gemütliche Beisammensein, den Sommer und die Natur zu geniessen, zum Schlemmen, zur Musik zu tanzen und zu feiern.</p>
        <h1>Birthday Boys</h1>
        <BirthdayBoysGrid birthdayBoys={ birthdayBoys } />
        <NextStep link={"/infos"} text={"Okay...um was geht es genau? Hier mehr Infos"}></NextStep>
      </HomePageStyles>
    </>
  );
}

export const pageQuery = graphql`
  query BirthdayBoyQuery {
    birthdayBoys: allSanityBirthdayBoy {
      nodes {
        id,
        name
        birthday
        description
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;