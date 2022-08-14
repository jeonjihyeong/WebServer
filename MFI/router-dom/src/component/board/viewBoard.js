import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from "axios"


function ViewBoard({data}) {
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
            axios.get(`http://localhost:3000/board/content/${params.boardIdx}`,{
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
        })}
        return ()=>{
            console.log('unmount');
        };
    },[params]);
    console.log(boardContent)


  console.log(params)
  console.log(data)
  return (
    <>
      <div className='viewBoardTitle'>
        title:{boardContent.title}
      </div>
      <div className='viewBoardContent'>
        content:{boardContent.content}
      </div>
      <div>
        comment
      </div>
      viewBoard  
    </>
  )
}

export default ViewBoard