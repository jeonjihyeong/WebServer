<template>
    <v-container
       justify-center
       class="findPwCon">
       <v-container v-if="show">
        <v-row class="findPwText">
            비밀번호 찾기
        </v-row>
        <v-row>
            <v-text-field
                label="이름 입력"
                v-model="name"
                hide-details="auto"
            ></v-text-field>
        </v-row>
        <v-row>
            <v-text-field
                label="아이디 입력"
                v-model="id"
                hide-details="auto"
            ></v-text-field>
        </v-row>
        <v-row>
            <v-text-field
                label="이메일 입력"
                v-model="email"
                hide-details="auto"
                @keyup.enter  ="findPwMail()"

            ><template v-slot:append>
                    <v-btn
                        class="blue white--text button"
                        v-on:click="findPwMail()">
                        찾기
                    </v-btn>
                </template>
            </v-text-field>
        </v-row>
        <v-row v-if="sending">
            <v-text-field
                label="인증번호 입력"
                v-model="input_auth_key"
                hide-details="auto">

            <template v-slot:append>
                <v-btn
                    class="blue white--text button"
                    v-on:click="checkAuthKey()">
                        확인
                </v-btn>
            </template>
        </v-text-field>
        </v-row>
    </v-container >
    
        <v-container v-if="!show">
            <v-row class="findPwText">
                비밀번호 변경
            </v-row>
            <v-row>
                <v-text-field
                    label="비밀번호 입력"
                    v-model="new_pw"
                    hide-details="auto"
                    :type="show1 ? 'text' : 'password'"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="show1 = !show1"
                ></v-text-field>
            </v-row>
            
        <v-row>
            <v-text-field
                label="비밀번호 확인"
                v-model="check_new_pw"
                hide-details="auto"
                @keyup.enter  ="changePw()"
                :type="'password'"
            ><template v-slot:append>
                <v-btn
                class="blue white--text button"
                v-on:click="changePw()">
                변경
            </v-btn>
            </template>
            </v-text-field>
        </v-row>
    </v-container>
        <v-row
            class="findIdButton">
        </v-row>
    </v-container>
</template>

<script>
import Axios from 'axios'
    export default {
        name:"findPw",
        data() {
            return {
                name: '',
                id: '',
                email: '',
                new_pw:'',
                check_new_pw:'',
                show:true,
                sending:false,
                input_auth_key:'',
                auth_key:'',
                show1:false,
            }
        },

        methods: {
            findPwMail() {
                Axios.post("http://localhost:3000/findPw",{
                    name:this.name,
                    id:this.id,
                    email:this.email
                }).then((res)=>{
                    if("message" in res.data){
                        console.log(res.data.message);
                        return;
                    }
                    console.log(res.data.data);
                    this.sending=true;
                    this.auth_key=res.data.data
                    alert("이메일을 전송하였습니다. 인증번호를 확인해주세요.")
                    return;
                })
            },
            checkAuthKey(){
                if(this.input_auth_key===this.auth_key){
                    alert("확인되었습니다.");
                    this.show=false;
                    return;
                }
                alert("인증번호를 다시 확인해 주세요.")

            },
            changePw(){
                if (this.new_pw!==this.check_new_pw){
                    alert("비밀번호를 다시 확인해주세요.")
                    return;
                }
                Axios.put("http://localhost:3000/changePw",{
                    new_pw:this.new_pw,
                    id:this.id
                }).then((res)=>{
                    if("message" in res.data){
                        console.log(res.data.message);
                        return;
                    }
                    console.log(res.data.data);
                    alert("성공");
                    document.location.href ='/signIn'
                })
            },
        },
    }
</script>

<style lang="scss" scoped>
.findPwCon{
    width: 500px;
    margin-top: 200px;
}
.findPwText{
    margin-bottom: 15px;
    font-size: 25px;
    font-weight: bold;
    justify-content: center;
}
</style>