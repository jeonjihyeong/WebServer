import {useState} from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'


function Login(){

  const [inputId,setId]= useState("")
  const [inputPw,setPw]= useState("")

  const handleIdNameOnChange = (e) => {
    setId(e.target.value)
}
  const handlePwOnChange = (e) => {
    setPw(e.target.value)
}
  const loginEvent =async()=>{
    const id = inputId;
    const pw = inputPw;
    console.log (id, pw)
    axios.post("http://localhost:3000/login",{
        id: id,
        pw: pw
    }).then((res)=>{
      if(res.data.data ==='idFailed'){
        alert('아이디 잘못');
        return;
      }
      if(res.data.data ==='pwFailed'){
          alert('패스워드 잘못');
          return;
      }else{
          alert('로그인 성공');
          console.log(res.data.data)
          localStorage.setItem('accessToken',res.data.data)
          document.location.href= '/'
          return;
      }
    }).catch((error)=>{
        console.log(error)
    })
  }
    return (
      <div className='loginInput'>
        <h2 className='logintext'>로그인하기</h2>
        <nav className='input'>
            <div>
            아 이 디: <input type="text" name="inputId" onChange={handleIdNameOnChange}></input>
            </div>
            <div>
            비밀번호: <input type="text" name="inputPw" onChange={handlePwOnChange}></input>
            </div>
            <NavLink to="/acount">회원가입/</NavLink>
            <NavLink to="/idfind">아이디 찾기/</NavLink>
            <NavLink to="/pwfind">Pw 찾기</NavLink>
            <input type={"button"} value="로그인" className='loginButton' onClick={loginEvent} ></input>
        </nav>
      </div>
    )
  }

export default Login