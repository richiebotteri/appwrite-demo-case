import { Account } from "appwrite";
import { initiateClient } from "../initiate-client";
import load from "../../storage/load";
import { displayInfoMessage } from "../validation/display-info-message";

export function cancelLoginSession() {
   try {
      const client = initiateClient();
      const account = new Account(client);
      const sessionObject = load("sessionObject");
      const { $id } = sessionObject;
      const response = account.deleteSession($id);
      displayInfoMessage("Logging out now!");
      setTimeout(() => {
         location.pathname = "/index.html";
      }, 1000);
   } catch (e) {
      console.log(e);
   }
}
