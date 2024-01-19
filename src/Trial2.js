//npm run start
//npm install react-cookie-consent

import React, { useState,useEffect  } from 'react';
import HeaderNav from './components/HeaderNav';
import CookieConsent from "react-cookie-consent";
export default function Firstpage(){
    const [questions, setQuestions] = useState([
        '請問你係家長定係學生？!',
        '你/你既子女Year 幾？!',
        '你想重溫定係學新野？!',
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

     
      return(
        <div>
          <HeaderNav/>
           


            
           <h1>Trial 2</h1>
            {currentQuestionIndex < questions.length ? (
          <div>
            <h2>{questions[currentQuestionIndex]}</h2>
            <button onClick={handleAnswer}>Yes</button>
            <button onClick={handleAnswer}>No</button>
          </div>
        ) : (
          <h2>End of questions</h2>
        )}
        </div>
    )
}



