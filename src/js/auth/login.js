import { createLoginSession } from "../api/requests/account/create-login-session";

export function login() {
   const loginFormEl = document.querySelector("#login-form");
   loginFormEl.addEventListener("submit", (event) => {
      event.preventDefault();
      const loginSubmission = event.target;
      const loginFormData = new FormData(loginSubmission);
      const formDataObj = Object.fromEntries(loginFormData);

      createLoginSession(formDataObj);
   });
}
