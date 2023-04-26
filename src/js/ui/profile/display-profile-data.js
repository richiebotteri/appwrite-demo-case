import { changeDateFormat } from "../../utility/change-date-format";
import { emailVerificationStatus } from "./email-verification-status";

/**
 * displays the api profile data of the currently logged in user
 * @param {object} profileData
 */
export function displayProfileData(profileData) {
   const profileDataEl = document.querySelector("#profile-data");
   const { $id, email, name, registration } = profileData;

   // ID
   const idEl = document.createElement("p");
   idEl.innerText = `User ID: ${$id}`;

   // Email
   const emailVerStatus = emailVerificationStatus(profileData);
   const parseDocument = new DOMParser();
   const htmlDocument = parseDocument.parseFromString(
      `
   <p>Email: ${email} ${emailVerStatus}</p>
   `,
      "text/html"
   );
   const emailEl = htmlDocument.querySelector("p");

   // Name
   const nameEl = document.createElement("p");
   nameEl.innerText = `Name: ${name}`;

   // Registration Date
   const registrationEl = document.createElement("p");
   const registrationDate = changeDateFormat(registration);
   registrationEl.innerText = `Registered: ${registrationDate}`;

   // Add child elements to parent container
   profileDataEl.append(idEl, nameEl, emailEl, registrationEl);
}
