import React from "react"; 
import Img from "gatsby-image";
import styled from "styled-components";

const BirthdayBoysGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 4rem;
  grid-auto-rows: 300px auto auto auto;
`;

export default function BirthdayBoysGrid({ birthdayBoys }) {
  return (
    <>
      <BirthdayBoysGridStyles>
        {birthdayBoys.map(birthdayBoy => <BirthdayBoyCard key={birthdayBoy.id} birthdayBoy={birthdayBoy} />)}
      </BirthdayBoysGridStyles>
    </>
  );
};

const BirthdayBoyCardStyles = styled.div`
  display: grid;
  @supports not (grid-template-rows: subgrid) {
    grid-template-rows: 1fr, auto, auto, auto
  }
  grid-template-rows: subgrid; /* Row sizing from BirthdayBoysGridStyles */
  grid-row: span 4;
  grid-gap: 1rem;
  h2 {
    text-align: left;
  }
  h2, p {
    margin: 0;
  }
`;

function BirthdayBoyCard({ birthdayBoy }) {
  return (
    <>
      <BirthdayBoyCardStyles>
          <Img fluid={birthdayBoy.image.asset.fluid} alt={birthdayBoy.name}/>
          <h2>{birthdayBoy.name}</h2>
          <p>{birthdayBoy.birthday}</p>
          <p>{birthdayBoy.description}</p>
      </BirthdayBoyCardStyles>
    </>
  );
};