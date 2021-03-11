import React from "react";
import SEO from "../components/SEO";
import updateValue from "../utils/updateValue";
import { graphql } from "gatsby";
import { useState } from "react";
import SignupPageStyles from "../styles/SignupPageStyles";
import compareSlot from "../utils/compareSlot";


{/* TODO: Sort strings */}
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
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
    const text = JSON.parse(await res.text());
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
        <h3 className="deadline">Anmeldefrist bis 25. Mai!</h3>
        <h1>Anmelden</h1>
        <p>Damit wir wissen, mit wie vielen Leuten wir ungefähr rechnen können, bitten wir dich bis zum 25. Mai anzumelden.</p>
        <form onSubmit={submitSignup}>
          <fieldset className="who" disabled={loading}>
            <legend>Wer bist du?</legend>
            <label htmlFor="name" className="user-detail">
              Vor- & Nachname
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={(e) => updateValue(values, setValue, e)}
              />
            </label>
            <label htmlFor="email" className="user-detail">
              Email
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={(e) => updateValue(values, setValue, e)}
              />
            </label>
            <label htmlFor="plusone" className="user-detail">
            Begleitung (Name reicht)
              <input
                type="text"
                name="plusone"
                value={values.plusone}
                onChange={(e) => updateValue(values, setValue, e)}
              />
            </label>
            <label htmlFor="zuppy" className="zuppy">
              Zuppy
              <input
                type="text"
                name="zuppy"
                value={values.zuppy}
                onChange={(e) => updateValue(values, setValue, e)}
              />
            </label>
            <label htmlFor="password" className="user-detail">
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
        title
        description
        slot
        slotId: _id
      }
    }
  }
`;