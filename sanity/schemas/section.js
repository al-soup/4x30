import { FaGripVertical as icon } from "react-icons/fa";

export default {
  name: "section",
  title: "Abschitt",
  type: "document",
  icon,
  fields: [
     {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "text",
      title: "Text",
      type: "string"
    },
    {
      name: "image",
      title: "Bild",
      type: "image"
    }
  ]
}