// Imports custom CSS
import "../scss/styles.scss";
import * as bootstrap from "bootstrap";
import { register } from "./auth/register";
import { login } from "./auth/login";
import { logout } from "./auth/logout";
import { getAccountData } from "./api/requests/account/get-account-data";
import { addMovie } from "./movie-collection/add-movie";
import { listDocuments } from "./api/requests/database/list-document";
import { deleteMovie } from "./movie-collection/delete-movie";
import { updateMovie } from "./movie-collection/update/update-movie";

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
      addMovie();
      listDocuments();
      setTimeout(() => {
         deleteMovie();
         updateMovie();
      }, 1000);
      logout();
      break;
   case "/profile.html":
      logout();
      getAccountData();
      break;
}
