document.addEventListener("DOMContentLoaded", () => {
  const noteInput = document.querySelector(".note-input");
  const colorRadios = document.querySelectorAll(".color-radio");
  const submitButton = document.querySelector(".note-submit");

  colorRadios.forEach((colorRadio) => {
    colorRadio.addEventListener("click", (event) => {
      noteInput.style["background-color"] = `var(--color-${event.target.value}`;
      submitButton.style["background-color"] =
        `var(--color-${event.target.value}`;
    });
  });
});
