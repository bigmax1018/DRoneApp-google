import  {  Client  as  Appwrite,  Account, Databases, Storage  }  from  'appwrite';

const DATABASE_ID = "64c20b2a348578794032";

const  server  =  {
  endpoint:  'https://cloud.appwrite.io/v1',
  project:  '64be842c56e9d9c66d98',
};

const  client  =  new  Appwrite();
const  account  =  new  Account(client);
const databases = new Databases(client);
const storage = new Storage(client);

client.setEndpoint(server.endpoint).setProject(server.project);
const  sdk  =  {  account, databases, storage, DATABASE_ID };


export  {  sdk,  server  };