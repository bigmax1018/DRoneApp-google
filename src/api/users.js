import  {  sdk  }  from  '../appwrite';
import { ID, Query } from 'appwrite';

const COLLECTION_ID = '64c20b45925315c6f23c';
const BUCKET_ID = '65869debdfc84bdec4a1';

export const createFile = async () => {
    const res = await sdk.storage.createFile(
        BUCKET_ID,
        ID.unique(),
        document.getElementById('uploader').files[0]
    )

    return res?.$id;
};

export const getFileView = async (file_id) => {
    const res = await sdk.storage.getFileView(
        BUCKET_ID,
        file_id
    )
    return res;
}

export const getList = async () => {
    const res = await sdk.databases.listDocuments(
        sdk.DATABASE_ID,
        COLLECTION_ID
    );

    return res.documents;
}


// export const create = (data) => sdk.databases.createDocument(
//         "[DATABASE_ID]",
//         "[COLLECTION_ID]",
//         ID.unique(),
//         data
// );

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
