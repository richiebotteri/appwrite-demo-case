import { deleteMovieDocument } from "../api/requests/document/delete-document";

/**
 * listens for a delete button click, and calls api function to delete movie document.
 */
export function deleteMovie() {
   const deleteMovieBtnEl = document.querySelectorAll(".delete-btn");
   deleteMovieBtnEl.forEach((deleteBtn) => {
      deleteBtn.addEventListener("click", (event) => {
         const card = event.target.parentElement.parentElement;
         const validationMsgEl = event.target.parentElement.childNodes[5];
         const cardId = card.id;
         const validationClassName = validationMsgEl.classList[0];
         const validationClass = "." + validationClassName;
         deleteMovieDocument(cardId, validationClass);
      });
   });
}
