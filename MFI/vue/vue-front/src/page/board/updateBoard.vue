<template>
    <v-container>
        <v-row class="boardTitle">
            게시글 수정
        </v-row>
        <v-row>
            <v-col>
                <v-text-field
                    outlined
                    label="제목"
                    v-model="title"
                    hide-details="false"
            ></v-text-field>
            </v-col>
        </v-row>    
        <v-row>
            <v-col>
                <v-textarea
                outlined
                label="내용"
                v-model="content"
                class="writeContent"
                height="500px"
            ></v-textarea>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-btn
                    class="blue white--text"
                    @click="updateBoard()"
                    >
                    글수정
                </v-btn>
            </v-col>
        </v-row>    
    </v-container>
</template>

<script>
import Axios from 'axios';
    export default {
        name: 'updateBoard',
        data() {
            return {
                title:'',
                content:'',
                writeUser:'',
                accessUser:'',
                accessToken:''
            }
        },
        created () {
            const token = localStorage.getItem("accessToken");
            Axios.get(`http://localhost:3000/board/${this.$route.params.boardIdx}`,{
                headers:{
                    authorization:token
                }
            }).then((res)=>{
                if ("message" in res.data){
                    console.log(res.data.message);
                    return;
                }
                console.log(res.data.data)
                this.title = res.data.data.title;
                this.content = res.data.data.content;
                this.writeUser = res.data.data.userIdx;
                this.accessUser = res.data.accessUser.userIdx
                return;
            })
        },
        methods: {
            updateBoard() {
                if (this.writeUser!==this.accessUser){
                    alert('글을 작성한 사람만 삭제할 수 있습니다.');
                    return;
                }
                const token = localStorage.getItem("accessToken")
                Axios.put(`http://localhost:3000/board/${this.$route.params.boardIdx}`,{
                    title:this.title,
                    content: this.content
                },{
                    headers:{
                        authorization:token
                    }
                }).then((res)=>{
                    if(res.data.message =="Success"){
                        alert("게시글을 수정하였습니다.");
                        location.href ="/board"
                    }
                    if(res.data.message == "Failed"){
                        alert("글을 수정하지 못하였습니다.")
                    }
                    console.log(res.data.data)
                }).catch((err)=>{
                    console.log(err);
                    return
                })
            }
        },

    }
</script>

<style lang="scss" scoped>

</style>