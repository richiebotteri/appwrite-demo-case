import { Account } from "appwrite";
import { initiateClient } from "../initiate-client";
import { displayErrorMessage } from "../display-error-message";
import { createJwt } from "./create-jwt";
import save from "../../storage/save";

/**
 * Allow the user to login into their account by providing a valid email and password combination. This route will create a new session for the user.
 */
export async function createLoginSession({ email, password }) {
   try {
      const client = initiateClient();
      const account = new Account(client);
      const sessionObject = await account.createEmailSession(email, password);
      save("sessionObject", sessionObject);
      createJwt(account);
   } catch (error) {
      displayErrorMessage(error);
   }
}
