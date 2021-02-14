import { graphql } from "gatsby";
import React from 'react';
import BirthdayBoysGrid from "../components/BirthdayBoysGrid";

export default function HomePage({ data }) {
  const birthdayBoys = data.birthdayBoys.nodes;
  console.log(birthdayBoys)
  return (
    <>
      <h1>Home</h1>
      {/* <BirthdayBoysGrid birthdayBoys={ birthdayBoys } /> */}
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aliquam eius, sapiente iure ipsum rem ut voluptatibus asperiores ab, placeat, vero quia error! Adipisci corporis maxime aperiam inventore, aspernatur nisi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aliquam eius, sapiente iure ipsum rem ut voluptatibus asperiores ab, placeat, vero quia error! Adipisci corporis maxime aperiam inventore, aspernatur nisi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid sed dignissimos consequatur cumque exercitationem iure ipsum quaerat fugiat repudiandae quisquam perferendis repellendus illo tempore numquam, eaque quo molestiae placeat odio.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aliquam eius, sapiente iure ipsum rem ut voluptatibus asperiores ab, placeat, vero quia error! Adipisci corporis maxime aperiam inventore, aspernatur nisi.</p>
    </>
  );
}

export const pageQuery = graphql`
  query BirthdayBoyQuery {
    birthdayBoys: allSanityBirthdayBoy {
      nodes {
        id,
        name,
        birthday,
        description,
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