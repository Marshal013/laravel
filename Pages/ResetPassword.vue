<template>
    <div class="container">
        <div class="col-md-6 m-auto">
            <h1>Reset Password</h1>
            <div class="mt-3" style="color:red;">
                {{ errmessage }}
            </div>
            <div class="mt-3">
                <form @submit.prevent="submitReset">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">password</label>
                        <input type="password" class="form-control" id="exampleFormControlInput1" v-model="form.password">
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Password Confirmation</label>
                        <input type="password" class="form-control" id="exampleFormControlInput1" v-model="form.password_confirmation">
                    </div>
                    <div>
                        <button type="submit" class="btn btn-primary">Reset</button>
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
    token: router.params.token,
    email: router.query.email,
    password: '',
    password_confirmation: ''
});

const errmessage = ref();

const submitReset = async () => {
    await useAuth.getToken();
    await axios.post('/reset-password', {
        token: form.value.token,
        email: form.value.email,
        password: form.value.password,
        password_confirmation: form.value.password_confirmation
    }).then(response => {
        if (response.status !== null) {
            router.push('/login');
        }
        console.log(response.data.message);
        errmessage.value = response.data.message;
    }).catch(error => {
        console.log(error.message);
        errmessage.value = error.response.data.message;
    });
}
</script>
