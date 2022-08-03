import '../views/App.css';
import React from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Login from './anonymous/login'
import Nav from './navBar/navBar'
import Acount from './anonymous/acount';
import Board from './board/board';
import Introduce from './notice/introduce';
import Info from './user/info';
import News from './board/news';
import Notice from './notice/notice';
import WriteBoard from './board/writeBoard';




function App() {
  
  return (
  <Router>
    < >
      <Nav />
      <div></div>
      <div className = "content">
        <Switch>
          <Route path="/" exact><Home></Home></Route>  
          <Route exact path="/board"><Board></Board></Route>
          <Route path="/board/write"><WriteBoard /></Route>
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