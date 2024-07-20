import React from 'react';
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import dlbLogo from './img/dlb.png';
import tieLogo from './img/tie.png';
import ServicePage from './ServicePage'
import Edit from './Edit';
import Consult from './Consulting';
import StudyCare from './StudyCare';
import Lecture from './Lecture';
import Youtube from './Youtube';
import Space from './Space';
import Footer from './Footer' 

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element = {<Dlb/>}/>
            <Route path="/service" element = {<ServicePage/>}/>
            <Route path="/edit" element = {<Edit/>}/>
            <Route path = '/consult' element = {<Consult/>}/>
            <Route path = "/studycare" element = {<StudyCare/>}/>
            <Route path = "/lecture" element = {<Lecture/>}/>
            <Route path = "/youtube" element = {<Youtube/>}/>
            <Route path = "/space" element = {<Space/>}/>
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
  );
}

export default App;

function Dlb() {
  return (
    <div className="container">
      <div className="logo">
        <img src={dlbLogo} alt="DLB Logo" />
      </div>
      {/* <div className="tie">
        <img src={tieLogo} alt="tie Logo" />
      </div> */}
      <div className="text">
        <p>학생들도</p>
        <p><span className="highlight">매니저</span>가</p>
        <p>필요합니다</p>
      </div>
      <div className="buttons">
        <Link to="/" className="btn new" style={{ textDecoration: "none"}}><span className="new-text">NEW!</span> 심리 테스트로 맞춤형 서비스 찾기 (8월중순 오픈예정) <span>&#9654;</span></Link>
        <Link to="/service" className="btn" style={{ textDecoration: "none"}}>서비스 둘러보기 <span>&#9654;</span></Link>
      </div>
    </div>
  )
}