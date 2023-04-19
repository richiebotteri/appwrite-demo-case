import { Account } from "appwrite";
import { initiateClient } from "../initiate-client";
import { displayErrorMessage } from "../display-error-message";

export async function createAccount({ userId, email, password, name }) {
   try {
      const client = initiateClient();
      const account = new Account(client);
      const promise = await account.create(userId, email, password, name);
   } catch (error) {
      displayErrorMessage(error);
   }
}
