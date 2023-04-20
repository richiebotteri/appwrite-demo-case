import { cancelLoginSession } from "../api/requests/cancel-login-session";

export function logout() {
   const logoutEl = document.querySelector(".logoutEl");
   logoutEl.addEventListener("click", () => {
      cancelLoginSession();
   });
}
