import React from "react";
import SEO from "../components/SEO";
import updateValue from "../utils/useForm";
import { graphql } from "gatsby";
import { useState } from "react";
import SignupPageStyles from "../styles/SignupPageStyles";


{/* TODO: Sort strings */}
export default function SignupPage({ data }) {
  const timeSlots = data.timeSlots.nodes;
  const [values, setValue] = useState({
    name: "",
    email: "",
    pw: "",
    attendance: timeSlots
      .map(timeSlot => ({ ...timeSlot, attending: Boolean(timeSlot.attending)}))
      // .sort((a, b) => a.slot - b.slot)
  });

  const handleCheckboxClick = (timeSlot, i) => e => {
    const changedCheckboxes = [...values.attendance];
    changedCheckboxes[i] = {
      ...timeSlot,
      attending: !timeSlot.attending
    };
    setValue({
      ...values,
      attendance: changedCheckboxes
    });
  };

  return (
    <>
      <SEO title="Anmelden" />
      <SignupPageStyles>
        <h1>Anmelden</h1>
        {/* TODO: Einleitungstext */}
        <form>
          <fieldset className="who">
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
            <label htmlFor="pw">
              Passwort (ist auf dem Flyer)
              <input
                type="password"
                name="pw"
                value={values.pw}
                onChange={(e) => updateValue(values, setValue, e)}
              />
            </label>
          </fieldset>
          <fieldset>
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
          <button type="submit">Anmelding absenden</button>
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