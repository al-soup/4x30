import React from "react";
import { useState } from "react";
import styled from "styled-components";
import SEO from "../components/SEO";

const SignupPageStyles = styled.div`
  font-size: 2rem;
`;

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <SEO title="Anmelden" />
      <SignupPageStyles>
        <h1>Anmelden</h1>
        {/* TODO: Einleitungstext */}
        <form>
          <fieldset>
            <legend>Wer bist du?</legend>
            <label htmlFor="name">Vor- & Nachname</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <legend>Wann bist du anwesend?</legend>
          </fieldset>
        </form>
      </SignupPageStyles>
      {/* TODO: Link to FAQs */}
    </>
  )
}