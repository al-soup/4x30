import { VscChecklist as icon } from "react-icons/vsc";

export default {
  name: "timeSlot",
  title: "Zeitfenster",
  type: "document",
  icon,
  fields: [
    {
      name: "title",
      title: "Titel",
      description: "Short name",
      type: "string"
    },
    {
      name: "description",
      title: "Beschreibung",
      description: "Description of time slot",
      type: "string"
    },
    {
      name: "slot",
      title: "Zeitraum",
      description: "Specific time period the visitor plans to be there",
      type: "string"
    },
  ]
}