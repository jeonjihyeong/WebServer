<template>
    <v-container
         justify-center
         grid-list-300spx
         class="nav">
         <v-row id="pc">
            <v-col cols="2">
                <router-link to="/main">
                    <img height="60px" src="../../../../../front/MFIPNG/MFI 로고 수정본.png">
                </router-link>
            </v-col>
            <v-col cols="2">
                <router-link to="/info">
                    <div class="navItem">
                        소개
                    </div>
                </router-link>
            </v-col>
            <v-col cols="2">
                <router-link to="/info">
                    <div class="navItem">
                        공지
                    </div>
                </router-link>
            </v-col>
            <v-col cols="2">
                <router-link to="/info">
                    <div class="navItem">
                        게시판
                    </div>
                </router-link>
            </v-col>
            <v-col cols="2">
                <router-link to="/info">
                    <div class="navItem">
                        뉴스
                    </div>
                </router-link>
            </v-col>

            <v-col cols="2">
                <router-link to="/user">
                    <v-btn class="blue white--text navButton">
                        내 정보
                    </v-btn>
                </router-link>
                <router-link to="/signIn">
                    <v-btn class="blue white--text navButton">
                        로그인
                    </v-btn>
                </router-link>
            </v-col>
        </v-row>
        <!-- mobile -->
        <v-row class="mobile_item">
            <v-col>
                <a href="#">
                    <img height="60px" src="../../../../../front/MFIPNG/MFI 로고 수정본.png">
                </a>
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

<style scoped>
@media all and (max-width:767px) {
    #pc, .pc_margin, .pc_item{
        display: none;
    }
}
@media all and (max-width:1023px) {
    #pc, .pc_margin, .pc_item{
        display: none;
    }
}
@media all and (min-width:1024px) {
    .mobile_item{
        display: none;
    }
}
    .nav{
        display: flex;
        text-align: center;
        justify-content: center;
        height: 70px;
        margin-bottom: 50px;
    }
    
    
    .navItem{
        padding-top: 7px;
        margin-top: 5px;
        vertical-align: center;
        font-size: 28px;
        font-weight: bold;
        border-radius: 7px;
        align-items: center;
        color: rgb(0, 0, 0);
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