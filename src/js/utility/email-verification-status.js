import load from "../storage/load";

export function emailVerificationStatus(emailVerification) {
   if (emailVerification === false) {
      const fail = `<span class="text-danger">(Not Verified)</span>`;
      return fail;
   } else {
      const success = `<span class="text-success">(Verified)</span>`;
      return success;
   }
}
