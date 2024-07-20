import React from 'react';
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './Lecture.css';
import dlbLogo from './img/dlb.png';
import teach from './img/teach.png';

function Lecture() {
    return(
        <div class="container">
            <Link to = "/">
                <div class="logo">
                    <img src={dlbLogo} alt="DLB Logo"/>
                </div>
            </Link>
            <div class="content">
                <img src={teach} alt="Teaching Icon" class="teach-icon"/>
                <h1>믿을만한 과탐학원을<br/>찾고 계신가요?</h1>
                <ul>
                    <li><strong>15년 경력</strong>의 과학탐구과목 전문 강사가 강의합니다</li>
                    <li><strong>물/화/생/지</strong> 1, 2 전과목을 선택하실 수 있습니다</li>
                    <li><strong>내신과 수능 대비</strong> 또한 맞춤으로 강의해드립니다</li>
                </ul>
                <Link to="/" class="btn">커리큘럼 보기 <span>&#9654;</span></Link>
                <Link to="https://clinicscience1.wixsite.com/no1science" class="btn">상담 및 예약 <span>&#9654;</span></Link>
            </div>
        </div>
    )
}

export default Lecture;
