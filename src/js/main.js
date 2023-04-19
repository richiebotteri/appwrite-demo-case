// Imports custom CSS
import "../scss/styles.scss";
import * as bootstrap from "bootstrap";
import { login } from "./auth/login";
import { register } from "./auth/register";

const pathname = location.pathname;
switch (pathname) {
   case "/":
      login();
      console.log("hey");
      break;
   case "/register.html":
      register();
      break;
}
