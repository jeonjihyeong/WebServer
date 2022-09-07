<template>
  <div id="app">
    <MainPage/>
  </div>
</template>

<script>
import MainPage from '@/page/main/mainPage.vue';

export default {
  name: 'App',
  components: {
    MainPage
}
}
</script>

<style>
#app {
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a{
  text-decoration: none;
  color: black;
}
</style>
