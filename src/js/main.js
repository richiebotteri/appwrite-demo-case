// Imports custom CSS
import "../scss/styles.scss";
import * as bootstrap from "bootstrap";
import { register } from "./auth/register";
import { login } from "./auth/login";
import { logout } from "./auth/logout";
import { getAccountData } from "./api/requests/account/get-account-data";

const pathname = location.pathname;
switch (pathname) {
   case "/":
      location.pathname = "/index.html";
   case "/index.html":
      login();
      break;
   case "/register.html":
      register();
      break;
   case "/movie-collections.html":
      logout();
      break;
   case "/profile.html":
      logout();
      getAccountData();
      break;
}
