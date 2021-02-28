import React from "react";
import { graphql } from "gatsby";
import FaqList from "../components/FaqsList";
import SEO from "../components/SEO";


export default function FaqPage({ data }) {
  const faqs = data.faqs.nodes;
  console.log(faqs);
  return (
    <>
      <SEO title="FAQs" />
      <h1>Fragen & Antworten</h1>
      <FaqList faqs={ faqs } />
      {/* TODO: Corona hervorheben */}
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