import { getIdeas } from '$lib/ideas';

export async function load() {
	return {
		ideas: getIdeas()
	};
}
