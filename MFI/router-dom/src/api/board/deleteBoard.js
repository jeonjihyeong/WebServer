import axios from "axios"

const deleteBoard=async(boardIdx,token)=>{
    await axios.delete(`http://localhost:3000/board/delete/${boardIdx}`,{
        headers:{
            authorization: token
        }
    }).then((res)=>{
        if (res.data.message==="Success"){
            alert("삭제하였습니다.")
            document.location.href='/board';
        }else{
            alert("삭제할 수 없습니다.")
        }
    })
}

export default deleteBoard