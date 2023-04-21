import { initiateClient } from "../initiate-client";
import { displayInfoMessage } from "../validation/display-info-message";
import remove from "../../storage/remove";
import load from "../../storage/load";
import { initiateAccount } from "../initiate-account";

export async function cancelLoginSession() {
   try {
      const client = initiateClient();
      const account = initiateAccount(client);
      const sessionID = load("sessionID");
      const response = await account.deleteSession(sessionID);
      remove("activeAccountObj");
      remove("cookieFallback");
      remove("sessionID");
      displayInfoMessage("Logging out now!");
      setTimeout(() => {
         location.pathname = "/index.html";
      }, 1000);
   } catch (e) {
      console.log(e);
   }
}
