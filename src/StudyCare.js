import React from 'react';
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './StudyCare.css';
import dlbLogo from './img/dlb.png';
import pen from './img/pen.png';

function StudyCare() {
    return (
        <div class="container">
            <Link to = "/">
                <div class="logo">
                    <img src={dlbLogo} alt="DLB Logo"/>
                </div>
            </Link>
            <div class="content">
                <img src={pen} alt="Pen Icon" class="pen-icon"/>
                <h1>자습 시간에<br/>집중이 잘 안되시나요?</h1>
                <ul>
                    <li>목표치를 설정해주고, 매일 <strong>성취도를</strong> 검사합니다</li>
                    <li>숙제 상태를 점검하여 매일 <strong>피드백</strong>을 제공합니다</li>
                    <li><strong>자기주도학습</strong>이 어려운 학생들에게 추천드립니다</li>
                </ul>
                <Link to = "/" class="btn">상담 및 예약 <span>&#9654;</span></Link>
            </div>
        </div>
    )
}

export default StudyCare;
