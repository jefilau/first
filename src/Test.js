import React, { useState, useEffect } from 'react';
import HeaderNav from './components/HeaderNav';
import TestMenu from './components/TestMenu';
import TestContent from './components/TestContent';
import TestResults from './TestResults';
import './Test.css';
import {contentComponent} from './components/ContentData';

//呢兩句被迫响度先
import DirectNumber from './components/DirectNumber';
import Equation from './components/Equation';
import LCMandHCF from './components/LCMandHCF';
import Polynomails from './components/Polynomails';
import Factorization from './components/Factorization';
function Test() {

  const [selectedLink, setSelectedLink] = useState(1);

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };
    
  const [componentsArray, setComponentsArray] = useState([]);

  const [isSetTestContent, setIsSetTestContent] = useState(0);
  const [SentComponent, setSentComponent] = useState([]);

  //記錄而家答緊邊題
  const [counter, setCounter] = useState(0); // 初始化計數器狀態

  const onSelectedLinkChanged = (newselectedLink) => {
    setSelectedLink(newselectedLink); // 更新selectedLink
  };

  //處理TestContent.js所存回既User Input 並記錄
  const [userAnswers, setUserAnswers] = useState([]);

  const handleUserAnswer = (answer) => {
    // 創建一個新的回答數組
    const updatedAnswers = [...userAnswers];
    // 更新當前問題的答案
    updatedAnswers[selectedLink - 1] = answer;
    // 設置新的回答數組
    setUserAnswers(updatedAnswers);
  };

  const [score, setScore] = useState(0);
    
    //產生所有題目既問題同答案
      useEffect(() => {
        if (isSetTestContent === 0) {
          // 直接設置 componentsArray 的初始值
          const newArray = [
            { id: 1, component: DirectNumber() },
            { id: 2, component: DirectNumber() },
            { id: 3, component: DirectNumber() },
            { id: 4, component: Equation() },
            { id: 5, component: Equation() },
            { id: 6, component: Polynomails() },
            { id: 7, component: Factorization() },
            { id: 8, component: LCMandHCF() }
          ];
          setComponentsArray(newArray);
          console.log(newArray[1]);
          setIsSetTestContent(1); // 使用 setIsSetTestContent 來更新 IsSetTestContent 的值
        }
      }, [isSetTestContent]);
    // 獲得總題數
    const totalQuestions = componentsArray.length;
     
    // 確定回答既題數，並設定是否容許Enable Submit Button

    const checkAllAnswered = () => {
      // 獲取當前題目的索引（從0開始）
      const currentIndex = selectedLink - 1;
      // 檢查除了當前題目外，其他所有題目的回答是否存在（不是undefined且不是null）
      const allOthersAnswered = userAnswers.every((answer, index) => {
          if (index === currentIndex) return true; // 忽略當前題目的回答
          return answer !== null && answer !== undefined;
      });
  
      // 檢查當前題目的回答是否存在（不是undefined）且不是空字符串
      const currentAnswered = userAnswers[currentIndex] !== undefined && userAnswers[currentIndex] !== '';
  
      // 檢查是否所有題目都已回答或者當前題目已有輸入（對於最後一題）
      return allOthersAnswered && (currentAnswered || currentIndex === componentsArray.length - 1);
  };
  
  
    
    // 計算答對的題數
    const calculateScore = () => {
        return userAnswers.reduce((score, answer, index) => {
            return score + (componentsArray[index].component.Answer === answer ? 1 : 0);
        }, 0);
    };

  
  //Handle Submit Button
  const handleSubmit = (event) => {
      if (event) {
          event.preventDefault();
      }
      const newScore = calculateScore();
      setScore(newScore);
      setShowResults(true); // 更新狀態來顯示結果

  };
  // 新增狀態來控制顯示結果
  const [showResults, setShowResults] = useState(false); 
  // 如果 showResults 為 true，顯示結果頁面
  if (showResults) {
      return <TestResults userAnswers={userAnswers} componentsArray={componentsArray}  score={score}/>;
  }

  const selectedComponent = componentsArray.length > selectedLink - 1 ? componentsArray[selectedLink - 1] : null;

      

    return(
        <div>
            <HeaderNav/>
            <div style={{ display: 'flex' }}>
                <div style={{ flex: '25%' }}><TestMenu selectedLink={selectedLink} onLinkClick={handleLinkClick} userAnswers={userAnswers}
                /></div>
                <div style={{ flex: '5%' }}></div>
                <div style={{ flex: '70%' }}>{/* 將 selectedComponent 傳遞給 TestContent，如果存在 */}
                    {selectedComponent ? (
                        <TestContent selectedLink={selectedLink} //顥示緊邊題
                        SentComponent={selectedComponent} 
                        totalQuestions={totalQuestions}  //呢個測驗幾多條問題
                        onSelectedLinkChanged={onSelectedLinkChanged} //傳回答到邊題
                        onUserAnswer={handleUserAnswer} // 傳遞處理用戶回答的函數
                        isAllAnswered={checkAllAnswered()}
                        onSubmit={handleSubmit}//傳回Submit 
                        />
                    ) : null}
                    </div>
            </div>
        </div>
    );
}

export default Test;


                        
