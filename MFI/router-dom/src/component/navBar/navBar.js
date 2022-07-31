import logo from '../../views/img/MFI 로고 수정본.png';
import {NavLink} from 'react-router-dom';

function Nav(props){
    return (
      <div className='nav'>
        <nav className = "navBar">
          <div><NavLink exact to="/" ><img src = {logo} className= "logo"/></NavLink></div>
          <div><NavLink to="/introduce" >MFI 소개</NavLink></div>
          <div><NavLink to="/board" >분석글</NavLink></div>
          <div><NavLink to="/notice" >공지</NavLink></div>
          <div><NavLink to="/news" >증권 뉴스</NavLink></div>
          <div><NavLink to="/info" ><button>내정보</button></NavLink></div>
          <div><NavLink to="/login" ><button>로그인</button></NavLink></div>
        </nav> 
      </div>
    )
  }

export default Nav