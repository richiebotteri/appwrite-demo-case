import { Databases } from "appwrite";

export function initiateDatabases(client) {
   const databases = new Databases(client);
   return databases;
}
