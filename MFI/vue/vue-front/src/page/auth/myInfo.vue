<template>
    <v-container class="myInfo">
        <v-row class="infoTitle">
            내정보
        </v-row>
        <v-row class="infoItem">
            이름
        </v-row>
        <v-row class="infoItem">
            나이
        </v-row>
        <v-row class="infoItem">
            닉네임
        </v-row>
        <v-row class="infoItem">
            회원가입일
        </v-row>
        <v-row class="infoItem">
            이메일
        </v-row>
    </v-container>

</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.myInfo{
    justify-content: center;
    margin-top: 30px;
    width: 80%;
}

.infoTitle{
    text-align: left;
    font-size: 25px;
    font-weight: bold;
    border-bottom: 3px solid rgb(53, 151, 255);
}

.infoItem{
    font-size: 20px;
}
</style>