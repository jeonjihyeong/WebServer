<template>
    <v-container
         justify-center
         grid-list-300px
         class="nav">
         <v-row>
            <v-col cols="2">
                <a href="#">
                    <img height="60px" src="../../../../../front/MFIPNG/MFI 로고 수정본.png">
                </a>
            </v-col>
            <v-col cols="1"></v-col>
            <v-col cols="1" class="navItem">
                    소개
            </v-col>
            <v-col cols="1"></v-col>
            <v-col cols="1" class="navItem">
                    공지
            </v-col>
            <v-col cols="1"></v-col>
            <v-col cols="1" class="navItem">
                    게시판
            </v-col>
            <v-col cols="1"></v-col>
            <v-col cols="1" class="navItem">
                    증권 뉴스
            </v-col>
            <v-col cols="2">
                <v-btn class="blue white--text navButton">
                    내 정보
                </v-btn>
                <v-btn class="blue white--text navButton">
                    로그인
                </v-btn>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
    export default {
        name: "navBar",
        data() {
            return {
                price: 60,
            }
        },
    }
</script>

<style>
    .nav{
        display: flex;
        text-align: center;
        justify-content: center;
        height: 70px;
        margin-bottom: 50px;
    }
    a{
        text-decoration: none; 
        color: inherit;
    }
    .navItem{
        padding-top: 20px;
        margin-top: 5px;
        vertical-align: center;
        font-size: 28px;
        font-weight: bold;
        border-radius: 7px;
        align-items: center;
    }
    .navItem:hover{
        transform: translateY(-2px);
        background-color:rgb(45, 154, 248);
        color: white;
    }

    .navButton{
        margin-top: 15px;
        margin-right: 25px;
        font-size: 20px;
        font-weight: bold;
        border: none;
        border-radius: 15px;
        height: 50px
    }

    


</style>