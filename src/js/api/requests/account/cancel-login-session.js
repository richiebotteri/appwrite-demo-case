import load from "../../../storage/load";
import remove from "../../../storage/remove";
import { initiateAccount } from "../../initiate-account";
import { initiateClient } from "../../initiate-client";
import { validationMessage } from "../../validation";

export async function cancelLoginSession() {
   try {
      const client = initiateClient();

      const account = initiateAccount(client);

      const sessionID = load("sessionID");

      const response = await account.deleteSession(sessionID);

      remove("sessionID");
      const infoMessage = new validationMessage("Logging out", ".info-msg-el").displayInfo();
      setTimeout(() => {
         location.pathname = "/index.html";
      }, 1000);
   } catch (e) {
      console.log(e);
   }
}
