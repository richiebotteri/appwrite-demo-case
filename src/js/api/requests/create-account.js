import { Account } from "appwrite";
import { initiateClient } from "../initiate-client";
import { displayErrorMessage } from "../validation/display-error-message";
import { displaySuccessMessage } from "../validation/display-success-message";

export async function createAccount({ userId, email, password, name }) {
   try {
      const client = initiateClient();
      const account = new Account(client);
      const accountObject = await account.create(userId, email, password, name);
      displaySuccessMessage(accountObject.name);
      setTimeout(() => {
         location.pathname = "/index.html";
      }, 2000);
   } catch (error) {
      displayErrorMessage(error);
   }
}
