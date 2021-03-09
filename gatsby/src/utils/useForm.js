export default function updateValue(values, setValue, e) {
  return setValue({
    ...values,
    [e.target.name]: e.target.value
  });
}