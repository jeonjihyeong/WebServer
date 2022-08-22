import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from "axios"
import writeComment from "../../api/comment/writeComment"


function ViewBoardPage() {
  const [boardContent , setboardContent]=useState([]);
  const [token,setToken]=useState()
  const params = useParams()
    useEffect(()=>{
        console.log('mount');
        const accesstoken = localStorage.getItem('accessToken')
        setToken(accesstoken);
        if (accesstoken ===null){
            alert("로그인을 하셔야 글을 볼 수 있습니다.")
            document.location.href = "/"
        }
        else{
          const getBoard=async()=>{
            await axios.get(`http://localhost:3000/board/content/${params.boardIdx}`,{
        headers: {
            authorization: accesstoken,
        }}).then((res)=>{
            if(res.data.data==="need Token"){
                alert("로그인을 해주세요")
                document.location.href = "/";
            }else{
                const boardInfo = res.data.data
                console.log(boardInfo)
                setboardContent(boardInfo)
            }
        }).catch((err)=>{
          console.log(err);
        })} 
        getBoard();
        }
        return ()=>{
            console.log('unmount');
        };
    },[params]);

 
  return (
    <div className='ViewBoard'>
      {boardContent.length===0 ? <>load</>  : <BoardContent data={boardContent} token={token}/>}
      </div>
  )
}

function BoardContent({data,token}){
  const [comment, setComment]=useState("")
  const handleComment =(e)=>{
    const {value}=e.target
    setComment(value)
  };
  const handleWriteComment=()=>{
    if(token ===null){
      alert("로그인을 해주세요")
      document.location.href('/login')
    }else{
    writeComment(data.boardIdx,comment,token);
    }
  }
  return (
    <>
      <div className='viewBoardTitle'>
          {data.title}
        </div>
        <div className='viewBoardWriter'>
          작성자: {data.user.name}
        </div>
        <div className='viewBoardContent'>
          {data.content}
        </div>
        <div className='viewBoardCreated'>
          작성일: {data.created}
        </div>
          <div className ='Comments'>
            <div className='boardCommentsTitle'>
              댓글
            </div>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <div>
              <input type={"text"} className='writeComments' placeholder='댓글 작성' onChange={handleComment}/>
              <div className="commentButton">
                <input className="button" type={"button"} value="작성" onClick={handleWriteComment}/>
              </div>
            </div>
          </div>
    </>
  )
}

function Comment() {
  return (
    <div className='Comment'>
      <div className='commentLine'>
        <span className="commentWriter">작성자 :</span>
        <span className="commentText">댓글 내용</span>
      </div>
      
      <div className='commentCreated'>
        댓글 작성일: 201833435
      </div>
    </div>
  )
}


export default ViewBoardPage