import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from "axios"
import writeComment from "../../api/comment/writeComment"
import { Button } from '@mui/material'
import updateBoard from '../../api/board/updateBoard'
import deleteBoard from '../../api/board/deleteBoard'

function ViewBoardPage() {
  const [boardContent , setboardContent]=useState([]);
  const [commentList , setcommentContent]=useState([]);
  const [user , setuser]=useState([]);
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
                const commentInfo = res.data.comment
                const userInfo = res.data.userInfo
                console.log(boardInfo)
                console.log(commentInfo)
                console.log(userInfo)
                setboardContent(boardInfo)
                setcommentContent(commentInfo)
                setuser(userInfo)
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
      {boardContent.length===0 ? <>load</>  : <BoardContent data={boardContent} token={token} commentList={commentList} userInfo={user} />}
      </div>
  )
  
}
function BoardContent({data,token,commentList,userInfo}){
  const [comment, setComment]=useState("")
  const handleComment =(e)=>{
    const {value}=e.target
    setComment(value)
  };
  const handleWriteComment=()=>{
    writeComment(data.boardIdx,comment,token);
  }
  const handleUpdateBoard=async()=>{
    await updateBoard(data.boardIdx,token);
  }
  const handleDeleteBoard =async()=>{
    await deleteBoard(data.boardIdx,token);
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
        <div className='deleteButton'>
          {userInfo.userIdx===data.userIdx && (<div>
          <Button
            onClick={handleUpdateBoard}
            variant="contained"
            sx={{
              backgroundColor:'rgb(180,184,243)'
            }}>수정</Button>
          <Button
            onClick={handleDeleteBoard}
            variant="contained"
            sx={{
              backgroundColor:'rgb(180,184,243)'
            }}
          >삭제</Button></div>)}
        </div>
          <div className ='Comments'>
            <div className='boardCommentsTitle'>
              댓글
            </div>
            {commentList.map(comment=>
              <Comment comment={comment} key={comment.commentIdx}/>
              )}
            
            <div>
              <input type={"text"} className='writeComments' placeholder='댓글 작성' name="commentInput" onChange={handleComment}/>
              <div className="commentButton">
                <input className="button" type={"button"} value="작성" onClick={handleWriteComment}/>
              </div>
            </div>
          </div>
    </>
  )
}

function Comment({comment}) {
  return (
    <div className='Comment'>
      <div className='commentLine'>
        <span className="commentWriter">{comment.user.name} :</span>
        <span className="commentText">{comment.comment}</span>
      </div>
      
      <div className='commentCreated'>
        댓글 작성일: {comment.created}
      </div>
    </div>
  )
}


export default ViewBoardPage