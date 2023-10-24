import { getMovieDocument } from "../../api/requests/database/get-document";
import { updateMovieDocument } from "../../api/requests/database/update-document";
import { displayMovieData } from "../../ui/display-movie-data";

export class MovieUpdate {
   /**
    * Pass inn the update button elements and the updateModal to populate the modal form with previous movie data and to listen for submission of new data.
    * @param {Element} updateButtons
    * @param {Element} updateModalForm
    */
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
