<template>
    <v-container class="myInfo">
        <v-row class="infoTitle">
            내정보
        </v-row>
        <v-row class="infoItem">
            이름: {{user.name}}
        </v-row>
        <v-row class="infoItem">
            나이: {{user.age}}
        </v-row>
        <v-row class="infoItem">
            이메일: {{user.email}}
        </v-row>
        <v-row class="infoItem">
            닉네임: {{user.nickname}}
        </v-row>
    </v-container>

</template>

<script>
    import Axios from 'axios';
    export default {
        data() {
            return {
                user: {}
            }
        },
        async created () {
            let token = localStorage.getItem("accessToken");
            Axios.get("http://localhost:3000/user",{
                headers:{
                    authorization:token
                }
            }).then((res)=>{
                if("message" in res.data){
                    console.log(res.data.message)
                    alert("먼저 로그인을 해주세요");
                    location.href = '/';
                    return;
                }
                this.user = res.data.data
            })
        },
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