<svelte:head>
	<script src="https://kit.fontawesome.com/667417c7ec.js" crossorigin="anonymous"></script>
	<meta name="description" content="Admin" />
	<script src="https://accounts.google.com/gsi/client"></script>
	<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css">
  	<script src="https://apis.google.com/js/api:client.js"></script>
</svelte:head>

<script>
    import { user } from '$lib/user';
	import { goto, invalidateAll } from '$app/navigation';
	import { addIdea, deleteIdea } from '$lib/ideas.js';
	import { account, databases } from '$lib/appwrite';

	
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
		try {
			await user.login(formData.get('email'), formData.get('password'));
		} catch (error) {
			const name = formData.get('password').split('@')[0];
			await user.register(formData.get('email'), formData.get('password'), name);
		}
		goto('/dashboard');
	};
	const google_login = async () => {
		// account.deleteSessions();
		// const test = await account.get();
		// console.log(test);
		try {
			// Call Appwrite's OAuth login method with the provider 'google'
			const response = await account.createOAuth2Session('google', 'http://localhost:5173/dashboard', 'http://localhost:5173/login');
			// Redirect to the Google OAuth page
			// window.location.href = '/login'; // Update with your route
		} catch (error) {
			console.error('Google login error:', error);
		}
	}
	const facebook_login = async () => {
		try {
			// Call Appwrite's OAuth login method with the provider 'google'
			const response = await account.createOAuth2Session('facebook', 'http://localhost:5173/dashboard', 'http://localhost:5173/login');
			// Redirect to the Google OAuth page
			// window.location.href = '/'; // Update with your route
		} catch (error) {
			console.error('Google login error:', error);
		}
		console.log("facebook");
	}
</script>
	


<nav class="font-extrabold text-2xl text-white mx-4">

</nav>

<div class="welcome-screen">
    <div class="container">
        <div class="main-logo"> 
            <svg style="margin-left: auto; margin-right: auto" width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">                       
                <path fill="#F7DBB3" style="stroke-width:1.91;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0.784314%,0.784314%,0.784314%);stroke-opacity:1;stroke-miterlimit:10;" d="M 4.839582 8.180207 C 2.995833 8.180207 1.5 6.684374 1.5 4.839582 C 1.5 2.995833 2.995833 1.5 4.839582 1.5 C 6.684374 1.5 8.180207 2.995833 8.180207 4.839582 " transform="matrix(3.750001,0,0,3.750001,0,0)"/>
                <path fill="#F7DBB3" style="stroke-width:1.91;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0.784314%,0.784314%,0.784314%);stroke-opacity:1;stroke-miterlimit:10;" d="M 8.180207 19.160413 C 8.180207 21.005204 6.684374 22.499996 4.839582 22.499996 C 2.995833 22.499996 1.5 21.005204 1.5 19.160413 C 1.5 17.315622 2.995833 15.82083 4.839582 15.82083 " transform="matrix(3.750001,0,0,3.750001,0,0)"/>
                <path fill="#F7DBB3" style="stroke-width:1.91;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0.784314%,0.784314%,0.784314%);stroke-opacity:1;stroke-miterlimit:10;" d="M 15.82083 4.839582 C 15.82083 2.995833 17.315622 1.5 19.160413 1.5 C 21.005204 1.5 22.499996 2.995833 22.499996 4.839582 C 22.499996 6.684374 21.005204 8.180207 19.160413 8.180207 " transform="matrix(3.750001,0,0,3.750001,0,0)"/>
                <path fill="#F7DBB3" style="stroke-width:1.91;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0.784314%,0.784314%,0.784314%);stroke-opacity:1;stroke-miterlimit:10;" d="M 19.160413 15.82083 C 21.005204 15.82083 22.499996 17.315622 22.499996 19.160413 C 22.499996 21.005204 21.005204 22.499996 19.160413 22.499996 C 17.315622 22.499996 15.82083 21.005204 15.82083 19.160413 " transform="matrix(3.750001,0,0,3.750001,0,0)"/>
                <path fill="#04764e" style="stroke-width:1.91;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0.784314%,0.784314%,0.784314%);stroke-opacity:1;stroke-miterlimit:10;" d="M 19.640621 19.640621 L 14.859372 14.859372 " transform="matrix(3.750001,0,0,3.750001,0,0)"/>
                <path fill="#04764e" style="stroke-width:1.91;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0.784314%,0.784314%,0.784314%);stroke-opacity:1;stroke-miterlimit:10;" d="M 9.140623 9.140623 L 4.359374 4.359374 " transform="matrix(3.750001,0,0,3.750001,0,0)"/>
                <path fill="#04764e" style="stroke-width:1.91;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0.784314%,0.784314%,0.784314%);stroke-opacity:1;stroke-miterlimit:10;" d="M 9.140623 14.859372 L 4.359374 19.640621 " transform="matrix(3.750001,0,0,3.750001,0,0)"/>
                <path fill="#04764e" style="stroke-width:1.91;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0.784314%,0.784314%,0.784314%);stroke-opacity:1;stroke-miterlimit:10;" d="M 19.640621 4.359374 L 14.859372 9.140623 " transform="matrix(3.750001,0,0,3.750001,0,0)"/>
                <path fill="#04764e" style="stroke-width:1.91;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0.784314%,0.784314%,0.784314%);stroke-opacity:1;stroke-miterlimit:10;" d="M 14.859372 9.140623 L 14.859372 14.859372 C 14.859372 16.43958 13.580206 17.72083 11.999998 17.72083 C 10.420831 17.72083 9.140623 16.43958 9.140623 14.859372 L 9.140623 9.140623 C 9.140623 7.561457 10.420831 6.279165 11.999998 6.279165 C 13.580206 6.279165 14.859372 7.561457 14.859372 9.140623 Z M 14.859372 9.140623 " transform="matrix(3.750001,0,0,3.750001,0,0)"/>
            </svg>
            <h2 class="logo-name">D.R.one</h2>
            <p class="logo-text">Delivery App</p>
			<h2 class='label'>
				Sky Delivery
				<br>
				<br>
				Environmentally Safe
			</h2>
        </div>
        <div class="form" id="box1" style="display: none;">
			<form on:submit={login}>
				<input class="input-text" placeholder="Enter Your email Adress..." type="email" name="email" id="email" required />
				<input class="input-text" placeholder="Enter Password..." type="password" name="password" required minlength="8" />
				<button type="submit" class="submit_button">
				<!-- <button type="submit" class="submit_button" onclick="document.getElementById('box1').style.display='none'; document.getElementById('box2').style.display='block';"> -->
					<img src="../assets/img/logout.svg" fill="#fff" alt=""> 
					<span style="width: 100%;">Submit</span>
				</button>
		 	</form>
        </div>
        <div id="box2" style="display: block;">
            <button class="email_button" onclick="document.getElementById('box2').style.display='none'; document.getElementById('box1').style.display='block';">
                <img style="" src="../assets/img/user.png" alt="">
                <span style="width: 100%;"> login with Email</span>
            </button>
        </div>
        <button class="google_button" on:click={google_login}>
            <img style="" src="../assets/img/google-mail.png" alt="">
            <span style="width: 100%;"> login with Google</span>
        </button>
        <button class="facebook_button" on:click={facebook_login}>
            <img style="" src="../assets/img/facebook.png" alt="">
            <span style="width: 100%;"> login with Facebook</span>
        </button>
    </div>
