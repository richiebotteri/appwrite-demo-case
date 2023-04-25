import { initiateClient } from "../../initiate-client";
import { createJwt } from "./create-jwt";
import { getAccountData } from "../get-account-data";
import { initiateAccount } from "../../initiate-account";
import save from "../../../storage/save";
import { validationMessage } from "../../validation/validation-message";

/**
 * Allow the user to login into their account by providing a valid email and password combination. This route will create a new session for the user.
 */
export async function createLoginSession({ email, password }) {
   try {
      const client = initiateClient();
      const account = initiateAccount(client);
      const sessionObject = await account.createEmailSession(email, password);
      const { $id } = sessionObject;
      save("sessionID", $id);
      const token = await createJwt(account);
      getAccountData(token);
      const successMsg = new validationMessage("Success! Logging in now.", ".validation-msg").displaySuccess();
      setTimeout(() => {
         location.pathname = "/movie-collections.html";
      }, 1500);
   } catch (error) {
      const errorMsg = new validationMessage(error, ".validation-msg").displayError();
   }
}
