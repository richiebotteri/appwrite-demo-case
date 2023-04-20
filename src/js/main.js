// Imports custom CSS
import "../scss/styles.scss";
import * as bootstrap from "bootstrap";
import { login } from "./auth/login";
import { register } from "./auth/register";
import load from "./storage/load";
import { logout } from "./auth/logout";

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
      const isToken = load("token");
      if (!isToken) {
         location.pathname = "/index.html";
      }
      break;
}
