import React, { useState } from 'react'
import writeBoardEvent from '../../service/board/writeBoard'

const WriteBoard= () => {
  const [boardTitle, setTitle]=useState("");
  const [boardContent, setContent]=useState("");

  const handleTitleOnChange = (e) => {
    setTitle(e.target.value)
  }
  const handleContentOnChange = (e) => {
    setContent(e.target.value)
  }
  
  const handlewriteBoardEvent = () =>{
    const token =localStorage.getItem("accessToken");
    // console.log(token)
    if (token===null){
      alert("로그인을 해주세요");
    }else{
      // const boardres={
      //   boardTitle:boardTitle,
      //   boardContent:boardContent,
      //   token:token
      // }
      writeBoardEvent(boardTitle, boardContent, token);
    }
  }
  
  return (
    <> 
       <div>
        <input type={"text"} name="boardTitle" onChange={handleTitleOnChange} className={"title"}></input>
      </div>
      <div>
        <input type={"text"} name="boardContent" onChange={handleContentOnChange} className={"content"}></input>
      </div>
      <div>
        <input type={"button"} value={"글작성"} className={"button"} onClick={handlewriteBoardEvent}></input>
      </div>
    </>
  )
}

export default  WriteBoard

