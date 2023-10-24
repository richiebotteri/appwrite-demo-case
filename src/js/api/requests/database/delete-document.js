import { COLLECTION_ID, DATABASE_ID } from "../../constants";
import { initiateClient } from "../../initiate-client";
import { initiateDatabases } from "../../initiate-databases";
import { validationMessage } from "../../validation";

export async function deleteMovieDocument(movieID, cardValidationClass) {
   try {
      const client = initiateClient();

      const database = initiateDatabases(client);

      const response = await database.deleteDocument(DATABASE_ID, COLLECTION_ID, movieID);
      console.log(response);
      const successMsg = new validationMessage("Movie has been deleted!", cardValidationClass).displaySuccess();

      setTimeout(() => {
         location.reload();
      }, 1500);
   } catch (error) {
      const errorMsg = new validationMessage(error, cardValidationClass).displayError();
   }
}
