// Imports custom CSS
import "../scss/styles.scss";
import * as bootstrap from "bootstrap";
import { login } from "./auth/login";
import { register } from "./auth/register";
import { logout } from "./auth/logout";
import { displayProfileData } from "./ui/profile/display-profile-data";
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
      displayProfileData();
      logout();
      break;
}
