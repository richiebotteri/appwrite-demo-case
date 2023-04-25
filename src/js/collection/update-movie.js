import { updateMovieDocument } from "../api/requests/document/update-document";

export function updateMovie(movieId) {
   const updateMovieFormEl = document.querySelector("#update-movie-form");

   updateMovieFormEl.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const formDataObj = Object.fromEntries(formData);
      updateMovieDocument(formDataObj, movieId);
   });
}
