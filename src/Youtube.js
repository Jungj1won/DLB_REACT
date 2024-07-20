import React from 'react';
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './Youtube.css';
import dlbLogo from './img/dlb.png';
import play from './img/play.png';
function Youtube() {
    return(
        <div class="container">
            <Link to = "/">
                <div class="logo">
                    <img src={dlbLogo} alt="DLB Logo"/>
                </div>
            </Link>
            <div class="content">
                <img src={play} alt="Play Icon" class="play-icon"/>
                <h1>DLB 에듀에서는<br/>인강을 무료로!</h1>
                <ul>
                    <li>유튜브를 통해 인터넷 강의를 <strong>무료로</strong> 제공합니다</li>
                    <li>모든 강의는 <strong>기출 문제</strong>를 바탕으로 진행됩니다</li>
                    <li>정기조사를 통해 <strong>원하는 문제</strong> 강의를 제작합니다</li>
                </ul>
                <Link to = "https://www.youtube.com/@DLBEDU-TV" class="btn">바로가기 <span>&#9654;</span></Link>
            </div>
        </div>
    )
}
export default Youtube;