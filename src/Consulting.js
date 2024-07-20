import React from 'react';
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './Consulting.css';
import dlbLogo from './img/dlb.png';
import chat from './img/chat.png';


function Consulting() {
    return(
        <div class="container">
            <Link to = "/">
                <div class="logo">
                    <img src={dlbLogo} alt="DLB Logo"/>
                </div>
            </Link>
            <div class="content">
                <img src={chat} alt="Consulting Icon" class="consulting-icon"/>
                <h1>희망 학과를<br/>정하지 못하셨나요?</h1>
                <ul>
                    <li>성적 분석을 통해 <strong>적정 대학</strong>을 추천해드립니다</li>
                    <li>1:1 상담을 통해 최적의 <strong>진학 학과</strong>를 알려드립니다</li>
                    <li><strong>수시와 정시</strong> 준비 전략을 상담해드립니다</li>
                </ul>
                <Link to="/" class="btn">상담 및 예약 <span>&#9654;</span></Link>
            </div>
        </div>
    )
}

export default Consulting;