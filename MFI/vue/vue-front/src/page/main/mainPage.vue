<template>
    <v-app class="v-app">
        <NavBar></NavBar>
        <main class="main">
            <SignIn></SignIn>
        </main>
        <Footer_ />
    </v-app>
</template>

<script>
import NavBar from '@/components/NavBar/navBar.vue';
import signIn from '../auth/signIn.vue';
import SignIn from '../auth/signIn.vue';
import Footer_ from '@/components/Footer/Footer_.vue';
    export default {
    name: "mainPage",
    components: { NavBar, signIn, SignIn, Footer_ }
}
</script>

<style>
    .main{
        padding: auto;
        vertical-align: center;
        min-height: 550px;
        height: auto;
    }
</style>