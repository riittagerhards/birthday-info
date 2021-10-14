import { createElement } from "./elements.js";

// 📝 The onSubmit argument is not used. It should tell the parent component when the form is submitted and bypass the birthday.
// 📝 A submit input/button is missing

// Creates the page to enter the birthday
export function createEnterBirthdayPage(onSubmit) {
  // Creates <input type="date" />
  const birthdayInput = createElement("input", {
    type: "date",
    value: "1990-01-01",
  });

  //Create a submit button
  const submitButton = createElement(
    "button",
    {
      type: "submit",
      className: "submitButton",
    },
    ["Submit"]
  );

  // Create a form element with className and elements birthdayInput, submitButton, showDate
  const formElement = createElement(
    "form",
    {
      className: "form",
      onsubmit: function (event) {
        event.preventDefault();
        onSubmit(birthdayInput.value);
      },
    },
    [birthdayInput, submitButton]
  );

  return formElement;
}
