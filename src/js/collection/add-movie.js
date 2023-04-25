import { createMovieDocument } from "../api/requests/document/create-document";

/**
 * Gets movie data attributes from "add movie" form by listening. It than converts the submitted data to a form data to be used in the API request.
 */
export function addMovie() {
   const addMovieFormEl = document.querySelector("#add-movie-form");
   addMovieFormEl.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const formDataObj = Object.fromEntries(formData);
      const formDataJson = JSON.stringify(formDataObj);
      createMovieDocument(formDataJson);
   });
}
