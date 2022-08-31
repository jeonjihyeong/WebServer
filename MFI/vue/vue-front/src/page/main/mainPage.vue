<template>
    <v-app class="v-app">
        <NavBar></NavBar>
        <signIn></signIn>
    </v-app>
</template>

<script>
import NavBar from '@/components/NavBar/navBar.vue';
import signIn from '../auth/signIn.vue';
    export default {
    name: "mainPage",
    components: { NavBar, signIn }
}
</script>

<style lang="scss" scoped>
    
</style>