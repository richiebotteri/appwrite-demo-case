import { initiateClient } from "../initiate-client";
import remove from "../../storage/remove";
import load from "../../storage/load";
import { initiateAccount } from "../initiate-account";
import { validationMessage } from "../validation/validation-message";

export async function cancelLoginSession() {
   try {
      const client = initiateClient();
      const account = initiateAccount(client);
      const sessionID = load("sessionID");
      const response = await account.deleteSession(sessionID);
      remove("activeAccountObj");
      remove("cookieFallback");
      remove("sessionID");
      const infoMessage = new validationMessage("Logging out", ".info-msg-el").displayInfo();
      setTimeout(() => {
         location.pathname = "/index.html";
      }, 1000);
   } catch (e) {
      console.log(e);
   }
}
