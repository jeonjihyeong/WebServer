import logo from '../../views/img/MFI 로고 수정본.png';
import {NavLink} from 'react-router-dom';

function Nav(){
  const token = localStorage.getItem("accessToken");
  let loginStatus = false;
  
  if (token===null){
    loginStatus = true;
  }else{
  }
    return (
      <div className='nav'>
        <nav className = "navBar">
          <div><NavLink exact to="/" ><img src = {logo} alt = "logo" className= "logo"/></NavLink></div>
          <div><NavLink exact to="/introduce" >MFI 소개</NavLink></div>
          <div><NavLink exact to="/board" >분석글</NavLink></div>
          <div><NavLink exact to="/notice" >공지</NavLink></div>
          <div><NavLink exact to="/news" >증권 뉴스</NavLink></div>
          <div><NavLink exact to="/info" ><button>내정보</button></NavLink></div>
          <div><Login loginStatus={loginStatus} /></div>
        </nav> 
      </div>
    )
  }

  const Login=({loginStatus})=>{
    const logOut=()=>{
      localStorage.removeItem("accessToken");
      document.location.href = "/"
    }
    return (
      <>
       {loginStatus ? <NavLink exat to='/login'><button>로그인</button></NavLink> : <button onClick={logOut}>로그아웃</button>}


      </>
    )
  }

export default Nav