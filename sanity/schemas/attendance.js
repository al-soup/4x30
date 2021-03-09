export default {
  name: 'attendance',
  title: 'Anwesenheit',
  type: 'object',
  fields: [
    {
      name: "attending",
      type: "boolean",
      title: "Anwesend"
    },
    { 
      name: "slot",
      type: "reference",
      to: [{ type: "timeSlot"}],
      title: "Zeitfenster"
    }
  ]
}
