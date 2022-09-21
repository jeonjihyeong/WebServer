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
        <v-row class="infoItem">
            <v-col>
              내가 쓴 글
            </v-col>
        </v-row>
        <BoardList></BoardList>
        <br><br>
        <div id="app">
  <v-app id="inspire">
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        persistent
        max-width="600px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="blue white--text button"
            dark
            v-bind="attrs"
            v-on="on"
          >
            회원탈퇴
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">비밀번호 확인</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="비밀번호 입력"
                    v-model = "pw"
                    required
                  ></v-text-field>
                </v-col>
                <middle>회원탈퇴를 하기위해서 비밀번호를 입력하시오</middle>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue darken-1"
              text
              @click="dialog = false"
            >
              닫기
            </v-btn>
            <v-btn
                color="blue darken-1"
                text
                v-on:click="deleteUser()">
                    회원탈퇴
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-app>
</div>
 
    </v-container>

</template>

<script>
    import Axios from 'axios';
    export default {
        data() {
            return {
                user: {},
                dialog:false,
                pw:'',
                pw_check:Boolean
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
        methods: {
            checkPw (){
              let token = localStorage.getItem("accessToken");
              Axios.post("http://localhost:3000/user/checkPw",{
                pw:this.pw
              },{
                  headers:{
                    authorization:token
                  }
              }).then((res)=>{
                console.log(res.data.data)
                if(res.data.data==="Success"){
                  this.pw_check = true
                  return
              }
            })
            },
            async deleteUser () {
              
                let token = localStorage.getItem("accessToken");
                Axios.post("http://localhost:3000/user",{
                pw:this.pw
              },{
                  headers:{
                    authorization:token
                  }
              }).then((res)=>{
                    if('message' in res.data){
                        if(res.data.message==="NOT_CORRECT_PW"){
                          alert("비밀번호가 틀렸습니다.")
                          return;
                        }
                        if(res.data.message==="ERROR_DELETE"){
                          alert("비밀번호를 삭제하지 못했습니다.")
                          return;
                        }
                        return;
                    }
                    alert("성공");
                    localStorage.removeItem("accessToken");
                    location.href = '/';
                    return;
                }).catch((err)=>{
                  console.error(err);
                  return;
                })
            }
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