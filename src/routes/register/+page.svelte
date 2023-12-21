<svelte:head>
	<script src="https://kit.fontawesome.com/667417c7ec.js" crossorigin="anonymous"></script>
</svelte:head>
<script>
    import { user } from '$lib/user';
	import { invalidateAll } from '$app/navigation';
	import { addIdea, deleteIdea } from '$lib/ideas.js';
    
	export let data;

const add = async (e) => {
    e.preventDefault();
    const formEl = e.target;
    const formData = new FormData(formEl);
    await addIdea($user.$id, formData.get('title'), formData.get('description'));
    invalidateAll();

    // Reset form
    formEl.reset();
};

const remove = async (id) => {
    await deleteIdea(id);
    invalidateAll();
};

const register = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    await user.register(formData.get('email'), formData.get('password'), formData.get('name'));		
};

</script>
	


<nav class="font-extrabold text-2xl text-white mx-4">
	<a href="/">Home</a>
	{#if $user}
		<div>
			<span class="text-green-400 mr-8">Hey, {$user.name}</span>
			<button type="button" on:click={user.logout}>Logout</button>
		</div>
	{:else}
		<a class="absolute right-2" href="/login">Login</a>
	{/if}
</nav>
<div class="text-center">
	<a href="/login">
		<img class="mx-auto" style="margin-top:4vh;" src="../assets/img/logo.png" alt="noPik"></a>
		<div class="container" style="margin-top:7vh;">
		<i id="account" class="fas fa-users"></i><br>
		<label class="register-tab">Register</label>
		<form on:submit={register}>
			<input type="name" name="name" id="name" class="input-text" placeholder="name" required>
			<input type="email" name="email" id="email" class="input-text" placeholder="email" required>
			<input type="password" class="input-text" placeholder="Password" name="password" required minlength="8" /><br>
			<button class="button_register" type="submit"> Register </button>
		</form>
	</div>
	<!--FULL REGISTER CODE WOULD BE:
	onClick="Account(Client().setEndpoint("https://cloud.appwrite.io/v1").setProject("657b49523e4b73c530d1");)if (!isBrowser) return; await account.create(ID.unique(), email, password, name); await login(email, password);"-->
</div>

<style>
	.button_register {
        margin: 20px auto;
		font-size: 20px;
		background-color: rgb(10, 51, 98);
		color: white;
		padding: 10px 45px;
		border-radius: 18px;
		box-shadow: 0 0 2px rgb(117, 113, 113);
		border: none;
		cursor: pointer;
    }
    .button_register:hover {
        background-color: rgba(0, 81, 255, 0.781);
    }
	.input-text {
        height: 27px;
		margin: 5px;
		border-radius: 15px;
		border: none;
		outline: none;
		background-color: rgb(209, 209, 209);
		padding: 5px;
		font-size: 17px;
		color: rgb(73, 73, 73);
		text-align: center;
		width: 80%;
	}

	span {
		margin: 5px;
		color: rgb(172, 172, 172);
		cursor: default;
		user-select: none;
		background: rgba(85, 81, 81, 0.637);
		padding: 5px;
		border-radius: 15px;
	}
	#account {
		position: relative;
		font-size: 70px;
		color: #e1cfcf;
		padding: 19px;
		background: rgb(99, 140, 187);
		background: radial-gradient(circle, rgb(10, 51, 98) 54%, rgba(10, 3, 60, 0.97) 100%);
		border-radius: 10px;
		border-bottom-left-radius: 100px;
		border-bottom-right-radius: 100px;
		top: -60px;
		box-shadow: 0 0 5px black;
	}
	.container {
		background-color: white;
		width: 380px;
		margin: auto;
		height: 350px;
		border-radius: 25px;
		box-shadow: 0 0 10px black;
	}
	.register-tab {
		width: 50%;
		text-align: center;
		padding-bottom: 10px;
		margin-left: auto;
		margin-right: auto;
		color: rgb(10, 51, 98);
		font-size: 24px;
	}

</style>