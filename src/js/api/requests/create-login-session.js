import { Account } from "appwrite";
import { initiateClient } from "../initiate-client";
import { displayErrorMessage } from "../display-error-message";

/**
 * Allow the user to login into their account by providing a valid email and password combination. This route will create a new session for the user.
 */
export async function createLoginSession({ email, password }) {
   try {
      const client = initiateClient();
      const account = new Account(client);
      const response = await account.createEmailSession(email, password);
      console.log(response);
   } catch (error) {
      displayErrorMessage(error);
   }
}
