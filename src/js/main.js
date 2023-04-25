// Imports custom CSS
import "../scss/styles.scss";
import * as bootstrap from "bootstrap";
import { login } from "./auth/login";
import { register } from "./auth/register";
import { logout } from "./auth/logout";
import { displayProfileData } from "./ui/profile/display-profile-data";
import { redirect } from "./api/redirect";
import { addMovie } from "./collection/add-movie";
import { listDocuments } from "./api/requests/document/list-document";
import { deleteMovie } from "./collection/delete-movie";
import { updateMovieForm } from "./collection/update-movie-form";

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
      redirect();
      logout();
      addMovie();
      listDocuments();
      deleteMovie();
      updateMovieForm();
      break;
   case "/profile.html":
      redirect();
      displayProfileData();
      logout();
      break;
}
