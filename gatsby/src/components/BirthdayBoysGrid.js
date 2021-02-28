import React from "react"; 
import Img from "gatsby-image";
import styled from "styled-components";

const BirthdayBoysGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 4rem;
  grid-auto-rows: auto 300px auto auto;
  margin-top: 2rem;
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
    grid-template-rows: auto, 1fr, auto, auto
  }
  grid-template-rows: subgrid; /* Row sizing from BirthdayBoysGridStyles */
  grid-row: span 4;
  grid-gap: 1rem;
  h2 {
    transform: rotate(-1deg);
    text-align: center;
    display: inline;
    margin-bottom: -2rem;
    z-index: 4;
    background-color: var(--orange);
    padding: 0 2px 2px 2px;
  }
  .detail-container {
    transform: rotate(1deg);
    text-align: center;
    margin-top: -2rem;
  }
  .detail {
    background-color: var(--orange);
    font-size: 3rem;
    padding: 3px;
  }
`;

function BirthdayBoyCard({ birthdayBoy }) {
  return (
    <>
      <BirthdayBoyCardStyles>
          <h2>{birthdayBoy.name}</h2>
          <Img fluid={birthdayBoy.image.asset.fluid} alt={birthdayBoy.name}/>
          <div className="detail-container">
            <span className="detail">{birthdayBoy.birthday}</span><br/>
            <span className="detail">{birthdayBoy.description}</span>
          </div>
      </BirthdayBoyCardStyles>
    </>
  );
};