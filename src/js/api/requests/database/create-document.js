import { ID } from "appwrite";
import { initiateClient } from "../../initiate-client";
import { initiateDatabases } from "../../initiate-databases";
import { COLLECTION_ID, DATABASE_ID } from "../../constants";
import { validationMessage } from "../../validation";

export async function createMovieDocument(formData) {
   try {
      const client = initiateClient();

      const databases = initiateDatabases(client);

      const response = await databases.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), formData);

      console.log(response);

      const successMsg = new validationMessage("Movie has been added!", ".validation-msg").displaySuccess();

      setTimeout(() => {
         location.reload();
      }, 1000);
   } catch (error) {
      const successMsg = new validationMessage(error, ".validation-msg").displayError();
   }
}
