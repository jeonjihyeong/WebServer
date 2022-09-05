<template>
    <v-container>
        <v-row class='boardTitle'>
            {{one_board_data.title}}
        </v-row>
        <v-row v-if=" 'user' in one_board_data" class="one_board_info">
            <v-col cols="2"  class="oneBoard_writer">작성자: {{one_board_data.user.name}}</v-col>
            <v-col cols="9"></v-col>
            <v-col cols="1" class="one_board_created">{{one_board_data.created.substring(0,10)}}</v-col>
        </v-row> <br>
        <v-row class="one_board_content">
            {{one_board_data.content}}
        </v-row>
        <br><br>
        <v-row class='boardTitle'>
            댓글
        </v-row><br>
        <BoardComment v-for="(item, index) in comment_data" :key="index"
        :comment = 'item.comment'
        :comment_user="item.user.name"
        :comment_created="item.created.substring(0,10)"
        /><br>
        <v-row class="writeBoardTitle"> 댓글 작성 </v-row>
        <v-row >
            <v-col cols="11" class="write_comment">
                <v-text-field
                    label="댓글 작성"
                    v-model="comment"
                    hide-details="auto"
                >
                </v-text-field>
            </v-col>
            <v-col cols="1">
                <v-btn 
                    class="blue white--text button"
                    outlined
                    elevation="2"
                    @click="Comment_write()">작성</v-btn>
            </v-col>
        </v-row>

    </v-container>    
</template>

<script>
import Axios from 'axios';
import BoardComment from '../../components/Board/BoardComment.vue';
import writeComment from '@/api/board/writeComment.js'
    export default {
    name: "oneBoard",
    data() {
        return {
            comment: '',
            one_board_data: {},
            one_board_user: {},
            comment_data: {},
            access_user: {}
        };
    },
    methods: {
        Comment_write() {
            writeComment(this.comment, this.$route.params.boardIdx)
        }
    },
    async beforeCreate() {
        const token = localStorage.getItem("accessToken");
        Axios.get(`http://localhost:3000/board/${this.$route.params.boardIdx}`, {
            headers: {
                authorization: token,
            }
        }).then((res) => {
            if ("message" in res.data) {
                console.log(res.data.message);
                alert("유효하지 않은 토큰입니다.");
                location.href = "/";
                return 0;
            }
            console.log(res.data.comment);
            this.one_board_data = res.data.data;
            this.one_board_user = res.data.data.user;
            this.comment_data = res.data.comment;
            this.access_user = res.data.accessUser;
        });
    },
    components: { BoardComment }
}
</script>

<style lang="scss" scoped>
    .one_board_title{
        text-align: left;
        font-size: 20px;
        font-weight: bold;
    }
    

    .oneBoard_writer{
        text-align: left;
        font-size: 14px;
    }
    .one_board_created{
        font-size: 14px;
        color: black;
    }

    .one_board_content{
        font-size: 18px;
        font-weight: normal;
        height: 500px;
        border: 2px solid #ccc;
        border-radius: 8px;
    }

    .writeBoardTitle{
        font-size: 20px;
        font-weight: bold;
    }
    .write_comment{
        border: 1px solid #ccc;
        border-radius: 8px;
    }
</style>