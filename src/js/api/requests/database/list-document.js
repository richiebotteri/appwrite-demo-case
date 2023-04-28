import { displayMovieCollections } from "../../../ui/display-movie-collections";
import { COLLECTION_ID, DATABASE_ID } from "../../constants";
import { initiateClient } from "../../initiate-client";
import { initiateDatabases } from "../../initiate-databases";

export async function listDocuments() {
   try {
      const client = initiateClient();

      const databases = initiateDatabases(client);

      const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID);
      const { documents } = response;
      displayMovieCollections(documents);
   } catch (error) {
      console.log(error);
   }
}
