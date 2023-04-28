// Imports custom CSS
import "../scss/styles.scss";
import * as bootstrap from "bootstrap";
import { register } from "./auth/register";

const pathname = location.pathname;
switch (pathname) {
   case "/":
      location.pathname = "/index.html";
   case "/index.html":
      break;
   case "/register.html":
      register();
      break;
   case "/movie-collections.html":
      break;
   case "/profile.html":
      break;
}
