import axios from 'axios'


const writeBoardEvent = async (title,content,token)=>{
    console.log(token)
    await axios.post('http://localhost:3000/board/write',{
            title: title,
            content: content
        },
        {
            headers: {
                authorization: token
            }
        }).then((res)=>{
            if(res.data.data==='success'){
                alert("글을 작성하였습니다.");
                document.location.href='/board';
            }else{
                alert('글을 작성하지 못하였습니다.')
            }
        }).catch((err)=>{
            console.log(err);
        })
}

export default writeBoardEvent