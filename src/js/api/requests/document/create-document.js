import { ID } from "appwrite";
import { COLLECTION_ID, DATABASE_ID } from "../../constants";
import { initiateClient } from "../../initiate-client";
import { initiateDatabases } from "../../initiate-databases";
import { validationMessage } from "../../validation/validation-message";

export async function createMovieDocument(formData) {
   try {
      const client = initiateClient();
      const databases = initiateDatabases(client);
      const response = await databases.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), formData);
      const successMsg = new validationMessage("Movie has been added!", ".validation-msg").displaySuccess();

      setTimeout(() => {
         location.reload();
      }, 1000);
   } catch (error) {
      const successMsg = new validationMessage(error, ".validation-msg").displayError();
   }
}
