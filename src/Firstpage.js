//npm run start
//npm install react-cookie-consent
import ParentChildMath from './parent-child-math.jpg';

import React, { useState,useEffect  } from 'react';

import CookieConsent from "react-cookie-consent"; // 用於符合GDPR法規既consent
import { useCookies } from 'react-cookie'; // 令react control 到cookie

import HeaderNav from './components/HeaderNav';
import Footer from './components/Footer';
import './Firstpage.css';


import { Link } from 'react-router-dom';
export default function Firstpage(){
  //有關check 密碼既前設
  const [password, setPassword] = useState('');
  const [cookies, setCookie] = useCookies(['loggedIn']);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  

  const checkPassword = () => {
    if (password === '12345') {
      setCookie('loggedIn', true, { path: '/' });



    } else {
      alert('密碼錯誤！');
      setCookie('loggedIn', false, { path: '/' });
    }
  };
  //有關check 密碼既前設完結
  
  //進入first page 時既內容 
  const [questions, setQuestions] = useState([
        '請問你係家長定係學生？',
        '你/你既子女Year 幾？',
        '你想重溫定係學新野？',
  ]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [redirect, setRedirect] = useState(false);
    
  const handleAnswer = () => {
     if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
         console.log(currentQuestionIndex);
        console.log(redirect);
    } else {setRedirect(true); }
  };
      


    useEffect(() => {
       // 如果 redirect 為 true，則在這裡進行重定向
      if (redirect) {
        // 執行重定向到 "abc.js" 頁面
        // 可以在此使用 react-router-dom 中的相應路由方法進行重定向
        // 例如：history.push('/abc') 或使用 <Redirect to="/abc" /> 組件
        console.log("Redirecting to 'abc.js' page...");
      }
    }, [redirect]);
      
    if (redirect) {
      //return <Redirect to="/abc" />;
    }
  // 漸退效果函數
    const fadeOutEffect = (element) => {
       let op = 1;  // 初始透明度
      const timer = setInterval(() => {
        if (op <= 0.05) {
             clearInterval(timer);
              element.style.display = 'none'; // 完全透明後隱藏元素
        }
          element.style.opacity = op;
            op -= op * 0.05; // 每次減少的透明度
      }, 50); // 每50毫秒減少一次透明度
    };
    
  return(
     
    <div>
           <HeaderNav/>
           <CookieConsent
              location="bottom"
              buttonText="I agree"
              declineButtonText="I decline"
              cookieName="cookieConsent"
              style={{ background: "rgba(0, 0, 0, 0.8)", color: "#ffffff" }} 
              buttonStyle={{ background: "rgba(76, 175, 80, 0.8)", color: "#ffffff", fontSize: "13px" }} 
              declineButtonStyle={{ background: "rgba(255, 0, 0, 0.8)", color: "#ffffff", fontSize: "13px" }} 
              
              enableDeclineButton
              onAccept={() => {
                console.log("User accepted cookie settings");
                const consentPopup = document.querySelector(".cookie-consent");
                if (consentPopup) fadeOutEffect(consentPopup);
              }}
              onDecline={() => {
                console.log("User declined cookie settings");
                const consentPopup = document.querySelector(".cookie-consent");
                if (consentPopup) fadeOutEffect(consentPopup);
              }}
            >
              By continuing to use this website, you agree to our use of cookies.
            </CookieConsent>

      <div class="container-style">
      <div class="first-row">
  <div class="column image-column">
    <img src={ParentChildMath} alt="make your own test" />
  </div>
  <div class="column button-column">
    <p><Link to="/test"><button className="pill-button">Start</button></Link></p>
    <p class="new-line">Your Own Test</p>
  </div>
</div>
<div className="intro-row">
  <div className="intro-container">
  <p style={{ marginBottom: '20px' }}>
Welcome to our innovative and comprehensive learning and testing platform, exclusively tailored to meet the needs of students like you! We are dedicated to providing an extensive array of educational resources and a diverse range of practice questions, all meticulously crafted to empower you in your quest for exam success and to enhance your overall learning achievements.
</p>
<p>Our primary objective is to revolutionize the learning experience, injecting it with excitement and productivity, by offering engaging interactive questions and stimulating quizzes. Whether you seek a thorough review of your knowledge or a challenging self-assessment, our platform is the ultimate destination to embark on your educational journey.
</p>
  </div>
</div>
<div className="button-row">
  <Link to="/question"><button className="square-button">Question</button></Link>
  <Link to="/test"><button className="square-button">Test</button></Link>
</div>
      

      </div>
      <Footer/>
    </div>
    

  )
}
/*onAccept={() => {
  console.log("User accepted cookie settings");
  const consentPopup = document.getElementById('cookie-consent-popup'); // 獲取彈窗元素
  fadeOutEffect(consentPopup);
}}

onDecline={() => {
  console.log("User declined cookie settings");
  const consentPopup = document.getElementById('cookie-consent-popup'); // 獲取彈窗元素
  fadeOutEffect(consentPopup);
}}

// 漸退效果函數
function fadeOutEffect(element) {
  let op = 1;  // 初始透明度
  const timer = setInterval(() => {
    if (op <= 0.1) {
      clearInterval(timer);
      element.style.display = 'none'; // 完全透明後隱藏元素
    }
    element.style.opacity = op;
    element.style.filter = 'alpha(opacity=' + op * 100 + ")";
    op -= op * 0.1; // 每次減少的透明度
  }, 50); // 每50毫秒減少一次透明度
}
*/
