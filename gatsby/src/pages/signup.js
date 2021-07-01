import React from "react";
import SEO from "../components/SEO";
import updateValue from "../utils/updateValue";
import { graphql } from "gatsby";
import { useState } from "react";
import SignupPageStyles from "../styles/SignupPageStyles";
import compareSlot from "../utils/compareSlot";
import NextStep from "../components/NextStep";
import ResponseMessage from "../components/ResponseMessage";


export default function SignupPage({ data }) {
  const timeSlots = data.timeSlots.nodes;
  // TODO: Persist state with React Context (#38)
  const [values, setValue] = useState({
    name: "",
    email: "",
    plusone: "",
    zuppy: undefined,
    password: "",
    participation: timeSlots
      .map(timeSlot => ({ ...timeSlot, attending: false }))
      .sort(compareSlot)
  });
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("");
  const MAX_LENGTH = 64;

  const handleCheckboxClick = (attendance, i) => e => {
    const checkboxes = [...values.participation];
    checkboxes[i] = {
      ...attendance,
      attending: !attendance.attending
    };
    setValue({
      ...values,
      participation: checkboxes
    });
  };

  async function submitSignup(e) {
    e.preventDefault();
    setError(null);
    setMessage(null);
    setLoading(true);
    const body = { ...values }
    const res = await fetch(`${process.env.GATSBY_SERVERLESS_BASE}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    })
    const text = JSON.parse(await res.text());
    if (res.status >= 400 && res.status < 600) {
      setLoading(false);
      setError(text.message);
    } else {
      setLoading(false);
      setMessage("Anmeldung hat geklappt! Wir freuen uns auf dich!");
    }
  };

  return (
    <>
      <SEO title="Anmelden" />
      <SignupPageStyles>
        <h3 className="deadline">Falls du dich gefragt hast: Ja, die Party findet statt!!</h3>
        <h1>Anmelden</h1>
        <p>Damit wir wissen, mit wie vielen Leuten wir ungefähr rechnen können, bitten wir dich, die Anmeldung auszufüllen.</p>
        <p>Die Anmeldefrist ist schon lange vorbei. Aber wenn du uns wissen lassen möchtest, dass du troztdem vorbei schaust (oder du einfach gerne Formulare ausfüllst), dann nur zu!</p>
        <form onSubmit={submitSignup}>
          <fieldset className="who" disabled={loading}>
            <legend>Wer bist du?</legend>
            <label htmlFor="name" className="user-detail">
              Vor- & Nachname
              <input
                type="text"
                name="name"
                required
                minLength="3" 
                maxLength={MAX_LENGTH}
                value={values.name}
                onChange={(e) => updateValue(values, setValue, e)}
              />
            </label>
            <label htmlFor="email" className="user-detail">
              Email
              <input
                type="email"
                name="email"
                required
                maxLength={MAX_LENGTH}
                value={values.email}
                onChange={(e) => updateValue(values, setValue, e)}
              />
            </label>
            <label htmlFor="plusone" className="user-detail">
            Begleitung (Name reicht)
              <input
                type="text"
                name="plusone"
                maxLength="64"
                value={values.plusone}
                onChange={(e) => updateValue(values, setValue, e)}
              />
            </label>
            <label htmlFor="zuppy" className="zuppy">
              Zuppy
              <input
                type="text"
                name="zuppy"
                maxLength={MAX_LENGTH}
                value={values.zuppy}
                onChange={(e) => updateValue(values, setValue, e)}
              />
            </label>
            <label htmlFor="password" className="user-detail">
              Passwort (ist auf dem Flyer)
              <input
                type="password"
                name="password"
                required
                maxLength={MAX_LENGTH}
                value={values.password}
                onChange={(e) => updateValue(values, setValue, e)}
              />
            </label>
          </fieldset>
          <fieldset disabled={loading}>
            <legend>Wann bist du anwesend?</legend>
            {values.participation.map((attendance, i) => (
              <div key={attendance.slotId} className="checkbox-container">
                <input
                  type="checkbox"
                  id={attendance.slot}
                  name={attendance.slot}
                  checked={attendance.attending}
                  onChange={handleCheckboxClick(attendance, i)}
                />
                <span className="checkmark"></span>
                <label htmlFor={attendance.slot}>&nbsp;{attendance.description}</label>
              </div>)
            )}
          </fieldset>
          <div>
            {(message || error) ? <ResponseMessage message={ error || message } success={ Boolean(message) } /> : ""}
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Anmeldung wird versendet..." : "Jetzt Anmelden!"}
          </button>
          <p className="hint">
            <i>
              Hinweis: Etwas stimmte nicht? Doch anders anwesend? Das Formular einfach noch einmal mit der <u>gleichen</u> Email Adresse ausfüllen.
            </i>
          </p>
          <NextStep link={"/faq"} text={"Noch Fragen? Hier sind die Antworten"}></NextStep>
        </form>
      </SignupPageStyles>
    </>
  )
}

export const timeSlotQuery = graphql`
  query TimeSlotQuery {
    timeSlots: allSanityTimeSlot {
      nodes {
        title
        description
        slot
        slotId: _id
      }
    }
  }
`;