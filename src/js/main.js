// Imports custom CSS
import "../scss/styles.scss";
import * as bootstrap from "bootstrap";
import { login } from "./auth/login";
import { register } from "./auth/register";
import { logout } from "./auth/logout";
import { redirect } from "./api/redirect";
import { addMovie } from "./collection/add-movie";
import { listDocuments } from "./api/requests/document/list-document";
import { deleteMovie } from "./collection/delete-movie";
import { updateMovie } from "./collection/update/update-movie";
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
      // Async delay
      setTimeout(() => {
         deleteMovie();
         updateMovie();
      }, 1000);
      redirect();
      logout();
      addMovie();
      listDocuments();
      break;
   case "/profile.html":
      redirect();
      getAccountData();
      logout();
      break;
}
