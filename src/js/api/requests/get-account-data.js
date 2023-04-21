import { initiateClient } from "../initiate-client";
import save from "../../storage/save";
import { initiateAccount } from "../initiate-account";

/**
 * This function gets the account data using the JWT token.
 * For this to work its required that the JWT token has been create before this one
 * It also takes a second to save and load the token from localStorage so it wrapped around a setTimeout function.
 */
export async function getAccountData(token) {
   try {
      const client = initiateClient().setJWT(token);
      const account = initiateAccount(client);
      const activeAccountObj = await account.get();
      save("activeAccountObj", activeAccountObj);
   } catch (e) {
      console.log(e);
   }
}
