import './App.css';
import logo from './MFI 로고 수정본.png';
import axios from "axios"
import React, {useState} from 'react';
import {BrowserRouter as Router,Route, Switch, NavLink} from 'react-router-dom';
// import loginEvent from './login'

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
    <div>
      <div>
        아이디<input type="text" name="inputId" onChange={handleIdNameOnChange}></input>
      </div>
      <div>
        비밀번호<input type="text" name="inputPw" onChange={handlePwOnChange}></input>
      </div>
      <div>
        <input type={"button"} value="로그인" onClick={loginEvent}></input>
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
