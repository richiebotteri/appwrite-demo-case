import { getMovieDocument } from "../../api/requests/document/get-document";
import { updateMovieDocument } from "../../api/requests/document/update-document";
import { displayMovieData } from "../../ui/movies/display-movie-data";

/**
 * Goal to listen to update button, get the movie id and validation class to display feedback message.
 */
export class MovieUpdate {
   constructor(updateButtons, updateModalForm) {
      this.updateButtons = updateButtons;
      this.updateModalForm = updateModalForm;
   }
   #movieId;
   /**
    * Populates updateModalForm with previous movie data
    */
   addPreviousMovieData() {
      this.updateButtons.forEach((updateBtn) => {
         updateBtn.addEventListener("click", (event) => {
            const card = event.target.parentElement.parentElement;
            const movieDocId = card.id;
            this.#movieId = movieDocId;
            getMovieDocument(movieDocId).then((movieDocument) => {
               displayMovieData(movieDocument);
            });
         });
      });
   }

   /**
    * Listens for form submit, converts the data to an object and sends it to api request function.
    */
   sendNewMovieData() {
      this.updateModalForm.addEventListener("submit", (event) => {
         event.preventDefault();
         const formData = new FormData(event.target);
         const formDataObj = Object.fromEntries(formData);
         updateMovieDocument(formDataObj, this.#movieId);
      });
   }
}
