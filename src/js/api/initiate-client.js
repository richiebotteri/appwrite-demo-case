import { Client } from "appwrite";
import { API_VERSION, HOST_URL, PROJECT_ID } from "./env.mjs";

export function initiateClient() {
   const client = new Client();

   client.setEndpoint(`${HOST_URL}${API_VERSION}`).setProject(PROJECT_ID);

   return client;
}
