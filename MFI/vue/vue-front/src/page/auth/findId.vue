<template>
    <v-container
        justify-center
        class="findIdCon">
        <v-row class="findIdText">
            아이디 찾기
        </v-row>
        <v-row>
            <v-text-field
                label="이름"
                v-model="name"
                hide-details="auto"
            ></v-text-field>
        </v-row>
        <v-row>
            <v-text-field
                label="이메일"
                v-model="email"
                hide-details="auto"
                @keyup.enter  ="findIdMail()"

            ><template v-slot:append>
                <v-btn
                class="blue white--text button"
                v-on:click="findIdMail()">
                찾기
            </v-btn>
            </template>
            </v-text-field>
        </v-row>
        <v-row
            class="findIdButton">
            
        </v-row>
    </v-container>
</template>

<script>
import Axios from 'axios';

    export default {
        name:"findId",
        data() {
            return {
                name: '',
                email: '',
            }
        },
        methods: {
            findIdMail() {
                Axios.post("http://localhost:3000/findId/mail",{
                    name:this.name,
                    email:this.email,
                }).then((res)=>{
                    if('message' in res.data){
                        if (res.data.message==="Not Existence Email"){
                            console.log("Not Existence Email");
                            alert("존재하지 않는 이메일입니다.");
                            return;
                        }
                        if (res.data.message==="Not Correct Name"){
                            console.log("Not Correct Name");
                            alert("이름을 확인해주세요");
                            return;
                        }
                        alert("이메일을 보내지 못하였습니다.")
                        return;
                    }
                    alert("이메일을 전송하였습니다. 이메일을 확인해주세요.")
                    document.location.href='/signIn'
                })
            }
        },
    }
</script>

<style lang="scss" scoped>
    .findIdCon{
        width: 400px;
        margin-top: 200px;
    }
    .findIdText{
        margin-bottom: 15px;
        font-size: 25px;
        font-weight: bold;
        justify-content: center;
    }
    .findIdButton{
        justify-content: center;
    }
</style>