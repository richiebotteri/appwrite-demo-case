import { COLLECTION_ID, DATABASE_ID } from "../../constants";
import { initiateClient } from "../../initiate-client";
import { initiateDatabases } from "../../initiate-databases";
import { validationMessage } from "../../validation/validation-message";

/**
 * api request that updates an existing movie document
 * @param {object} updatedMovieData
 * @param {string} movieDocId
 */
export async function updateMovieDocument(updatedMovieData, movieDocId) {
   try {
      const client = initiateClient();
      const databases = initiateDatabases(client);
      const response = await databases.updateDocument(DATABASE_ID, COLLECTION_ID, movieDocId, updatedMovieData);
      const successValidation = new validationMessage("Movie is updated!", ".update-msg").displaySuccess();
      setTimeout(() => {
         location.reload();
      }, 1000);
   } catch (error) {
      const errorValidatioN = new validationMessage(error, ".update-msg").displayError();
   }
}
