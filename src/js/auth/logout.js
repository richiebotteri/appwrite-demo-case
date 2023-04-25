import { cancelLoginSession } from "../api/requests/account/cancel-login-session";

export function logout() {
   const logoutEl = document.querySelector(".logoutEl");
   logoutEl.addEventListener("click", () => {
      cancelLoginSession();
   });
}
