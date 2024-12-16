import { useState } from "react";

export function useInput(defaultValue, validationFn) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  // Validate the current value
  const valueIsValid = validationFn(enteredValue);

  // Handlers
  function handleInputBlur() {
    setDidEdit(true); // Mark the field as "touched" on blur
  }

  function handleInputChange(event) {
    setEnteredValue(event.target.value); // Update input value
    setDidEdit(false)
  }

  return {
    value: enteredValue, // Current value of the input
    handleInputChange, // Function to update the input
    handleInputBlur, // Function to mark input as "touched"
    hasError: didEdit && !valueIsValid, // Whether the input is invalid after editing
    isValid:valueIsValid,
  };
}
