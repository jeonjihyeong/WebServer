<template>
    <v-container>
        <input type="text" placeholder="아이디" class="loginInput">
        <input type="text" placeholder="비밀번호" class="loginInput">
        <v-btn class="blue white--text button">로그인</v-btn>
    </v-container>
</template>

<script>

    export default {
        name:"signIn"
    }
</script>
<style>
.loginInput{
    border:1px solid rebeccapurple;
    border-radius: 8px;    
}
.button{
    border-radius: 12px
}

</style>