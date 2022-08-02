import {useState} from 'react'
import { NavLink } from 'react-router-dom'
import loginEvent from '../../service/anonymous/login'

function Login(){

  const [inputId,setId]= useState("")
  const [inputPw,setPw]= useState("")

  const handleIdNameOnChange = (e) => {
    setId(e.target.value)
}
  const handlePwOnChange = (e) => {
    setPw(e.target.value)
}
  const handlelogin = () => {
    loginEvent(inputId, inputPw)
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
            <input type={"button"} value="로그인" className='loginButton' onClick={handlelogin} ></input>
        </nav>
      </div>
    )
  }

export default Login