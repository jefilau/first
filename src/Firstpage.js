//npm run start
//npm install react-cookie-consent

import React, { useState,useEffect  } from 'react';

import CookieConsent from "react-cookie-consent"; // 用於符合GDPR法規既consent
import { useCookies } from 'react-cookie'; // 令react control 到cookie

import HeaderNav from './components/HeaderNav';

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
    const buttonStyle = {
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px'
    };
    
  return(
    <div>

    {!cookies.loggedIn ? (
       //用戶未入密碼，被要求輸入密碼 
        <div>
          <input type="password" value={password} onChange={handlePasswordChange} />
          <button onClick={checkPassword}>提交</button>
        </div>

      ) : (
        
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

            <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#4CAF50', marginBottom: '20px' }}>學習加強平台</h1>
      
      <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <p style={{ fontSize: '18px', color: '#333', marginBottom: '15px' }}>
          歡迎來到專為學生設計的學習和測試平台！我們提供豐富的學習資料和練習題，
          幫助你有效準備考試，提升學習成效。
        </p>
        <p style={{ fontSize: '16px', color: '#555', marginBottom: '20px' }}>
          我們的目標是通過互動式問題和測驗，讓學習變得更有趣、更有效率。無論是溫習
          還是挑戰自我，這裡都是你的理想選擇。
        </p>
        <div style={{ marginTop: '20px' }}>
          <Link to="/question">
            <button style={buttonStyle}>嘗試問題</button>
          </Link>
          <Link to="/test">
            <button style={{ ...buttonStyle, marginLeft: '10px' }}>進行測驗</button>
          </Link>
        </div>
      </div>
    </div>

        </div>
      )

    }
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
