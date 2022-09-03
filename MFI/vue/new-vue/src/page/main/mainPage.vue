<template>
    <v-app class="v-app">
        <NavBar></NavBar>
        <main class="main">
            <router-view></router-view>
            <!-- <TiptapEditor></TiptapEditor> -->
            <!-- <SignUp></SignUp> -->
            <!-- <SignIn></SignIn> -->
        </main>
        <Footer_ />
    </v-app>
</template>

<script>
import NavBar from '@/components/NavBar/navBar.vue';
import Footer_ from '@/components/Footer/Footer_.vue';
// import TiptapEditor from '../../components/TextEditor/tipTapEditor.vue';
// import SignUp from '@/page/auth/signUp.vue';
// import SignIn from '../auth/signIn.vue';
    export default {
    name: "mainPage",
    components: {
    NavBar,
    Footer_,
    // TiptapEditor,
}
}
</script>

<style>
    .main{
        padding: auto;
        vertical-align: center;
        min-height: 800px;
        height: auto;
    }
</style>