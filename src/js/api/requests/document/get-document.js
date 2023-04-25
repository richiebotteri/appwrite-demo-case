import { displayMovieData } from "../../../ui/movies/display-movie-data";
import { COLLECTION_ID, DATABASE_ID } from "../../constants";
import { initiateClient } from "../../initiate-client";
import { initiateDatabases } from "../../initiate-databases";

export async function getMovieDocument(movieDocId, cardValidationClass) {
   try {
      const client = initiateClient();
      const databases = initiateDatabases(client);
      const movieDataDoc = await databases.getDocument(DATABASE_ID, COLLECTION_ID, movieDocId);
      displayMovieData(movieDataDoc, cardValidationClass);
   } catch (error) {
      console.log(error);
   }
}
