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
                </v-text-field>
                <v-text-field
                v-if="show1"
                label="인증번호를 입력해주세요."
                color="primary"
                v-model="auth_input"
                hide-details="auto"
                >
                    <template v-slot:append>
                        <v-btn
                            class="blue white--text button"
                            v-on:click="checkAuth()">
                                확인
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
                show1: false,
                check: false,
                auth_key:'',
                auth_input:'',
            }  
        },
        methods: {
            signUp() {
                if (this.check){
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
                        document.location.href = '/'
                    }
                    }).catch((err)=>{
                        console.log(err);
                    })
                }else{
                    alert("이메일 인증을 해주세요.");
                    return;
                }
                
            },

            sendMail(){
                Axios.post("http://localhost:3000/signUpMail",{
                    email:this.email
                }).then((res)=>{
                    if("message" in res.data){
                        if(res.data.message==="Already Existence"){
                            alert("이미 존재하는 이메일입니다.");
                            return;
                        }else{
                            alert("이메일을 전송하지 못하였습니다.");
                            return;
                        }
                    }
                    alert('이메일을 전송하였습니다.')
                    this.show1=true;
                    this.auth_key=res.data.data;
                    
                }).catch((err)=>{
                    console.log(err);
                })
            },
            
            checkAuth(){
                if(this.auth_input==this.auth_key){
                    alert("확인되었습니다.");
                    this.check=true;
                    return;
                }
                alert("인증번호가 틀렸습니다.")
            }
        },
    }
</script>

<style>
    .signUp{
        width: 600px;
        margin-top:100px;
    }
</style>