//Page Component
//import CorrectCounter from './CorrectCounter';
//Question Genertator
import React, { useState,useEffect } from 'react';

//Question Bank 既 menu
import {contentComponent} from './ContentData';

import formatExpression from './formatExpression';
//CSS Style
//import { styles } from './TestContentStyles';
function TestContent({selectedLink, SentComponent, totalQuestions, onSelectedLinkChanged, onUserAnswer, isAllAnswered, onSubmit} ) {
  //從SentComponent獲取 ShownText 及 Answer
  const [Answer, setAnswer] = useState(null);
  const [ShownText, setShownText] = useState(null);
  useEffect(() => {
      if (SentComponent && selectedLink) {
        setAnswer(SentComponent.component.Answer);
        setShownText(SentComponent.component.ShownText);
      }
    }, [SentComponent]); // 依赖 selectedContent
 
  //Handle Next Question Button
  const HandleNextQuestionCounter = () => {
      onSelectedLinkChanged(selectedLink + 1); // 更新selectedLink並通知父組件
    };
  
  //copy from directed nuber start
  const [userInput, setUserInput] = useState('');
  const [message, setMessage] = useState('');
  
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(false);
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true);
  //User Input 是否空白
  const [isInputBlank, setIsInputBlank] = useState(true);
  //Define Variable END
//


//Start Define Function 
  //將Input 位入落Variable
  const handleInputChange = (event) => {
    const input = event.target.value;
    setUserInput(input);
  
    // 檢查輸入是否為空白，並更新狀態
    setIsInputBlank(input);


  };
  //Answer Input 位可以 Press Enter
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleNextQuestionClick();
    }
  };
  //當按左Enter 或做左 Submit 後既回應
  const handleNextQuestionClick = () => {
      
      // 檢查答案是字符串還是數字，並相應處理用戶輸入
    let userAnswer = formatExpression(userInput); // 首先移除用戶輸入兩邊的空白 // ; 
    
    if (typeof Answer === 'number') {
      userAnswer = parseInt(userAnswer, 10); // 假設答案是數字，則將輸入轉為數字, 10指10進制
    }
    //如果係最後一題，Next Question 會變做submit
    // 如果是最後一題，則調用 onSubmit 函數
    if (selectedLink === totalQuestions) {
      // 如果是最後一題，則調用 onSubmit 函數
      onSubmit();
    } else {
      // 如果不是最後一題，則處理下一題
      onUserAnswer(userAnswer);
      HandleNextQuestionCounter();
      }
    setIsNextButtonDisabled(true);

  };
  // Handle Previous Button
  const handlePrevious = () => {
    if (selectedLink > 1) {
      onSelectedLinkChanged(selectedLink - 1);
    }
  };

  // Handle Next Button
  const handleNext = () => {
    if (selectedLink < totalQuestions) {
      onSelectedLinkChanged(selectedLink + 1);
    }
  };  

  //  每次改 selectedLink, input 字串都會被清空
  useEffect(() => {
    setUserInput('');
  }, [selectedLink]);



  //set time from disable to enable after 2 second
    useEffect(() => {
      let timer;
      if (isNextButtonDisabled) {
        timer = setTimeout(() => {
          setIsNextButtonDisabled(false);
        }, 2000);
      }
      return () => clearTimeout(timer);
    }, [isNextButtonDisabled]);
    //copy from directed nuber end


// Style  ////////////////////////////////////////////////////////////////////////////////////////

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif', 
    color: '#333'
  },
  questionHeader: {
    borderBottom: '2px solid #4CAF50', 
    paddingBottom: '10px'
  },
  contentBox: {
    // 如果 content-box 有特定樣式，可以喺呢度加
  },
  questionText: {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'space-between'
  },
  inputStyle: {
    padding: '10px', 
    border: '1px solid #ccc', 
    borderRadius: '4px', 
    marginRight: '10px', 
    flex: '0 1 150px'
  },
  nextQuestionButton: {
    backgroundColor: '#4CAF50', 
    color: 'white', 
    border: 'none', 
    padding: '10px 20px', 
    borderRadius: '4px', 
    cursor: 'pointer', 
    flex: '0 1 100px'
  },
  navigationButton: {
    backgroundColor: '#ddd', 
    color: '#333', 
    border: 'none', 
    padding: '8px 16px', 
    borderRadius: '4px', 
    cursor: 'pointer', 
    flex: '0 1 auto', 
    marginRight: '10px'
  },

};
  const submitButtonStyle = {
    backgroundColor: isAllAnswered ? '#4CAF50' : '#ccc', // 啟用時為綠色，禁用時為灰色
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: isAllAnswered ? 'pointer' : 'default',
    flex: '0 1 100px'
  };
  const previousButtonStyle = {
    backgroundColor: selectedLink > 1 ? '#388E3C' : '#ddd', // 啟用時為綠色，禁用時為灰色
    color: '#333', 
    border: 'none', 
    padding: '8px 16px', 
    borderRadius: '4px', 
    cursor: 'pointer', 
    flex: '0 1 auto',
    marginRight: '10px' 
  };

  const nextButtonStyle = {
    backgroundColor: selectedLink < totalQuestions ? '#388E3C' : '#ddd', // 啟用時為綠色，禁用時為灰色
    color: '#333', 
    border: 'none', 
    padding: '8px 16px', 
    borderRadius: '4px', 
    cursor: 'pointer', 
    flex: '0 1 auto',
    marginRight: '10px' 
  };
    return(
      <div style={styles.container}>
      <h2 style={styles.questionHeader}>Question {selectedLink}</h2>
      <div className="content-box" style={styles.contentBox}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <p style={{ fontSize: 'larger', flex: '1 0 auto' }}>{ShownText}</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
            <input 
              type="text"
              value={userInput}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              style={styles.inputStyle} />
            
            <button 
              style={styles.nextQuestionButton}
              disabled={isNextButtonDisabled}
              onClick={handleNextQuestionClick}
            >
              Next Question
            </button>
          </div>
  
          {/* Previous 及 Next 按鈕 */}
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
            <button
              style={previousButtonStyle}
              disabled={selectedLink <= 1}
              onClick={handlePrevious}
            >
              &lt;&lt; Previous
            </button>
  
            <button 
              style={nextButtonStyle}
              disabled={selectedLink >= totalQuestions}
              onClick={handleNext}
            >
              Next &gt;&gt;
            </button>
          </div>   
  
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
            <button 
              style={submitButtonStyle}
              disabled={!isAllAnswered}
              onClick={onSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>

    )
}
export default TestContent;


//<div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
    