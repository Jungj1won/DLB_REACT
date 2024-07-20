import React from 'react'
import './Footer.css' // Assuming you will add styles in a separate CSS file

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-info">
          <h2>디엘비에듀(주)</h2>
          <p>주소: 서울시 노원구 한글비석로 232 503호</p>
          <p>전화번호 : 070-4348-5764</p>
          <p>사업자등록번호 : 516-86-03092</p>
          <p>통신판매업신고 : 제 2024-서울노원-0862호</p>
        </div>
      </div>
      <div className="copy-right">
        <p>COPYRIGHT 디엘비에듀(주). All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;
