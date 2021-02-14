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
      name: "birhtday",
      title: "Geburtstag",
      type: "string"
    },
    {
      name: "description",
      title: "Beschreibung",
      type: "string"
    },
    {
      name: "imgage",
      title: "Bild",
      type: "imgae"
    }
    
  ]
}