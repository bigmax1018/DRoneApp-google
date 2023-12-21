import { Client, Databases, Account, Storage } from "appwrite";

const client = new Client();
client.setEndpoint('https://cloud.appwrite.io/v1')
      .setProject('657b49523e4b73c530d1');

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);