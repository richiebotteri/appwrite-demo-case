import { generateId } from "./generate-id";

export function login() {
   const loginFormEl = document.querySelector("#login-form");
   loginFormEl.addEventListener("submit", (event) => {
      event.preventDefault();
      const loginSubmission = event.target;
      const loginFormData = new FormData(loginSubmission);
      const formDataObj = Object.fromEntries(loginFormData);
      const id = generateId();
      Object.defineProperty(formDataObj, "userId", {
         value: id,
         enumerable: true,
      });
   });
}
