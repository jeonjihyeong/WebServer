<template>
    <v-container class="signUp">
        <v-row>
            <v-col>
                <div style="font-size: 20px;
                    font-weight: bold;"
                >회원가입</div>
                <v-text-field
                    label="아이디"
                    v-model="id"
                    hide-details="auto"
                ></v-text-field>
                <v-text-field
                    label="비밀번호"
                    v-model="pw"
                    hide-details="auto"
                    :type="show ? 'text' : 'password'"
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="show = !show"
                ></v-text-field>
                <v-text-field
                label="이름"
                v-model="name"
                hide-details="auto"
                ></v-text-field>
                <v-text-field
                label="닉네임"
                v-model="nickname"
                hide-details="auto"
                ></v-text-field>
                <v-text-field
                label="나이"
                v-model="age"
                hide-details="auto"
                ></v-text-field>

                <v-text-field
                label="이메일"
                color="primary"
                v-model="email"
                hide-details="auto"
                >
                    <template v-slot:append>
                        <v-btn
                            class="blue white--text button"
                            v-on:click="sendMail()">
                                인증
                        </v-btn>
                    </template>
                </v-text-field><br>
                <v-btn class="blue white--text" width="100%" v-on:click="signUp()">회원가입</v-btn>
            </v-col>
        </v-row>

    
    </v-container>
</template>

<script>
import Axios from 'axios';

    export default {
        name:"signUp",
        data() {
            return {
                id: '',
                pw: '',
                email: '',
                name: '',
                nickname: '',
                age: '',
                show: false,
            }
        },
        methods: {
            signUp() {
                Axios.post("http://localhost:3000/signup",{
                    id: this.id,
                    pw: this.pw,
                    age: this.age,
                    email: this.email,
                    name: this.name,
                    nickname: this.nickname,
                }).then((res)=>{
                    if (res.data.data===0){
                        alert("아이디가 이미 존재합니다.")
                    }else{
                        alert("회원가입에 성공하였습니다.")
                    }
                }).catch((err)=>{
                    console.log(err);
                })
            },
            sendMail(){
                Axios.post("http://localhost:3000/signup/mail",{
                    email:this.email
                }).then((res)=>{
                    console.log(res.data.data);
                }).catch((err)=>{
                    console.log(err);
                })
            }
        },
    }
</script>

<style>
    .signUp{
        width: 30%;
        margin-top:100px;
    }
</style>