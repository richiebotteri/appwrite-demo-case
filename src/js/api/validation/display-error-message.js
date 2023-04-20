export function displayErrorMessage({ message }) {
   const errorMessage = message;
   const errorMsgEl = document.querySelector(".error-msg");
   errorMsgEl.classList.replace("d-none", "d-block");
   errorMsgEl.innerText = message;
}
