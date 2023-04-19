import { CREATE_ACCOUNT_URL, PROJECT_ID } from "./env.mjs";

export async function CreateAccount(formData) {
   const response = await fetch(CREATE_ACCOUNT_URL, {
      method: "post",
      headers: {
         "Content-Type": "application/json",
         "X-Appwrite-Response-Format": "1.0.0",
         "X-Appwrite-Project": PROJECT_ID,
      },
      body: JSON.stringify(formData),
   });
   const result = await response.json();
   console.log(response);
   console.log(result);
}
