import React from "react";
import { graphql } from "gatsby";
import FaqList from "../components/FaqsList";


export default function FaqPage({ data }) {
  const faqs = data.faqs.nodes;
  console.log(faqs);
  return (
    <>
      <h1>Fragen & Antworten</h1>
      <FaqList faqs={ faqs } />
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