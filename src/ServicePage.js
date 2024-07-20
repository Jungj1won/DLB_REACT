import React from 'react';
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './ServicePage.css';
import dlbLogo from './img/dlb.png';
import call from './img/call.png';
import document from './img/document.png';
import chat from './img/chat.png';
import pen from './img/pen.png';
import teach from './img/teach.png';
import play from './img/play.png';
import light from './img/light.png';
import student from './img/stdents.png';

function ServicePage() {
    return (
    <div class="container">
        <Link to = "/">
            <div class="logo">
                <img src={dlbLogo} alt="DLB Logo"/>
            </div>
        </Link>
        <div class="main-text">
            <p>상담 및 예약</p>
            <img src={call} alt="Calendar Icon"/>
        </div>
        <div class="options">
            <Link to="/edit" class="option">
                <img src={document} alt="Document Icon"/>
                <p>첨삭 관리</p>
            </Link>
            <Link to="/consult" class="option">
                <img src={chat} alt="Consulting Icon"/>
                <p>컨설팅</p>
            </Link>
            <Link to="/studycare" class="option">
                <img src={pen} alt="Study Icon"/>
                <p>학습 관리</p>
            </Link>
            <Link to="/lecture" class="option">
                <img src={teach} alt="Lecture Icon"/>
                <p>현장 강의</p>
            </Link>
            <Link to="/youtube" class="option">
                <img src={play} alt="Internet Lecture Icon"/>
                <p>인터넷 강의</p>
            </Link>
            <Link to="/space" class="option">
                <img src={light} alt="Space Icon"/>
                <p>공간 대여</p>
            </Link>
            <Link to="/government" class="option">
                <img src={light} alt="Space Icon"/>
                <p>지자체 수업</p>
            </Link>

        </div>
        <div class="students">
            <img src={student} alt="Students"/>
        </div>
    </div>
    );
}

// 지자체 수업 클릭 -> 과탐 / 사탐 / 세특 
// 각각 클릭하면 상담으로 넘어가게 
// 
export default ServicePage;