<script>
    import { user } from '$lib/user';
    import { ID, Query } from 'appwrite';
    import { goto } from '$app/navigation';
    import { databases } from '$lib/appwrite';
	import { invalidateAll } from '$app/navigation';
	import { username_regist, password_regist, balance_regist, user_update_balance, get_user, username_update, user_update_password, img_url_update } from '$lib/users.js';
    import { writable } from 'svelte/store';
    import { storage } from '$lib/appwrite';


const IDEAS_DATABASE_ID = '657b49cacd1c8614126e'; // Our database ID
const IDEAS_COLLECTION_ID = '657fcef2687665e7a16d'; // Our collection ID

let user_data = writable();

$: if ($user) { fetchUserData(); }

async function fetchUserData() {
    const data = await databases.listDocuments(
        IDEAS_DATABASE_ID,
        IDEAS_COLLECTION_ID,
        [Query.equal("userId", $user.$id)]  );
    user_data.set(data);        }


    const change_username = async (e) => {
    e.preventDefault();
    const user_name_from_input = new FormData(e.target).get('username');
    const user_data = await databases.listDocuments(
        IDEAS_DATABASE_ID,
        IDEAS_COLLECTION_ID,
        [Query.equal("userId", $user.$id)]  );
    if(user_data.total != 0){
        await username_update(user_data.documents[0].$id, $user.$id, user_name_from_input);
    } else {
        const user_name = user_name_from_input;
        await username_regist($user.$id, user_name);    }
    e.target.reset();
    invalidateAll();
	fetchUserData();
    goto('/crud');        }


    const change_password = async (e) => {
        e.preventDefault();
        const user_data = await get_user($user.$id);
        const formData = new FormData(e.target);
        const password = formData.get('password');
        if(user_data.total != 0){
            await user_update_password(user_data.documents[0].$id, $user.$id, password);
        }else{
            await password_regist($user.$id, password);  }
        e.target.reset();
        invalidateAll();
	    fetchUserData();
        goto('/crud');    }


const uploadFile = async () => {
        const imageUrl = "";
        const user_data = await get_user($user.$id);
        const file = document.getElementById('uploader').files[0];
        if(user_data.total != 0){
            if (file) {
            const fileData = await storage.createFile('65807159b43b5d85812f', ID.unique(), file);
            const imageUrl = await storage.getFilePreview('65807159b43b5d85812f', fileData.$id);
            console.log(imageUrl.toString());
            await img_url_update(user_data.documents[0].$id, $user.$id, imageUrl.toString());   }
        }else{
            console.log("User not found");  
            alert("At first Regist user.");     }
	        fetchUserData();
            goto('/crud');    }


    const change_balance = async (e) => {
        e.preventDefault();
        const user_data = await get_user($user.$id);
        const formData = new FormData(e.target);
        const balance_input = formData.get('balance');
        if(user_data.total != 0){
            await user_update_balance(user_data.documents[0].$id, $user.$id, balance_input);
        }else{
            await balance_regist($user.$id, balance_input);  }
        e.target.reset();
        invalidateAll();
	    fetchUserData();
        goto('/crud');     }


    const add_balance = async () => {
    const user_data = await get_user($user.$id);
    if(user_data.total != 0){
        let new_balance = Number(user_data.documents[0].balance) + 1;
        await user_update_balance(user_data.documents[0].$id, $user.$id, new_balance);
    }else{
        console.log("User not found");  }
	    fetchUserData();
        goto('/crud');    }


    const subtract_balance = async () => {
    const user_data = await get_user($user.$id);
    if(user_data.total != 0){
        let current_balance = Number(user_data.documents[0].balance);
        let new_balance = current_balance - 1;
        await user_update_balance(user_data.documents[0].$id, $user.$id, new_balance);
    }else{
        console.log("User not found");  }
	    fetchUserData();
        goto('/crud');       }

</script>

<div class="place-items-center text-center text-xl pt-8 font-extrabold text-white ">

    <form on:submit={change_username}>

            <a href="/login">
            <img class="rounded-b-2xl mx-auto" style="width:30vh; margin-bottom:4vh;" src="../assets/img/logo.png" alt="idk" /></a>
        
        
        Change Username:<br><input type="text" name="username" size="12" class="bg-gray-400 placeholder-gray-500"  placeholder="Username..." required/><button class="primary bg-green-400 font-extrabold px-4">Submit</button>
        <br>My Username is: <span class="text-green-400">{$user_data?.documents[0]?.user_name || "________"}</span><br><br>
        
    </form>

    <form on:submit={change_password}>

        Change Password:<br><input type="password" size="12" class="bg-gray-400 placeholder-gray-500" name="password" placeholder="Password..." required/><button name="password" class="primary bg-green-400 font-extrabold px-4">Submit</button>
        <br>My Password is: {$user_data?.documents[0]?.password?.replace(/./g, '*') || "*********"}<br><br>

    </form>

        <div class="text-center rounded-3xl text-xl text-white font-extrabold">
        Change Avatar Picture:<br><input type="file" id="uploader" class="bg-gray-500" style="width:200px" />
        <button on:click={uploadFile} class="bg-green-400 rounded-2xl px-4">Upload</button>
        <br>Image Preview:<img src={$user_data?.documents[0]?.image_link} style="width:90vw" class="mx-auto" alt="No Avatar Yet" /><br><br>
        </div>
    
    <form on:submit={change_balance}>

        <div class="text-center rounded-3xl text-xl  text-white font-extrabold mx-auto" style="width:80vw">
        Change Account Balance:<br><input type="number" name="balance" required class="bg-gray-400 placeholder-gray-500" style="width:100px" placeholder="Number..."/> {#if $user}<button class="primary bg-green-400 font-extrabold px-4"  type="submit">Submit</button>{/if}
        <br>My Amount is: {$user_data?.documents[0]?.balance || "_______"}<br><br>

    </form>

    <div class="text-white" style="margin-bottom:5vh">
        <button class="primary bg-green-600 font-extrabold px-4" on:click={add_balance}>+1 Add</button>

        <button class="primary bg-red-400 font-extrabold px-4 text-black" on:click={subtract_balance}>-1 Subtract</button>
    </div>

        <!--div style="margin-bottom:5vh">
        <img src="https://cloud.appwrite.io/v1/storage/buckets/65807159b43b5d85812f/files/6580928f5aa16004735c/view?project=657b49523e4b73c530d1&mode=admin" alt="Avatar" />
        Direct DB Image Link
        </div-->
</div>


        
    