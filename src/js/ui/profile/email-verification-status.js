/**
 * Turns the boolean value that indicates if an email has been verified into a span tag with descriptive text. uses the account data object retrieved from the api
 * @param {object} emailVerification
 * @returns
 */
export function emailVerificationStatus({ emailVerification }) {
   if (emailVerification === false) {
      const fail = `<span class="text-danger">(Not Verified)</span>`;
      return fail;
   } else {
      const success = `<span class="text-success">(Verified)</span>`;
      return success;
   }
}
