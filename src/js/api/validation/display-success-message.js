export function displaySuccessMessage(message) {
   const validationMsgEl = document.querySelector(".validation-msg");
   validationMsgEl.innerText = message;
   if (validationMsgEl.classList.contains("text-danger")) {
      validationMsgEl.classList.replace("text-danger", "text-success");
   } else {
      validationMsgEl.classList.add("text-success");
   }
   validationMsgEl.classList.replace("d-none", "d-block");
}
