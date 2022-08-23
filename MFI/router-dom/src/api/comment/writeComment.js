import axios from "axios"

const writeComment=async(boardIdx,comment, token)=>{
    await axios.post('http://localhost:3000/comment/write',{
            boardIdx,
            comment,
        },
        {
            headers: {
                authorization: token
            }
        }).then((res)=>{
            if(res.data.data==='success'){
                alert("댓글을 작성하였습니다.");
            }else{
                alert('댓글을 작성하지 못하였습니다.')
            }
        }).catch((err)=>{
            console.log(err);
        })
}

export default writeComment