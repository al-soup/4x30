import React from "react";
import SEO from "../components/SEO";
import useForm from "../utils/useForm";
import { useState } from "react";
import { graphql } from "gatsby";
import SignupPageStyles from "../styles/SignupPageStyles";


{/* TODO: Sort strings */}
export default function SignupPage({ data }) {
  const timeSlots = data.timeSlots.nodes;
  const { values, updateValue } = useForm({
    name: "",
    email: "",
    pw: "",
  });
  // TODO: Move this to useForm
  const [checkboxes, setCheckboxes] = useState(
    timeSlots
      .map(timeSlot => ({ ...timeSlot, attending: Boolean(timeSlot.attending)}))
      // .sort((a, b) => a.slot - b.slot)
  );
  const handleCheckboxClick = (timeSlot, i) => e => {
    const changedCheckboxes = [...checkboxes];
    changedCheckboxes[i] = {
      ...timeSlot,
      attending: !timeSlot.attending
    };
    setCheckboxes(changedCheckboxes);
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
                onChange={updateValue}
              />
            </label>
            <label htmlFor="email">
              Email
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={updateValue}
              />
            </label>
            <label htmlFor="pw">
              Passwort (ist auf dem Flyer)
              <input
                type="password"
                name="pw"
                value={values.pw}
                onChange={updateValue}
              />
            </label>
          </fieldset>
          <fieldset>
            <legend>Wann bist du anwesend?</legend>
            {checkboxes.map((timeSlot, i) => (
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
        </form>
        {/* TODO: Remove */}
        {checkboxes.map(x => (
          <p key={x.id + 2}>{x.description} +++ {x.attending.toString()} </p>
          ))}
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