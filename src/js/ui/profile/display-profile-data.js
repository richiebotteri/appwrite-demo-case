import load from "../../storage/load";
import { changeDateFormat } from "../../utility/change-date-format";
import { emailVerificationStatus } from "./email-verification-status";

export function displayProfileData() {
   const profileDataEl = document.querySelector("#profile-data");
   const profileData = load("activeAccountObj");
   const { $id, email, name, registration } = profileData;

   const idEl = document.createElement("p");
   idEl.innerText = `User ID: ${$id}`;

   const emailVerStatus = emailVerificationStatus();
   const parseDocument = new DOMParser();
   const htmlDocument = parseDocument.parseFromString(
      `
   <p>Email: ${email} ${emailVerStatus}</p>
   `,
      "text/html"
   );
   const emailEl = htmlDocument.querySelector("p");

   const nameEl = document.createElement("p");
   nameEl.innerText = `Name: ${name}`;

   const registrationEl = document.createElement("p");
   const registrationDate = changeDateFormat(registration);
   registrationEl.innerText = `Registered: ${registrationDate}`;

   profileDataEl.append(idEl, nameEl, emailEl, registrationEl);
}
