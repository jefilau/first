import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TestHeaderNav from './components/TestHeaderNav';
import TestMenu from './components/TestMenu';
import TestContent from './components/TestContent';
import TestResults from './TestResults';
import { contentComponent } from './components/ContentData';
import './Test.css';
// 主要的Test組件
function Test() {
  // 設置State
  const [selectedLink, setSelectedLink] = useState(1); // 選擇的鏈接/題目
  const [showStartScreen, setShowStartScreen] = useState(true); // 是否顯示開始螢幕
  const [componentsArray, setComponentsArray] = useState([]); // 題目組件數組
  const [userAnswers, setUserAnswers] = useState([]); //處理TestContent.js所存回既User Input 並記錄
  const [ReadQuestions, setReadQuestions] = useState([]); // 記錄user 是否曾經睇過呢題
  const [score, setScore] = useState(0); // 分數
  const [showResults, setShowResults] = useState(false);   // 控制顯示結果
  const [selectedYear, setSelectedYear] = useState(null);// User 揀左邊個year
  const [numberOfQuestions, setNumberOfQuestions] = useState(0);//產生既題目量
  
  // 處理從Test Menu直接點擊鏈接的事件
  const handleLinkClick = (link) => {
    setSelectedLink(link);
    //Update ReadQuestions對應欄位

  };
  //每selectedLink改, ReadQuestions 既對應位都會改
  useEffect(() => {
    const updatedReadQuestions = [...ReadQuestions];
    updatedReadQuestions[selectedLink - 1] = true;
    setReadQuestions(updatedReadQuestions);
  }, [selectedLink]);

  // 開始螢幕的渲染方法
  const renderStartScreen = () => {
    return (
      <div className="start-screen-container">
        <div className="start-screen-inner">
          <p>Welcome to Our Test. Please Select Your Academic Year </p>
          <div className="year-buttons-container">
            <button onClick={() => handleYearSelect(6)}>Year 6</button>
            <button onClick={() => handleYearSelect(8)}>Year 8</button>
            <button onClick={() => handleYearSelect(9)}>Year 9</button>
          </div>
          <div className="back-button-row">
            <Link to="/">
              <button className="back-button">Back</button>
            </Link>
          </div>
        </div>
      </div>
    );
  };
    // 處理年級選擇的函數
    const handleYearSelect = (year) => {
      setSelectedYear(year);
      setShowStartScreen(false); // 可以在這裡關閉開始螢幕
    };

  // 更新選擇既題目
  const onSelectedLinkChanged = (newSelectedLink) => {
    setSelectedLink(newSelectedLink);
  };


  // 處理用戶回答的事件
  const handleUserAnswer = (answer) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[selectedLink - 1] = answer;
    setUserAnswers(updatedAnswers);
  };

    
  //產生所有題目既問題同答案
  useEffect(() => {
    // Function to generate a random number between min and max
    const getRandomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
  
    let questionRange;
    let tempNumberOfQuestions;
    // 根據所選年級設定問題範圍和數量
    switch (selectedYear) {
      case 6:
        questionRange = { min: 1, max: 3 };
        tempNumberOfQuestions = 15;
        break;
      case 8:
        questionRange = { min: 4, max: 9 };
        tempNumberOfQuestions = 10;
        break;
      case 9:
        questionRange = { min: 5, max: 12 }; // 假設 id 5-7 和 10-12 都是有效的
        tempNumberOfQuestions = 7;
        break;
      default:
        // 預設情況或錯誤處理
        questionRange = { min: 1, max: contentComponent.length };
        tempNumberOfQuestions = 11;
    }
    setNumberOfQuestions(tempNumberOfQuestions);
 
    // Generate an array of random questions
    const randomTopics = Array.from({ length: tempNumberOfQuestions }, () => 
    getRandomNumber(questionRange.min, questionRange.max));
    //Before Edit
    /*const randomTopics = Array.from({ length: numberOfQuestions }, () => 
      getRandomNumber(questionRange.min, questionRange.max));
  */
    // Create componentsArray based on the generated random topics
    const newArray = randomTopics.map(topicId => {
      const topic = contentComponent.find(item => item.id === topicId);
      return topic ? { id: topic.id, component: topic.function() } : null;
    });
  
    setComponentsArray(newArray.filter(item => item !== null));
  }, [selectedYear]); // 添加 selectedYear 作為依賴
  
    ///////未見到佢////////////////////////////
    // 獲得總題數
    const totalQuestions = componentsArray.length;
    //定義UserAnswers及ReadQuestions既長度
    useEffect(() => {
      // 當 totalQuestions 确定後，更新 userAnswers 以匹配其長度
      if (totalQuestions > 0) {
        setUserAnswers(Array.from({ length: totalQuestions }));
        // Default ReadQuestion[0]=true, other=false
        const initialReadQuestions = Array.from({ length: totalQuestions }, (_, index) => index === 0);
        setReadQuestions(initialReadQuestions);
      }
    }, [totalQuestions]);

  //檢查除了當前題目外，其他所有題目都已讀過
  const allOthersRead = ReadQuestions.every((read, index) => {
    if (index === (selectedLink - 1)) return true; // 忽略當前題目
    return read === true;
  });

  // 計算答對的題數!! AI 改左 CODING
  const calculateScore = () => {
    return userAnswers.reduce((score, answer, index) => {
      return score + (componentsArray[index].component.Answer === answer ? 1 : 0);
    }, 0);
  };
  // 計算分數
  /*const calculateScore = () => {
    return userAnswers.reduce((score, answer, index) => score + (componentsArray[index].component.Answer === answer ? 1 : 0), 0);
  };*/
  
  // 提交按鈕的事件處理
  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setScore(calculateScore());
    setShowResults(true);
  };

  // 如果 showResults 為 true，顯示結果頁面
  if (showResults) {
      return <TestResults userAnswers={userAnswers} componentsArray={componentsArray}  score={score}/>;
  }

  // 選擇的題目組件
  const selectedComponent = componentsArray.length > selectedLink - 1 ? componentsArray[selectedLink - 1] : null;

  return(
  <div>
    {showStartScreen ? (
      renderStartScreen()
    ) : (
    <div>
      <TestHeaderNav/>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: '25%' }}>
          <TestMenu
            selectedLink={selectedLink}
            onLinkClick={handleLinkClick}
            userAnswers={userAnswers}
            numberOfQuestions={numberOfQuestions}
          />
        </div>
        <div style={{ flex: '5%' }}></div>
        <div style={{ flex: '70%' }}>
          {selectedComponent ? (
            <div className="active"> {/* Use class name here */}
              <TestContent
                selectedLink={selectedLink} //顯示係邊題
                SentComponent={selectedComponent}//Send題目過去
                SentUserInput={userAnswers[selectedLink-1]}//傳User答左既野過去
                totalQuestions={totalQuestions} //共有幾多題
                onSelectedLinkChanged={onSelectedLinkChanged}
                onUserAnswer={handleUserAnswer}
                isAllOthersRead={allOthersRead} // 係咪答晒, 以協助able submit
                onSubmit={handleSubmit} // 傳回submit資料用
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
    )}
  </div>
  );
}

export default Test;
          