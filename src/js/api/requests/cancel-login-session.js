import { Account } from "appwrite";
import { initiateClient } from "../initiate-client";
import { displayInfoMessage } from "../validation/display-info-message";
import remove from "../../storage/remove";
import load from "../../storage/load";

export function cancelLoginSession() {
   try {
      const client = initiateClient();
      const account = new Account(client);
      const sessionObject = load("sessionObject");
      const { $id } = sessionObject;
      const response = account.deleteSession($id);
      remove("sessionObject");
      remove("cookieFallback");
      remove("token");
      displayInfoMessage("Logging out now!");
      setTimeout(() => {
         location.pathname = "/index.html";
      }, 1000);
   } catch (e) {
      console.log(e);
   }
}
