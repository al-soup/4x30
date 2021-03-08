import React from "react";
import SEO from "../components/SEO";
import updateValue from "../utils/useForm";
import { graphql } from "gatsby";
import { useState } from "react";
import SignupPageStyles from "../styles/SignupPageStyles";


{/* TODO: Sort strings */}
export default function SignupPage({ data }) {
  const timeSlots = data.timeSlots.nodes;
  // TODO: Persist state with React Context (#38)
  const [values, setValue] = useState({
    name: "",
    email: "",
    zuppy: undefined,
    password: "",
    attendance: timeSlots
      .map(timeSlot => ({ ...timeSlot, attending: Boolean(timeSlot.attending)}))
      // .sort((a, b) => a.slot - b.slot)
  });
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("");

  const handleCheckboxClick = (timeSlot, i) => e => {
    const checkboxes = [...values.attendance];
    checkboxes[i] = {
      ...timeSlot,
      attending: !timeSlot.attending
    };
    setValue({
      ...values,
      attendance: checkboxes
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
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
    const text = JSON.parse(await res.text());
    console.log(text);
    if (res.status >= 400 && res.status < 600) {
      setLoading(false);
      setError(text.message);
    } else {
      setLoading(false);
      setMessage("Anmeldung erfolgreich! Wir freuen uns auf dich!");
    }
  };

  if (message) {
    // TODO: Create a success component
    return <p>SUCCESS</p>
  }
  return (
    <>
      <SEO title="Anmelden" />
      <SignupPageStyles>
        <h1>Anmelden</h1>
        {/* TODO: Einleitungstext */}
        <form onSubmit={submitSignup}>
          <fieldset className="who" disabled={loading}>
            <legend>Wer bist du?</legend>
            <label htmlFor="name">
              Vor- & Nachname
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={(e) => updateValue(values, setValue, e)}
              />
            </label>
            <label htmlFor="email">
              Email
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={(e) => updateValue(values, setValue, e)}
              />
            </label>
            {/* TODO: Add further guests */}
            <label className="zuppy">
              Zuppy
              <input
                type="text"
                name="zuppy"
                value={values.zuppy}
                onChange={(e) => updateValue(values, setValue, e)}
              />
            </label>
            <label htmlFor="password">
              Passwort (ist auf dem Flyer)
              <input
                type="password"
                name="password"
                value={values.password}
                onChange={(e) => updateValue(values, setValue, e)}
              />
            </label>
          </fieldset>
          <fieldset disabled={loading}>
            <legend>Wann bist du anwesend?</legend>
            {values.attendance.map((timeSlot, i) => (
              <div key={timeSlot.id}>
                <label htmlFor={timeSlot.slot} >
                <input
                  type="checkbox"
                  name={timeSlot.slot}
                  checked={timeSlot.attending}
                  onChange={handleCheckboxClick(timeSlot, i)}
                />
                &nbsp;{timeSlot.description}
                </label>
              </div>)
            )}
          </fieldset>
          <div>
            {/* TODO: Create error component */}
            {error ? <p>ERROR: {error}</p> : ""}
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Anmeldung wird versendet..." : "Jetzt Anmelden!"}
          </button>
        </form>
      </SignupPageStyles>
      {/* TODO: Link to FAQs */}
    </>
  )
}

export const timeSlotQuery = graphql`
  query TimeSlotQuery {
    timeSlots: allSanityTimeSlot {
      nodes {
        id
        title
        description
        slot
        attending
      }
    }
  }
`;