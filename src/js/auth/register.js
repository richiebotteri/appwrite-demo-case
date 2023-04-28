import { createAccount } from "../api/requests/account/create-account";

export function register() {
   const registerFormEl = document.querySelector("#register-form");
   registerFormEl.addEventListener("submit", (event) => {
      event.preventDefault();
      const registerSubmission = event.target;
      const registerFormData = new FormData(registerSubmission);
      const formDataObj = Object.fromEntries(registerFormData);

      createAccount(formDataObj);
   });
}
