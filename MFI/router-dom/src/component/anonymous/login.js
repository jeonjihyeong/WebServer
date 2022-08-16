import {useState} from 'react'
import { NavLink } from 'react-router-dom'
import loginEvent from '../../api/anonymous/login'

function Login(){

  const [loginInput,setLogin]= useState({
    id: '',
    pw: '',
  })

  const handleLoginValue = (e) => {
    const {name, value}=e.target;
    setLogin({
      ...loginInput,
      [name] : value
    })
}

  const handlelogin = () => {
    loginEvent(loginInput)
}

    return (
      <div className='loginInput'>
        <h2 className='logintext'>로그인하기</h2>
        <nav className='input'>
            <div>
              <input type="text" placeholder='아이디' name="id" onChange={handleLoginValue}></input>
            </div>
            <div>
              <input  type="password" placeholder='비밀번호' name="pw" onChange={handleLoginValue}></input>
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