import { FaUser as icon } from "react-icons/fa";
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
      name: "companions",
      title: "Begleitung",
      description: "Who the visitor will be accompanied by",
      type: "array",
      of: [{ type: "string" }]
    },
    {
      name: "attendance",
      title: "Anwesenheit",
      description: "What time the visitor and companions plan to attend",
      type: "array",
      of: [{ type: "reference", to: [{ type: "timeSlot"}] }]
    }
  ],
  preview: {
    select: {
      title: "name",
      slot0: "attendance.0.title",
      slot1: "attendance.1.title",
      slot2: "attendance.2.title",
      slot3: "attendance.3.title",
      slot4: "attendance.4.title",
    },
    prepare: ({ title, ...timeSlots }) => {
      return {
        title,
        subtitle: Object.values(timeSlots).filter(Boolean).join(", ")
      }
    }
  }
}