import { displayProfileData } from "../../../ui/display-profile-data";
import { initiateAccount } from "../../initiate-account";
import { initiateClient } from "../../initiate-client";

/**
 * This function gets the currently logged in account data
 */
export async function getAccountData() {
   try {
      const client = initiateClient();
      const account = initiateAccount(client);
      const activeAccountObj = await account.get();

      displayProfileData(activeAccountObj);
   } catch (e) {
      console.log(e);
   }
}
