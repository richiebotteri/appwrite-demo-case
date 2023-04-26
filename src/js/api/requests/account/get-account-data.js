import { displayProfileData } from "../../../ui/profile/display-profile-data";
import { initiateAccount } from "../../initiate-account";
import { initiateClient } from "../../initiate-client";

/**
 * This function gets the account data of the currently logged in user.
 *
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
