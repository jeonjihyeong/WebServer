import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from "axios"


function ViewBoardPage() {
  const [boardContent , setboardContent]=useState([]);
  const params = useParams()
    useEffect(()=>{
        console.log('mount');
        const token = localStorage.getItem('accessToken')
        if (token ===null){
            alert("로그인을 하셔야 글을 볼 수 있습니다.")
            document.location.href = "/"
        }
        else{
          const getBoard=async()=>{
            await axios.get(`http://localhost:3000/board/content/${params.boardIdx}`,{
        headers: {
            authorization: token,
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
      {boardContent.length===0 ? <>load</>  : <BoardContent data={boardContent}/>}
      </div>
  )
}

function BoardContent({data}){
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
              <input className='writeComments' placeholder='댓글 작성'/>
              <div className="commentButton">
                <input className="button" type={"button"} value="작성"/>
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