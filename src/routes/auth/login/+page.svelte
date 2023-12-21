<script>
  import { goto } from '$app/navigation';
  import { state } from '../../../store/auth';

  const github = "../../../assets/img/github.svg";
  const google = "../../../assets/img/google.svg";

  let email = '';
  let password = '';

  const handleSubmit = async (event) => {
      event.preventDefault();
      try {
          await state.login(email, password);
          goto('/');
      } catch (error) {
          alert(error.message);
      }
  };

  async function handleGoogleLogin() {
    try {
      await state.googleAuth();
    } catch (error) {
      console.error('Google login error:', error);
    }
  }

</script>

<svelte:head>
	<title>Login</title>
	<meta name="description" content="Login" />
</svelte:head>
  
<div class="w-screen h-screen bg-[#152E4D]">
  <div class="flex content-center  items-center justify-center h-full">
    <div class="w-full lg:w-4/12 px-4 ">
      <div class="relative  flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
        <br><br><div class="rounded-t mb-0 px-6 py-6 ">
          <div class="text-center mb-3 text-white">
            <img class="pb-[30%]" src="../assets/img/logo.png" alt="f" />
            <h6 class="text-white text-xl font-bold ">
              Sign in with
            </h6>
          </div>
          <div class="btn-wrapper text-center">
            <br><button
              class="bg-white animate-bounce active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
              type="button"
            >
              <img alt="..." class="w-10 mr-1" src="{google}" />
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  