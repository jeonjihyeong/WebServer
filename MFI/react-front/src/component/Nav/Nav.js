import logo from '../../views/img/MFI 로고 수정본.png';
import {NavLink} from 'react-router-dom';
import Button from '@mui/material/Button';
// import styled from "styled-components";


function Nav(){
  const token = localStorage.getItem("accessToken");
  
    return (
      <div className='nav'>
        <nav className = "navBar">
          <Button><NavLink to="/" ><img src = {logo} alt = "logo" className= "logo"/></NavLink></Button>
          <Button
            variant='Text'
            sx={{
              fontSize: 30,
              fontWeight: 600
              }}>
                <NavLink to="/introduce" >MFI 소개</NavLink>
          </Button>
          <Button
            variant='Text'
            sx={{
              fontSize: 30,
              fontWeight: 600
              }}><NavLink to="/board" >분석글</NavLink>
          </Button>
          <Button
            variant='Text'
            sx={{
              fontSize: 30,
              fontWeight: 600
              }}><NavLink to="/notice" >공지</NavLink>
          </Button>
          <Button
            variant='Text'
            sx={{
              fontSize: 30,
              fontWeight: 600
              }}><NavLink to="/news" >증권 뉴스</NavLink></Button>
          <div><NavLink to="/info" ><Button variant="contained" sx={{backgroundColor:'rgb(180,184,243)'}}>내정보</Button></NavLink></div>
          <div><Login token={token} /></div>
        </nav> 
      </div>
      
    )
  }

  const Login=({token})=>{
    const logOut=()=>{
      localStorage.removeItem("accessToken");
      document.location.href = "/"
    }
    return (
      <>
       {token===null ? <NavLink exat to='/login'><Button variant="contained" sx={{backgroundColor:'rgb(180, 184, 243)'}}>로그인</Button></NavLink> : <Button variant="contained" sx={{backgroundColor:'rgb(180, 184, 243)'}} onClick={logOut}>로그아웃</Button>}


      </>
    )
  }

export default Nav