import { createMovieDocument } from "../api/requests/document/create-document";

/**
 * Gets movie data attributes from "add movie" form by listening. It than converts the submitted data to a form data obj splitting the genreId to be used in the API request to point to the correct database collection.
 */
export function addMovie() {
   const addMovieFormEl = document.querySelector("#add-movie-form");
   addMovieFormEl.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const formDataObj = Object.fromEntries(formData);
      const { genreId, ...apiFormData } = formDataObj;
      const formDataJson = JSON.stringify(apiFormData);
      createMovieDocument(formDataJson, genreId);
   });
}
