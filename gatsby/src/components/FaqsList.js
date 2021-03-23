import React from "react";
import styled from "styled-components";

const FaqsListStyles = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  @media(max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const coronaFaq = {
  question: "Und was ist mit Corona?",
  answer: "Wir werden uns selbstverständlich an die Massnahmen des Bundes und Kantons halten und den Event nur durchführen, insofern dies die pandemische Lage zulässt. Eure Gesundheit liegt uns am Herzen und steht über allem. News und allfälliges Schutzkonzept werden wir hier auf unserer Webseite kommunizieren."
}

export default function FaqList({ faqs }) {
  return (
    <>
      <FaqsListStyles>
        <FaqCard faq={coronaFaq} />
        {faqs.map(faq => <FaqCard key={faq.id} faq={faq} />)}
      </FaqsListStyles>
    </>
  )
}

const FaqCardStyles = styled.div`
  background-color: var(--turquoise);
  padding: 1rem;
  border-radius: 8px;
  p {
    margin-bottom: 0;
    text-align:  center;
  }
`;

function FaqCard({ faq }) {
  return (
    <>
      <FaqCardStyles>
        <h2>{faq.question}</h2>
        <p>{faq.answer}</p>
      </FaqCardStyles>
    </>
  );
}