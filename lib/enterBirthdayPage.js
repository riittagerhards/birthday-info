import { createElement } from "./elements.js";

// 📝 The onSubmit argument is not used. It should tell the parent component when the form is submitted and bypass the birthday.
// 📝 A submit input/button is missing

// Creates the page to enter the birthday
export function createEnterBirthdayPage(onSubmit) {
  // Creates <input type="date" />
  const birthdayInput = createElement("input", {
    type: "date",
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

  //Create an element to show the chosen date
  const showDate = createElement("p", {
    type: "p",
    textContent: "Your birthday is ",
  });

  // Create a form element with className and elements birthdayInput, submitButton, showDate
  const formElement = createElement("form", { className: "form" }, [
    birthdayInput,
    submitButton,
    showDate,
  ]);

  return formElement;
}
