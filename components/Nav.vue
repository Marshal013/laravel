<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand">Test</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <Router-Link class="nav-link" aria-current="page" to="/">Home</Router-Link>
                    </li>
                    <li class="nav-item" v-if="!useAuth.user">
                        <Router-Link class="nav-link" to="Login">Login</Router-Link>
                    </li>
                    <li class="nav-item" v-if="!useAuth.user">
                        <Router-Link class="nav-link" to="Register">Register</Router-Link>
                    </li>
                    <li class="nav-item" v-if="useAuth.user">
                        <Router-Link class="nav-link" to="#">
                            <span @click="useAuth.LogOut">Logout</span>
                        </Router-Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script setup>
import { authStore } from '../stores/AuthStore'

const useAuth = authStore();
</script>
<style scoped>
    .nav-link.active{
        color: blue;
    }
</style>