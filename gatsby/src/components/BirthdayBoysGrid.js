import React from "react"; 
import Img from "gatsby-image";
import styled from "styled-components";
import BirthdayBoyCardStyles from "../styles/BirthdayBoyCardStyles";

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


function BirthdayBoyCard({ birthdayBoy }) {
  return (
    <>
      <BirthdayBoyCardStyles>
          <h2>{birthdayBoy.name}</h2>
          <Img fluid={birthdayBoy.image.asset.fluid} alt={birthdayBoy.name}/>
          <div className="detail-container">
            <span className="detail"><i>{birthdayBoy.birthday}</i></span><br/>
            <span className="detail">{birthdayBoy.description}</span>
          </div>
      </BirthdayBoyCardStyles>
    </>
  );
};