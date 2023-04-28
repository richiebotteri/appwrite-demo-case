import { Account } from "appwrite";

export function initiateAccount(client) {
   const account = new Account(client);
   return account;
}
