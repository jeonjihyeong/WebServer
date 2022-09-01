import React from 'react'
import styled from "styled-components";

const UpdateBoard3 = () => {
  return (
    <UpdateBoard>
        <input  type="text" placeholder="제목" className={"title"}/>
        <input  type="text" placeholder="내용" className={"content"}/>
        <div>
          <UpdateButton className=''>수정</UpdateButton>
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

  border: none;
  background: blue;
  color: white; 
  `

export default UpdateBoard3