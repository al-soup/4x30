import { FaRegQuestionCircle as icon } from "react-icons/fa";

export default {
  name: "faq",
  title: "FAQ",
  type: "document",
  icon,
  fields: [
    {
      name: "question",
      title: "Frage",
      type: "string"
    },
    {
      name: "answer",
      title: "Antwort",
      type: "string"
    }
  ]
}
