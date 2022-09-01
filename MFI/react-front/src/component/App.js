/* eslint-disable */
import '../views/App.css';
import React from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Login from './anonymous/login'
import Nav from './Nav/Nav'
import Acount from './anonymous/acount';
import Board from './board/board';
import Introduce from './notice/introduce';
import Info from './user/info';
import News from './board/news';
import Notice from './notice/notice';
import WriteBoard from './board/writeBoard';
import ViewBoardPage from './board/viewBoardPage';
import UpdateBoard from './board/UpdateBoard';
import UpdateBoard2 from './board/UpdateBoard';
import UpdateBoard3 from './board/UpdateBoard3';



function App() {
  
  return (
  <Router>
    < >
      <Nav />
      <div></div>
      <div className = "main">
        <Switch>
          <Route path="/" exact><Home></Home></Route>  
          <Route exact path="/board"><Board></Board></Route>
          <Route path="/board/write"><WriteBoard /></Route>
          <Route path="/board/viewboard/:boardIdx"><ViewBoardPage/></Route>
          <Route path="/board/update/:boardIdx"><UpdateBoard/></Route>
          <Route path="/board/update2/:boardIdx"><UpdateBoard2/></Route>
          <Route path="/board/update3/:boardIdx"><UpdateBoard3/></Route>
          <Route path="/notice"><Notice></Notice></Route>
          <Route path="/introduce"><Introduce></Introduce></Route>
          <Route path="/news"><News></News></Route>
          <Route path="/info"><Info></Info></Route>
          <Route path="/login"><Login></Login></Route>
          <Route path="/acount"><Acount></Acount></Route>
          <Route path="/">Not Found</Route>  
        </Switch>
      </div>
    </>
  </Router>
  );
}

function Home(){
  return (
    <div>홈</div>
  )
}


export default App;