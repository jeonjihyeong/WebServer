<template>
    <v-container
        justify-center
        class="signInContainer">
        <div class="loginText">
            로그인
        </div>
        <v-row>
            <v-text-field
                label="아이디 입력"
                v-model="id"
                hide-details="auto"
            >
            </v-text-field>
        </v-row>
        <v-row>
            <v-text-field
                label="비밀번호 입력"
                v-model="pw"
                hide-details="auto"
                :type="show1 ? 'text' : 'password'"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="show1 = !show1"
                @keyup.enter  ="login"
            ></v-text-field>
        </v-row>
        <v-row>
            <v-col cols="3" class="signInNav"><router-link to="/findId">아이디 찾기</router-link></v-col>
            <v-col cols="4" class="signInNav"><router-link to="/findPw">비밀번호 찾기</router-link></v-col>
            <v-col cols="3" class="signInNav"><router-link to="/signUp">회원 가입</router-link></v-col>
            <v-col cols="1"><v-btn class="blue white--text button" @click="login()">로그인</v-btn></v-col>
        </v-row>
    </v-container>
</template>

<script>
import Axios from "axios"
    export default {
        
        name:"signIn",
        data() {
            return {
                loginNumber: 1,
                id: "",
                pw: "",
                show1: false
            }
        },
        methods: {
            login() {
                const id = this.id;
                const pw = this.pw;
                Axios.post("http://localhost:3000/login",{
                    id: id,
                    pw: pw
                }).then((res)=>{
                    if(res.data.data ==='idFailed'){
                        alert('아이디가 잘못입력되었습니다.');
                        return;
                    }
                    if(res.data.data ==='pwFailed'){
                        alert('비밀번호가 잘못입력되었습니다.');
                        return;
                    }else{
                        alert('로그인 성공');
                        localStorage.setItem('accessToken',res.data.data)
                        location.href='/#'
                        return;
                    }
                }).catch((err)=>{
                    console.log(err)
                })
            }
        },
    }

</script>
<style>

.signInContainer{
    width: 400px;
    margin-top:200px;
}
.loginText{
    margin-bottom: 15px;
    font-size: 25px;
    font-weight: bold;
}    
.loginInput{
    border:1px solid rebeccapurple;
    border-radius: 8px;    
}
.signInNav{
    font-size: 13px;
    font-weight: bold;
    padding-top: 23px;
}
.button{
    border-radius: 12px
}

</style>