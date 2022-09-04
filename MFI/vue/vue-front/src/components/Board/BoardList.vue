<template>
    <v-row>
        <v-col cols="1" class="item">
            {{name}}
        </v-col>
        <v-col cols="6" class="item">
            내용asdasd
        </v-col>
        <v-col cols="2" class="item">
            글쓴이
        </v-col>
        <v-col cols="3" class="item">
            게시 날짜
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name:"BoardList",
        props:['name']
    }
</script>

<style>

</style>