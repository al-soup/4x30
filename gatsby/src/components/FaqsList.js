import React from "react";
import styled from "styled-components";

const FaqsListStyles = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 2rem;
`;

export default function FaqList({ faqs }) {
  return (
    <>
      <FaqsListStyles>
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