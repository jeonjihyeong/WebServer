<template>
    <v-app class="v-app">
        <NavBar></NavBar>
        <main class="main">
            <router-view></router-view>
        </main>
        <Footer_ />
    </v-app>
</template>

<script>
import NavBar from '@/components/NavBar/navBar.vue';
import Footer_ from '@/components/Footer/Footer_.vue';
    export default {
    name: "mainPage",
    components: {
    NavBar,
    Footer_,
}
}
</script>

<style>
    .main{
        padding: auto;
        vertical-align: center;
        min-height: 800px;
        height: auto;
        margin-bottom: 50px;
        justify-content: center;
    }
</style>