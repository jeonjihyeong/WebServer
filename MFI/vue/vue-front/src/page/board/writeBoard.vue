<template>
    <v-container class="editor">
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
                    @click="writeBoard()">
                    글작성
                </v-btn>
            </v-col>
        </v-row>    
        

    <!-- <v-row>
        <v-col>
            <TipTapEditor/>
        </v-col>
    </v-row> -->
    </v-container>
</template>

<script>
import Axios from 'axios';

// import TipTapEditor from '@/components/TextEditor/tipTapEditor.vue';
    export default {
        data() {
            return {
                title: '',
                content: ''
            }
        },
        methods: {
            writeBoard() {
                const token = localStorage.getItem("accessToken")
                Axios.post("http://localhost:3000/board",{
                    title:this.title,
                    content:this.content
                },{
                    headers:{
                        authorization:token
                    }
                }).then((res)=>{
                    if ("message"===res.data){
                        console.log(res.data.message)
                        alert('글을 작성하지 못했습니다.')
                        return;
                    }
                    console.log(res.data.data)
                    alert('글을 작성하였습니다.')
                    location.href='/board'
                })
            }
        },
    // components: { TipTapEditor }
}
</script>

<style lang="scss" scoped>
.editor{
    text-align: center;
    justify-content: center;
}
.writeContent{
    height: 500px;
}
</style>