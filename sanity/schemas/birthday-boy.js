import { FaCrown as icon } from "react-icons/fa";

export default {
  name: "birthdayBoy",
  title: "Birthday Boy",
  type: "document",
  icon,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string"
    },
    {
      name: "birthday",
      title: "Geburtstag",
      type: "string"
    },
    {
      name: "description",
      title: "Beschreibung",
      type: "string"
    },
    {
      name: "image",
      title: "Bild",
      type: "image"
    }
  ]
}