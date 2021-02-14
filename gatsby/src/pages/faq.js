import React from "react";
import { graphql } from "gatsby";


export default function FaqPage({ data: { faqs }}) {
  console.log(faqs);
  return (
    <>
      <h1>Fragen & Antworten</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aliquam eius, sapiente iure ipsum rem ut voluptatibus asperiores ab, placeat, vero quia error! Adipisci corporis maxime aperiam inventore, aspernatur nisi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aliquam eius, sapiente iure ipsum rem ut voluptatibus asperiores ab, placeat, vero quia error! Adipisci corporis maxime aperiam inventore, aspernatur nisi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aliquam eius, sapiente iure ipsum rem ut voluptatibus asperiores ab, placeat, vero quia error! Adipisci corporis maxime aperiam inventore, aspernatur nisi.</p>
    </>
  )
}

export const pageQuery = graphql`
  query FaqBoyQuery {
    faqs: allSanityFaq {
      nodes {
        answer
        question
      }
    }
  }
`;