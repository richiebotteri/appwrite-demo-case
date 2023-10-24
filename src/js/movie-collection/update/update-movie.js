import { MovieUpdate } from "./update-movie-class";

/**
 * Updates movie when clicking on update button on each movie card, than filling out the inputs the user wants to change than submits it.
 */
export function updateMovie() {
   const updateButtons = document.querySelectorAll(".update-btn");

   const updateModalForm = document.querySelector("#update-movie-form");

   const movieUpdate = new MovieUpdate(updateButtons, updateModalForm);

   movieUpdate.addPreviousMovieData();
   movieUpdate.sendNewMovieData();
}
