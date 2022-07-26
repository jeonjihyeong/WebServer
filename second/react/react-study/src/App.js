import Header from './components/Header.js';
import Nav from './components/Nav.js';
import Footer from './components/Footer.js';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Members from './components/contents/Members';
import Search from './components/contents/Search';


function App(){
  return (
    <div>
      <Header></Header>
        <hr />
          <div className="container">
            <Nav></Nav>
            <hr />
            <section className="contents">
              <BrowserRouter>
                <Routes>
                  <Route path="/members" element={<Members />} />
                  <Route path="/search" element={<Search />} />
                  <Route path="*" element={<Navigate replace to="/members" />} />
                </Routes>
              </BrowserRouter>
            </section>
            <hr />
          </div>
        <Footer></Footer>
    </div>
  )
}


export default App;


