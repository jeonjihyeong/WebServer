import '../views/App.css';
import React from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Login from './anonymous/login'
import Nav from './navBar/navBar'
import Acount from './anonymous/acount';

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
          <Route path="/acount"><Acount></Acount></Route>
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
          









export default App;
