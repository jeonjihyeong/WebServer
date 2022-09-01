<template>
    <v-app class="v-app">
        <NavBar></NavBar>
        <main class="main">
            <SignUp></SignUp>
        </main>
        <Footer_ />
    </v-app>
</template>

<script>
import NavBar from '@/components/NavBar/navBar.vue';
import Footer_ from '@/components/Footer/Footer_.vue';
import SignUp from '@/page/auth/signUp.vue';
    export default {
    name: "mainPage",
    components: { NavBar, SignUp, Footer_ }
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