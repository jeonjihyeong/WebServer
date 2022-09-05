<template>
    <v-container
        justify-center
        class="boardContent"
        >
        <v-row class="boardTitle">
            게시글 보기
        </v-row>
        <v-row class="table">
            <v-col cols="1" class="item">
                번호
            </v-col>
            <v-col cols="6" class="item">
                내용
            </v-col>
            <v-col cols="2" class="item">
                글쓴이
            </v-col>
            <v-col cols="3" class="item">
                게시 날짜
            </v-col>
        </v-row>
        <BoardList v-for="(item, index) in allBoardList" :key="index"
            :boardIdx = 'item.boardIdx'
            :index='index'
            :name='item.user.name'
            :title='item.title'
            :created='item.created.substring(0,10)'
            class="boardList"/>
        <v-row class="write_board_button">
            <v-col>
                <router-link to="/write">
                    <v-btn class="blue white--text button">글 작성</v-btn>
                </router-link>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import BoardList from '@/components/Board/BoardList.vue';
    import Axios from 'axios'
    export default {
    name: "allBoard",
    
    data() {
        return {
            userName: "jihyeong",
            allBoardList:{},
        };
    },
    
    components: { BoardList },
    
    async created () {
        let token = localStorage.getItem("accessToken");
        await Axios.get("http://localhost:3000/board",{
        headers:{
            authorization: token,
        }
    }).then((res)=>{
        const resData=res.data;
        if('message' in resData){
            console.log("Error Message:"+resData.message);
            localStorage.removeItem("accessToken");
            alert("유효하지 않은 토큰입니다.");
            location.href='/'
            return 0;
        }
        console.log(resData.data[1]);
        this.allBoardList=res.data.data
        return resData;

    }).catch((err)=>{
        console.log(err);
        return 0;
    })

    },
    
}
</script>

<style>
    .boardContent{
        justify-content: center;
        width: 80%;
        margin-top: 30px;
    }
    .boardTitle{
        text-align: left;
        font-size: 25px;
        font-weight: bold;
        border-bottom: 3px solid rgb(53, 151, 255);
    }
    .item{
        text-align: center;
        font-weight: bold;
    }
    .table{
        border-bottom:2px solid black;
        place-items: center;
    }
    .boardList{
        border-bottom:1px solid #ccc;
    }

    .write_board_button{
        text-align: right;
    }
</style>