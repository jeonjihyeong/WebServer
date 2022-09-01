import { TextField, Button } from '@mui/material'
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
    loginEvent(loginInput,setLogin)
    
    
}

    return (
      <div className='loginInput'>
        <h2 className='logintext'>로그인하기</h2>
        <nav className='input'>
            <div>
              <TextField
                type="text"
                label='아이디'
                name="id"
                onChange={handleLoginValue}
                sx={{
                 mb:1,
              }}/>
            </div>
            <div>
              <TextField
                type="password"
                label='비밀번호'
                name="pw"
                onChange={handleLoginValue}/>
            </div>
            <NavLink to="/acount">회원가입/</NavLink>
            <NavLink to="/idfind">아이디 찾기/</NavLink>
            <NavLink to="/pwfind">Pw 찾기</NavLink>
            <Button variant="contained" className='loginButton' onClick={handlelogin} sx={{width:80, backgroundColor:'rgb(180, 184, 243)'}}>로그인</Button>
        </nav>
      </div>
    )
  }

export default Login