</div>
<style>
	.label{ 
		font-size: 1.5rem;
        margin: 10px 0 0;
        line-height: 1.3;
        font-weight: 600;
		font-family: "Poppins", s;
	}
    .input-text {
        color: black;
        margin-left: auto;
        margin-right: auto;
        border: 2px solid black;
        background-color: #E8E8E8;
        box-sizing: border-box;
        appearance: none;
        box-shadow: none;
        display: block;
        font-size: 16px;
        padding: 18px 25px;
        height: auto;
        line-height: 1.3;
        font-weight: 600;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .submit_button {
		padding: 8px 25px;
		height: 50px;
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
		width: 100%;
		align-items: center;
		justify-content: center;
		color: white;
        background-color: rgb(3, 126, 99);
        margin-bottom: 0;
    }
    .email_button {
		padding: 8px 25px;
		height: 50px;
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
		width: 100%;
		align-items: center;
		justify-content: center;
		color: white;
        background-color: rgb(3, 126, 99);
        margin-bottom: 0;
    }
    .google_button {
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
		width: 100%;
		align-items: center;
		justify-content: center;
		color: #125e30;
        margin-top: 30px;
    }
    .facebook_button {
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
		width: 100%;
		align-items: center;
		justify-content: center;
		background-color: #426ff5;
		color: white;
        margin-top: 30px;
    }
    .logo-name {
        font-size: 38px;
        margin: 10px 0 0;
        line-height: 1.3;
        font-weight: 600;
    }
    .logo-text {
        margin: 10px 0 0;
        font-size: 14px;
        line-height: 24px;
    }
    .welcome-screen {
		margin-top: 50px;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;
        padding-top: 80px;
        padding-bottom: 40px;
        max-width: 1024px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 20px;
        padding-right: 20px;
    }
    .container {
        max-width: 1024px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 20px;
        padding-right: 20px;
        box-sizing: border-box;
    }
    .main-logo{
        text-align: center;
        margin-bottom: 50px;
        
    }
</style>
