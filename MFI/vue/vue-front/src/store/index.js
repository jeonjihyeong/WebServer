import getBoard from "@/api/board/boardApi"

const getBoardList=async()=>{
    try{
        const result = await getBoard();
        console.log(result);
        console.log("store");
        return result;
    }catch(err){
        console.log(err);
    }
}


export default getBoardList;