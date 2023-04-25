import { initiateClient } from "../../initiate-client";
import { initiateAccount } from "../../initiate-account";
import { validationMessage } from "../../validation/validation-message";

export async function createAccount({ userId, email, password, name }) {
   try {
      const client = initiateClient();
      const account = initiateAccount(client);
      const accountObject = await account.create(userId, email, password, name);
      const username = accountObject.name;

      const successMsg = new validationMessage(`Hey ${username}, welcome to Watchthis! We will redirect your to login`, ".validation-msg").displaySuccess();
      setTimeout(() => {
         location.pathname = "/index.html";
      }, 2000);
   } catch (error) {
      const errorMsg = new validationMessage(error, ".validation-msg").displayError();
   }
}
