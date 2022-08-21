import logo from '../../views/img/MFI 로고 수정본.png';
import {NavLink} from 'react-router-dom';
// import styled from "styled-components";


function Nav(){
  const token = localStorage.getItem("accessToken");
  
    return (
      <div className='nav'>
        <nav className = "navBar">
          <div><NavLink to="/" ><img src = {logo} alt = "logo" className= "logo"/></NavLink></div>
          <div><NavLink to="/introduce" >MFI 소개</NavLink></div>
          <div><NavLink to="/board" >분석글</NavLink></div>
          <div><NavLink to="/notice" >공지</NavLink></div>
          <div><NavLink to="/news" >증권 뉴스</NavLink></div>
          <div><NavLink to="/info" ><button>내정보</button></NavLink></div>
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
       {token===null ? <NavLink exat to='/login'><button>로그인</button></NavLink> : <button onClick={logOut}>로그아웃</button>}


      </>
    )
  }

export default Nav