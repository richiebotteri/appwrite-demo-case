import save from "../../storage/save";
import { displayErrorMessage } from "../validation/display-error-message";

/**
 * This function creates a JSON Web Token. It can be used as an replacement to authenticate the current logged in user. The JWT is valid for 15 minute from its creation but will be invalid if user logs out in the time period.
 */
export async function createJwt(account) {
   try {
      const response = await account.createJWT();
      const { jwt } = response;
      save("token", jwt);
   } catch (error) {
      displayErrorMessage(error);
   }
}
