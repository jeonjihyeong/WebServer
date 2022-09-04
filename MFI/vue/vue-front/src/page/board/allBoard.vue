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
                <div>
                    {{user}}
                </div>
        </v-row>
        <v-row><BoardList :name="name"/></v-row>
    </v-container>
</template>

<script>
    import BoardList from '@/components/Board/BoardList.vue';
    import Axios from 'axios'
    export default {
    name: "allBoard",
    
    data() {
        return {
            name: "jihyeong",
            user:this.result,
        };
    },
    
    components: { BoardList },
    
    methods: {
        getBoardList() {
            this.getBoard();
        },
        async getBoard(){
    let token = localStorage.getItem("accessToken")
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
        return resData;

    }).catch((err)=>{
        console.log(err);
        return 0;
    })
        }
    },
    async created(){
        const result =await this.getBoardList();
        return result
    }
}
</script>

<style>
    .boardContent{
        justify-content: center;
        width: 80%;
        margin-top: 100px;
    }
    .boardTitle{
        text-align: left;
        font-size: 25px;
        font-weight: bold;
        margin-bottom: 30px;
        border-bottom: 3px solid rgb(53, 151, 255);
    }
    .item{
        text-align: center;
        font-weight: bold;
    }
    .table{
        border-bottom:1px solid #ccc;
        place-items: center;
    }
</style>