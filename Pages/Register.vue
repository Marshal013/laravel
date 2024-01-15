<template>
    <div class="container">
        <div class="col-md-6 m-auto">
            <h1>Register page</h1>
            <div class="mt-3" style="color:red;">
                {{ errmessage }}
            </div>
            <div class="mt-3">
                <form @submit.prevent="submitRegister">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Name</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1"
                            placeholder="Your Name" v-model="form.name">
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1"
                            placeholder="name@example.com" v-model="form.email">
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleFormControlInput1" 
                            v-model="form.password">
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Password Confirmation</label>
                        <input type="password" class="form-control" id="exampleFormControlInput1" 
                            v-model="form.password_Confirmation">
                    </div>
                    <div>
                        <button type="submit" class="btn btn-primary">Register</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import axios from 'axios'

import { useRouter } from 'vue-router'

import { authStore } from '../stores/AuthStore'

const router = useRouter();
const useAuth = authStore();

const form = ref({
    name:'',
    email: '',
    password: '',
    password_Confirmation:''
});
const errmessage = ref();

const submitRegister = async () => {
    await useAuth.getToken ();
    await axios.post('/register', {
        name: form.value.neme,
        email: form.value.email,
        password: form.value.password,
        password_Confirmation: form.value.password_Confirmation
    }).then(response => {
        
        if(response.status === 204){
            router.push('/');
        }
        console.log(response.data.message);
        errmessage.value = response.data.message;
        
        
    }).catch(error =>{
        console.log(error.message);
        errmessage.value = error.response.data.message;
    });
}
</script>