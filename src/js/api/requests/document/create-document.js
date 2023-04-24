import { ID } from "appwrite";
import { DATABASE_ID } from "../../constants";
import { initiateClient } from "../../initiate-client";
import { initiateDatabases } from "../../initiate-databases";
import { displaySuccessMessage } from "../../validation/display-success-message";
import { displayErrorMessage } from "../../validation/display-error-message";

export async function createMovieDocument(formData, genreId) {
   try {
      const client = initiateClient();
      const databases = initiateDatabases(client);
      const response = await databases.createDocument(DATABASE_ID, genreId, ID.unique(), formData);
      displaySuccessMessage("Movie has been added!");
   } catch (error) {
      displayErrorMessage(error);
   }
}
