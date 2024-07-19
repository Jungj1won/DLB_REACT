import React from 'react';
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './Edit.css';
import dlbLogo from './img/dlb.png';
import document from './img/document.png';

function Edit() {
    return(
        <div class="container">
            <div class="logo">
                <img src={dlbLogo} alt="DLB Logo"/>
            </div>
            <div class="content">
                <img src={document} alt="Document Icon" class="document-icon"/>
                <h1>수시 자료 준비,<br/>할 것이 너무 많죠?</h1>
                <ul>
                    <li><strong>다양한 학교 제출 문서</strong>의 첨삭을 지원해드립니다</li>
                    <li>학생의 인적사항을 바탕으로 <strong>진로 테마</strong>를 만듭니다</li>
                    <li>테마에 맞는 <strong>빅데이터</strong>를 활용하여 첨삭해드립니다</li>
                </ul>
                <p class="small-text">자기소개서 / 세부능력특기사항 / 실험 보고서 / 체험학습 보고서<br/> / 활동 신청서 / 독후감 등 지원</p>
                <Link to="/" class="btn">상담 및 예약 <span>&#9654;</span></Link>
            </div>
        </div>
    );
}

export default Edit;
