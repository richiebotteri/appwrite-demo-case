// Imports custom CSS
import "../scss/styles.scss";
import * as bootstrap from "bootstrap";
import { redirect } from "./api/redirect";

const pathname = location.pathname;
switch (pathname) {
   case "/":
      location.pathname = "/index.html";
   case "/index.html":
      break;
   case "/register.html":
      break;
   case "/movie-collections.html":
      redirect();
      break;
   case "/profile.html":
      redirect();
      break;
}
