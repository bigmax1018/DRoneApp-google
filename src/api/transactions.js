
import  {  sdk  }  from  '../appwrite';
import { ID, Query } from 'appwrite';

const COLLECTION_ID = '64c6fbdb7a2c83e5e4a1';

export const create = (data) => sdk.databases.createDocument(
        sdk.DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        data
);

export const update = (document_id, data) => sdk.databases.updateDocument(
    sdk.DATABASE_ID,
    COLLECTION_ID,
    document_id,
    data    
)

export const get = async (user_id) => {
    const res = await sdk.databases.listDocuments(
        sdk.DATABASE_ID,
        COLLECTION_ID,
        [
            Query.orderAsc("$createdAt"),
            Query.equal("user_id", user_id)
        ]
    );

    return res.documents
}
