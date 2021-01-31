import { GiPartyHat as icon } from "react-icons/md";
// https://react-icons.github.io/react-icons/icons?name=md

export default {
  name: "visitor",
  title: "Besucher",
  type: "document",
  icon,
  fields: [
    {
      name: "email",
      title: "Email",
      type: "string",
      description: "Email address of visitor"
    },
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Name of visitor"
    },
    {
      name: "attendance",
      title: "Anwesenheit",
      type: "string",
      description: "What time the visitor plans to show up"
      // TODO: Validation enums
    }


  ]
}