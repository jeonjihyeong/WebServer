import Axios from "axios";

const writeComment =async(comment, boardIdx)=>{
    const token = localStorage.getItem("accessToken")
    console.log(token)
    Axios.post("http://localhost:3000/comment",{
        comment:comment,
        boardIdx: boardIdx,        
    },{
        headers: {
            authorization: token
        }
    }).then((res)=>{
        console.log(res.data)
        if (res.data.data=="success"){
            console.log(res.data.data);
            alert("댓글을 작성하였습니다.")
            location.href=`/board/${boardIdx}`
            return 0;
        }
        console.log(res.data.data)
        alert("댓글을 작성하지 못하였습니다.")
    })
}

export default writeComment