import { ID, Query } from 'appwrite';
import { databases } from '$lib/appwrite';

const IDEAS_DATABASE_ID = '657b49cacd1c8614126e'; // Replace with your database ID
const IDEAS_COLLECTION_ID = '657fcef2687665e7a16d'; // Replace with your collection ID

export async function getUser_list() {
	return await databases.listDocuments(
		IDEAS_DATABASE_ID,
		IDEAS_COLLECTION_ID, 
		// Use a query to show the latest ideas first
		[Query.orderDesc('$createdAt')]		);	}

export async function get_user(user_id) {
    return await databases.listDocuments(
		IDEAS_DATABASE_ID,
		IDEAS_COLLECTION_ID,
		// Use a query to show the latest ideas first
		[Query.equal("userId", user_id)]	);	}

export async function username_regist(userId, user_name) {
	await databases.createDocument(IDEAS_DATABASE_ID, IDEAS_COLLECTION_ID, ID.unique(), {
		userId,
		user_name	});		}

export async function password_regist(userId, password) {
	await databases.createDocument(IDEAS_DATABASE_ID, IDEAS_COLLECTION_ID, ID.unique(), {
		userId,
		password	});		}

export async function balance_regist(userId, balance) {
	await databases.createDocument(IDEAS_DATABASE_ID, IDEAS_COLLECTION_ID, ID.unique(), {
		userId,
		balance		});		}

export async function username_update(documentID, userId, user_name) {
	await databases.updateDocument(IDEAS_DATABASE_ID, IDEAS_COLLECTION_ID, documentID, {
		userId,
		user_name	});		}

export async function user_update_password(documentID, userId, password) {
	await databases.updateDocument(IDEAS_DATABASE_ID, IDEAS_COLLECTION_ID, documentID, {
		userId,
		password	});	}

export async function user_update_balance(documentID, userId, balance) {
	await databases.updateDocument(IDEAS_DATABASE_ID, IDEAS_COLLECTION_ID, documentID, {
		userId,
		balance		});	}


export async function img_url_update(documentID, userId, image_link) {
	await databases.updateDocument(IDEAS_DATABASE_ID, IDEAS_COLLECTION_ID, documentID, {
		userId,
		image_link	});		}
