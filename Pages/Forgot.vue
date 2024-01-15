
import { preventOverflow } from '@popperjs/core';
<template>
    <div class="container">
        <div class="col-md-4 m-auto">
            <h1>Forget Password</h1>

            <div class="mt-3" style="color: blue;">
                {{ message }}
            </div>

            <div class="mt-3">
                <form @submit.prevent="submitForgot">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1"
                            placeholder="name@example.com" v-model="form.email">
                    </div>
                    <div>
                        <button type="submit" class="btn btn-primary">Send</button>
                    </div>
                </form>

            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import axios from 'axios'

import { useRouter } from 'vue-router'

import { authStore } from '../stores/AuthStore';

const router = useRouter();
const useAuth = authStore.useAuth;

const form = ref({
    email: '',
});

const message = ref('');

const submitForgot = async () => {
    await useAuth.getToken();
    await axios.post('/forgot-passowrd', {
        email: form.value.email,
    })
        .then(response => {
            if (response.status === 200) {
                message.value = response.data.status
            }
        }).catch(error => {
            console.log(error.response.data.message);
        });
}
</script>