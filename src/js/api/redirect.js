import load from "../storage/load";

export function redirect() {
   const isSession = load("sessionID");
   if (!isSession) {
      location.pathname = "/index.html";
   }
}
