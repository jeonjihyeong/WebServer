import './App.css';
import logo from './MFI 로고 수정본.png';
import React from 'react';
import {BrowserRouter as Router,Route, Switch, NavLink} from 'react-router-dom';

function App() {
  return (
  <Router>
    <div className="App">
      <Nav></Nav>
      <div></div>
      <div className = "content">
        <Switch>
        <Route path="/" exact><Home></Home></Route>  
        <Route path="/board"><Board></Board></Route> 
        <Route path="/notice"><Notice></Notice></Route>
        <Route path="/introduce"><Introduce></Introduce></Route>
        <Route path="/news"><News></News></Route>
        <Route path="/info"><Info></Info></Route>
        <Route path="/login"><Login></Login></Route>
        <Route path="/">Not Found</Route>  
        </Switch>
      </div>
    </div>
  </Router>
  );
}

function Home(){
  return (
    <div>홈</div>
  )
}
function Introduce(){
  return (
    <div>소개글</div>
  )
}
function Board(){
  return (
    <div>분석글</div>
  )
}
function Notice(){
  return (
    <div>공지</div>
  )
}
function News(){
  return (
    <div>증권 뉴스</div>
  )
}
function Info(){
  return (
    <div>개인정보</div>
  )
}
function Login(){
  return (
    <div>
      <div>
        아이디<input type={"text"} id="id"></input>
      </div>
      <div>
        비밀번호<input type={"text"} id="pw"></input>
      </div>
      <div>
        <input type={"button"} value="로그인"></input>
      </div>
    </div>
  )
}

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

export default App;
