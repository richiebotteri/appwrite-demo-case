import { getMovieDocument } from "../api/requests/document/get-document";
import { updateMovie } from "./update-movie";

/**
 * initiate data retrieval of selected movie-
 */
export function updateMovieForm() {
   setTimeout(() => {
      const updateBtns = document.querySelectorAll(".update-btn");
      updateBtns.forEach((updateBtn) => {
         updateBtn.addEventListener("click", (event) => {
            const updateBtn = event.target;
            const card = event.target.parentElement.parentElement;
            const movieId = card.id;
            const validationMsgEl = event.target.parentElement.childNodes[5];
            const cardValidationClass = validationMsgEl.classList[0];
            getMovieDocument(movieId, "." + cardValidationClass);
            updateMovie(movieId);
         });
      });
   }, 1000);
}
