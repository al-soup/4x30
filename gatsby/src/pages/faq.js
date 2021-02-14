import React from "react";
import { graphql } from "gatsby";
import FaqList from "../components/FaqsList";


export default function FaqPage({ data }) {
  const faqs = data.faqs.nodes;
  console.log(faqs);
  return (
    <>
      <h1>Fragen & Antworten</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aliquam eius, sapiente iure ipsum rem ut voluptatibus asperiores ab, placeat, vero quia error! Adipisci corporis maxime aperiam inventore, aspernatur nisi.</p>
      <FaqList faqs={faqs} />
    </>
  )
}

export const pageQuery = graphql`
  query FaqBoyQuery {
    faqs: allSanityFaq {
      nodes {
        id
        answer
        question
      }
    }
  }
`;