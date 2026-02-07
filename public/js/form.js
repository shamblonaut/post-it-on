import { calculateFontSize } from "/js/utils.js";

document.addEventListener("DOMContentLoaded", () => {
  const noteForm = document.querySelector(".note-form");
  const noteEditor = document.querySelector(".note-editor");
  const noteInput = document.querySelector(".note-input");
  const colorRadios = document.querySelectorAll(".color-radio");
  const submitButton = document.querySelector(".note-submit");

  noteEditor.addEventListener("input", (event) => {
    const value = event.target.innerText.trim();
    noteEditor.style["font-size"] = `${calculateFontSize(value)}px`;
    noteInput.value = value;
  });

  colorRadios.forEach((colorRadio) => {
    colorRadio.addEventListener("click", (event) => {
      noteEditor.style["background-color"] =
        `var(--color-${event.target.value}`;
      submitButton.style["background-color"] =
        `var(--color-${event.target.value}`;
    });
  });

  noteForm.addEventListener("submit", (event) => {
    if (noteInput.value === "") {
      event.preventDefault();
      alert("Please enter a note");
      noteEditor.focus();
    }
  });
});
