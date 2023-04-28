import { changeDateFormat } from "../utility/change-date-format";
import { emailVerificationStatus } from "../utility/email-verification-status";

export function displayProfileData({ $id, email, name, registration, emailVerification }) {
   const profileDataEl = document.querySelector("#profile-data");

   // ID
   const idEl = document.createElement("p");
   idEl.innerText = `User ID: ${$id}`;

   // Email & Email Verification
   const emailStatus = emailVerificationStatus(emailVerification);
   const parseDocument = new DOMParser();
   const htmlDocument = parseDocument.parseFromString(
      `
   <p>Email: ${email} ${emailStatus}</p>
   `,
      "text/html"
   );
   const emailEl = htmlDocument.querySelector("p");

   // Name
   const nameEl = document.createElement("p");
   nameEl.innerText = `Name: ${name}`;

   // Registration Date
   const regDate = changeDateFormat(registration);
   const registrationEl = document.createElement("p");
   registrationEl.innerText = `Registered: ${regDate}`;

   profileDataEl.append(idEl, nameEl, emailEl, registrationEl);
}
