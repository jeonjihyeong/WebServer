/* eslint-disable */
import React, { useState } from 'react'
import writeBoardEvent from '../../api/board/writeBoard'

const WriteBoard= () => {
  const [boardInput, setBoardValue]=useState({
    title:'',
    content:'',
  });
  const [desc, setDesc] = useState('');
    function onEditorChange(value) {
        setDesc(value)
    }

  const handleWriteBoardValue =(e)=>{
    const {name,value}=e.target
    setBoardValue({
      ...boardInput,
      [name]:value
    })
  }
  
  const handlewriteBoardEvent = () =>{
    const token =localStorage.getItem("accessToken");
    if (token===null){
      alert("로그인을 해주세요");
      document.location.href('/login');
    }else{
      writeBoardEvent(boardInput, token);
    }
  }
  
  return (
    <> 
       <div>
        <input type={"text"} placeholde="제목을 입력해주세요." name="title" onChange={handleWriteBoardValue} className={"title"}></input>
      </div>
      <div>
        <input type={"text"} placeholde="내용을 입력해주세요." name="content" onChange={handleWriteBoardValue} className={"content"}></input>
      </div>
      <div>
        <input type={"button"} value={"글작성"} className={"button"} onClick={handlewriteBoardEvent}></input>
      </div>
     
    </>
  )
}

export default  WriteBoard



