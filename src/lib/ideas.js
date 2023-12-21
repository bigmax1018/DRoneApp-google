import { ID, Query } from 'appwrite';
import { databases } from '$lib/appwrite';

const IDEAS_DATABASE_ID = '657b49cacd1c8614126e'; // Replace with your database ID
const IDEAS_COLLECTION_ID = '657b49d4431b5fd0722f'; // Replace with your collection ID

export async function getIdeas() {
	return await databases.listDocuments(
		IDEAS_DATABASE_ID,
		IDEAS_COLLECTION_ID,
		// Use a query to show the latest ideas first
		[Query.orderDesc('$createdAt')]
	);
}

export async function addIdea(userId, title, description) {
	await databases.createDocument(IDEAS_DATABASE_ID, IDEAS_COLLECTION_ID, ID.unique(), {
		userId,
		title,
		description
	});
}

export async function deleteIdea(id) {
	await databases.deleteDocument(IDEAS_DATABASE_ID, IDEAS_COLLECTION_ID, id);
}
