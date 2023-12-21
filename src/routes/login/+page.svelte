<svelte:head>
	<script src="https://kit.fontawesome.com/667417c7ec.js" crossorigin="anonymous"></script>
	<meta name="description" content="Admin" />
	<script src="https://accounts.google.com/gsi/client"></script>
	<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css">
  	<script src="https://apis.google.com/js/api:client.js"></script>
</svelte:head>

<script>
    import { user } from '$lib/user';
	import { invalidateAll } from '$app/navigation';
	import { addIdea, deleteIdea } from '$lib/ideas.js';
	import { onMount } from 'svelte';
	import { account, databases } from '$lib/appwrite';
	import { Query } from 'appwrite';

	// import {  } from '$lib/users';
	
	const add = async (e) => {
		e.preventDefault();
		const formEl = e.target;
		const formData = new FormData(formEl);
		await addIdea($user.$id, formData.get('title'), formData.get('description'));
		invalidateAll();

		// Reset form
		formEl.reset();		};

	const remove = async (id) => {
		await deleteIdea(id);
		invalidateAll();		};

	const login = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		await user.login(formData.get('email'), formData.get('password'));	
	};
	const google_login = async () => {
		try {
			// Call Appwrite's OAuth login method with the provider 'google'
			const response = account.createOAuth2Session('google');
			// Redirect to the Google OAuth page
			// window.location.href = '/'; // Update with your route
		} catch (error) {
			console.error('Google login error:', error);
		}
	}
	const facebook_login = async () => {
		try {
			// Call Appwrite's OAuth login method with the provider 'google'
			const response = await account.createOAuth2Session('facebook');
			// Redirect to the Google OAuth page
			// window.location.href = '/'; // Update with your route
		} catch (error) {
			console.error('Google login error:', error);
		}
		// console.log("facebook");
	}

	// onMount(async () => {
	// 	google.accounts.id.initialize({
	// 		client_id: clientId,
	// 		callback: handleCredentialResponse,
	// 	});
	// 	google.accounts.id.renderButton(
	// 		document.getElementById('buttonDiv'),
	// 		{
	// 			theme: 'outline', // You can set the theme to 'outline' or 'filled'
	// 			// size: 'large',    // You can set the size to 'small', 'medium', or 'large'
	// 			text: 'Sign With Google',   // You can set the text to 'signin' or 'continue'
	// 			shape: 'rectangular', // You can set the shape to 'rectangular' or 'pill'
	// 			width: '150px',    // You can set the width in pixels
	// 			height: '50px',     // You can set the height in pixels
	// 		}
	// 	);
		
	// 	google.accounts.id.prompt();
	// });

	// const handleCredentialResponse = async (response) => {

	// 	const responsePayload = decodeJwtResponse(response.credential);
	// 	console.log(responsePayload);

	// 	console.log("ID: " + responsePayload.sub);
	// 	console.log('Full Name: ' + responsePayload.name);
	// 	console.log('Given Name: ' + responsePayload.given_name);
	// 	console.log('Family Name: ' + responsePayload.family_name);
	// 	console.log("Image URL: " + responsePayload.picture);
	// 	console.log("Email: " + responsePayload.email);
	// 	const email = responsePayload.email;
	// 	const name = responsePayload.name;
	// 	const avatar = responsePayload.picture;
	// 	// const userData = await databases.listDocuments(
	// 	// 	IDEAS_DATABASE_ID, 
	// 	// 	IDEAS_COLLECTION_ID,
	// 	// 	[Query.equal("email", email)]
	// 	// );
	// 	try {
	// 		// Call Appwrite's OAuth login method with the provider 'google'
	// 		const response = await account.createOAuth2Session('google');
	// 		console.log(response);
	// 		// Redirect to the Google OAuth page
	// 		// window.location.href = '/'; // Update with your route
	// 	} catch (error) {
	// 		console.error('Google login error:', error);
	// 	}
		
	// }
	
	// function decodeJwtResponse(token) 
	// {
	// 	  let base64Url = token.split('.')[1]
	// 	  let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
	// 	  let jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
	// 		  return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
	// 	  }).join(''));
	// 	  return JSON.parse(jsonPayload)
	// }

</script>
	


<nav class="font-extrabold text-2xl text-white mx-4">
	<a href="/">Home</a>
	{#if $user}
		<div>
			<span class="text-green-400 mr-8">Hey, {$user.name}</span>
			<button type="button" on:click={user.logout}>Logout</button>
		</div>
	{:else}
		<a class="absolute right-2" href="/register">Register</a>
	{/if}
</nav>

<div class="text-center">
	<a href="/register">
	<img class="mx-auto" style="margin-top:4vh;" src="../assets/img/logo.png" alt="noPik"></a>
	<div class="container" style="margin-top:7vh;">
		<i id="account" class="fas fa-users"></i><br>
		<label class="login-tab">Login / Regist</label>
		<form on:submit={login}>
			<input type="email" name="email" id="email" class="input-text" placeholder="email" required>
			<input type="password" class="input-text" placeholder="Password" name="password" required minlength="8" /><br>
			<button class="button_login" type="submit"> Login / Regist</button>
		</form>
		<button class="google_login_button" on:click={google_login}>		
			<span style="width: 100%;"> Login with Google</span>
			<img style="" src="../assets/img/google-mail.png" />
		</button>
		<button class="facebook_login_button" on:click={facebook_login}>		
			<span style="width: 100%;"> Login with Facebook</span>
			<img style="" src="../assets/img/facebook.png" />
		</button>
		
	</div>
	<!--FULL REGISTER CODE WOULD BE:
	onClick="Account(Client().setEndpoint("https://cloud.appwrite.io/v1").setProject("657b49523e4b73c530d1");)if (!isBrowser) return; await account.create(ID.unique(), email, password, name); await login(email, password);"-->
</div>
<style>
	.google_login_button {
		border: 1px solid #d1d1d1;
		padding: 8px 25px;
		height: auto;
		line-height: 1.3;
		font-weight: 600;
		transition-duration: .3s;
		transform: translate(0, 0, 0);
		text-transform: capitalize;
		border-radius: 50px;
		letter-spacing: unset;
		display: flex;
		margin-left: auto;
		margin-right: auto;
		width: 80%;
		align-items: center;
		justify-content: center;
		color: #125e30;
	}
	.facebook_login_button {
		border: 1px solid #d1d1d1;
		padding: 8px 25px;
		height: auto;
		line-height: 1.3;
		font-weight: 600;
		transition-duration: .3s;
		transform: translate(0, 0, 0);
		text-transform: capitalize;
		border-radius: 50px;
		letter-spacing: unset;
		display: flex;
		margin-left: auto;
		margin-right: auto;
		width: 80%;
		align-items: center;
		justify-content: center;
		margin-top: 10px;
		background-color: #426ff5;
		color: white;
	}
	.button_login {
        margin: 10px auto;
		font-size: 20px;
		background-color: rgb(10, 51, 98);
		color: white;
		padding: 10px 45px;
		border-radius: 18px;
		box-shadow: 0 0 2px rgb(117, 113, 113);
		border: none;
		cursor: pointer;
    }
    .button_login:hover {
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
		height: 400px;
		border-radius: 25px;
		box-shadow: 0 0 10px black;
	}
	.login-tab {
		width: 50%;
		text-align: center;
		padding-bottom: 10px;
		margin-left: auto;
		margin-right: auto;
		color: rgb(10, 51, 98);
		font-size: 24px;
	}
</style>