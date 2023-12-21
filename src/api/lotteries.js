
import  {  sdk  }  from  '../appwrite';
import { ID, Query } from 'appwrite';

const COLLECTION_ID = '64d0bb4e8e84bffb1040';

export const create = (data) => sdk.databases.createDocument(
        sdk.DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        data
);

export const update = (document_id, data) => {
    const res = sdk.databases.updateDocument(
        sdk.DATABASE_ID,
        COLLECTION_ID,
        document_id,
        data    
    );

    return res;
}
export const get = async () => {
    const res = await sdk.databases.listDocuments(
        sdk.DATABASE_ID,
        COLLECTION_ID,
        [
            Query.orderDesc("$createdAt")
        ]
    );

    return res.documents
}
