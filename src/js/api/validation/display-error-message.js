export function displayErrorMessage({ message }) {
   const validationMsgEl = document.querySelector(".validation-msg");
   validationMsgEl.innerText = message;
   if (validationMsgEl.classList.contains("text-success")) {
      validationMsgEl.classList.replace("text-success", "text-danger");
   } else {
      validationMsgEl.classList.add("text-danger");
   }
   validationMsgEl.classList.replace("d-none", "d-block");
}
