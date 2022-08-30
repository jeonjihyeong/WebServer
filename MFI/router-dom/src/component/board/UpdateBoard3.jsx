import React, { useEffect } from 'react'
import styled from "styled-components";

const UpdateBoard3 = () => {
  useEffect(()=>{

  })
  return (
    <UpdateBoard>
        <input type="text" placeholder="제목" className={"title"}/>
        <input type="text" placeholder="내용" className={"content"}/>
        <div>
          <UpdateButton>수정</UpdateButton>
        </div>
    </UpdateBoard>
  )
} 

const UpdateBoard = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  `;
  
const UpdateButton = styled.button`

  border: 2px solid rgb(180, 184, 243);
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  background: white;
  color: rgb(180, 184, 243);
  font-weight: bold
  font-size: 1rem;
   
  &:hover {
    background: rgb(180, 184, 243);
    color : white;
    cursor: pointer;
    transform: translateY(-2px);
  }
  `

export default UpdateBoard3