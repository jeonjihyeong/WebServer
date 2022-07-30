import {useState} from 'react'
import axios from 'axios'
import loginEvent from '../../controller/anonymous/login'
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
    
    return (
      <div className='loginInput'>
        <h2>로그인하기</h2>
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
            <input type={"button"} value="로그인" onClick={loginEvent} ></input>
        </nav>
      </div>
    )
  }

export default Login