<script>
	import { invalidateAll } from '$app/navigation';
	import { addIdea, deleteIdea } from '$lib/ideas.js';
	import { user } from '$lib/user.js';

	export let data;

	const add = async (e) => {
		e.preventDefault();
		const formEl = e.target;
		const formData = new FormData(formEl);
		await addIdea($user.$id, formData.get('title'), formData.get('description'));
		invalidateAll();

		formEl.reset();};

	const remove = async (id) => {
		await deleteIdea(id);
		invalidateAll();	};

</script>



<nav class="font-extrabold text-2xl text-white mx-4">
	<a href="/">Home</a>
	{#if $user}
		<div>
			<span class="text-green-400 mr-4">Hey, {$user.name}</span>
			<button type="button" on:click={user.logout}>Logout</button>
		</div>
	{:else}
		<a class="absolute right-2" href="/register">Register</a>
	{/if}
</nav>


<div class="px-12">
<a href="/register">
	<img class="mx-auto mt-8" style="width:60vw" src="../assets/img/logo.png" alt="idk"/></a>


{#if $user}
	<section class="text-white font-extrabold text-2xl pt-4">
		<h2 class="text-center">Submit Data</h2>
		<form on:submit={add}>
			<label>
				Title
				<input class="text-black" type="text" placeholder="Title" name="title" required />
			</label>
			<label>
				Description
				<textarea class="text-black" placeholder="Description" name="description" />
			</label>
			<button type="submit" class="bg-green-300 rounded-2xl">Submit</button>
		</form>
		<br><br>
		<a href="/crud">
		<button class="bg-orange-300 rounded-2xl text-black">Go to Crud Page</button></a>
	</section>
{:else}
	<section class="text-white font-extrabold text-2xl text-center"><p>Please <a href="/login"><u>login</u></a> to submit an idea.</p></section>
{/if}

<section class="text-white font-extrabold text-2xl">
	<h2>Latest Ideas</h2>
	{#if data.ideas.total === 0}
		<p>No ideas yet.</p>
	{:else}
		<p>{data.ideas.total} ideas found</p>
	{/if}
	<ul>
		{#each data.ideas.documents as idea}
			<li>
				<strong>{idea.title}</strong>
				{#if idea.description}
					<p>{idea.description}</p>
				{/if}
				{#if $user && idea.userId === $user.$id}
					<button class="bg-red-400 rounded-2xl" type="button" on:click={() => remove(idea.$id)}>Remove</button>
				{/if}
			</li>
		{/each}
	</ul>
</section>
</div>


<style>
	section {
		margin-bottom: 3rem;
	}
	form {
		display: grid;
		gap: 0.75rem;
	}

	label {
		display: grid;
		gap: 0.25rem;
	}

	ul {
		list-style: none;
		padding: 0;
	}

	li {
		border-radius: 0.5rem;
		border: 2px dashed pink;
		min-width: 20%;
		padding: 1rem;
		margin-bottom: 1rem;
	}
</style>
