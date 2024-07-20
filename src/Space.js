import React from 'react';
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './Space.css';
import dlbLogo from './img/dlb.png';
import light from './img/light.png';

function Space() {
    return(
        <div class="container">
            <div class="logo">
                <img src={dlbLogo} alt="DLB Logo"/>
            </div>
            <div class="content">
                <img src={light} alt="Lamp Icon" class="lamp-icon"/>
                <h1>쾌적한 스터디룸을<br/>찾고 계신가요?</h1>
                <ul>
                    <li><strong>중계동 은행사거리</strong>에 위치한 스터디룸입니다</li>
                    <li>자습뿐만 아니라 <strong>과외 공간</strong>으로도 이용 가능합니다</li>
                    <li><strong>24시간</strong> 운영으로 새벽에도 이용하실 수 있습니다</li>
                </ul>
                <Link to = "https://map.naver.com/p/entry/place/1154171344?placePath=%252Fhome%253Fentry%253Dplt&searchType=place&lng=127.0769571&lat=37.6484451&c=15.00,0,0,0,dh" class="btn">상담 및 예약 <span>&#9654;</span></Link>
            </div>
        </div>  
    )
}

export default Space;
