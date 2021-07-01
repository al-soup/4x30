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

const isItHappeningFaq = {
  question: "Findet die Party wie geplant statt?",
  answer: "YES!! 🥳️ Die Party wurde von der Gemeinde Kallnach bewilligt und wir werden uns an die Corona-Bestimmungen halten."
}

const coronaFaq = {
  question: "Und was ist mit Corona?",
  answer: "Eure Gesundheit liegt uns am Herzen und steht über allem. Wir bitten alle, die nicht doppelt geimpft sind, vor der Anreise noch einen Corona Schnelltest durchzuführen. Im Festzelt gilt zudem Maskenpflicht. Alles weitere werdet ihr vor Ort erfahren."
}

export default function FaqList({ faqs }) {
  return (
    <>
      <FaqsListStyles>
        <FaqCard faq={isItHappeningFaq} />
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