import { Client, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66d49e3c002c3b99a2b8");

const databases = new Databases(client);

export { client, databases};
