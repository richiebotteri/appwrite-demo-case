import { initiateClient } from "../initiate-client";
import { displayErrorMessage } from "../validation/display-error-message";
import { displaySuccessMessage } from "../validation/display-success-message";
import { initiateAccount } from "../initiate-account";

export async function createAccount({ userId, email, password, name }) {
   try {
      const client = initiateClient();
      const account = initiateAccount(client);
      const accountObject = await account.create(userId, email, password, name);
      const username = accountObject.name;
      displaySuccessMessage(`Hey ${username}, welcome to Watchthis! We will redirect your to login`);
      setTimeout(() => {
         location.pathname = "/index.html";
      }, 2000);
   } catch (error) {
      displayErrorMessage(error);
   }
}
