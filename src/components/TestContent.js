//Page Component
//import CorrectCounter from './CorrectCounter';
//Question Genertator
import React, { useState,useEffect } from 'react';

//處理input係數字定string
import formatExpression from './formatExpression';
//CSS Style
import './TestContent.css';

function TestContent({selectedLink, SentComponent, SentUserInput, totalQuestions, onSelectedLinkChanged, onUserAnswer, isAllOthersRead, onSubmit} ) {
  //從SentComponent獲取 ShownText 及 Answer

  const [Answer, setAnswer] = useState(null);
  const [ShownText, setShownText] = useState(null);
  const [SubmitEnabled, setSubmitEnabled]=useState(false);
  //計時器
  const [elapsedTime, setElapsedTime] = useState(0);
  useEffect(() => {
      if (SentComponent && selectedLink) {
        setAnswer(SentComponent.component.Answer);
        setShownText(SentComponent.component.ShownText);
      }
    }, [SentComponent]); // 依赖 selectedContent
 
  //Handle Next Question Button
  const HandleNextQuestionCounter = () => {
      if(selectedLink === totalQuestions) { 
        onSelectedLinkChanged(1);
      } else {
        onSelectedLinkChanged(selectedLink + 1); // 更新selectedLink並通知父組件
      }
    };
  
  //copy from directed nuber start
  const [userInput, setUserInput] = useState('');
  const [message, setMessage] = useState('');
  
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(false);
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
      onUserAnswer(userAnswer);
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
  //Setup Input位有冇資料
  useEffect(() => {
    // 檢查是否有這個問題的答案
    if (SentUserInput !== undefined) {
      setUserInput(SentUserInput); // 設置先前的答案為輸入框的值
    } else {
      setUserInput(''); // 如果沒有答案，清空輸入框
    }
  }, [selectedLink, SentUserInput]); // 添加 selectedLink 和 userAnswer 作為依賴項
  
  //Handle Submit Button係咪Enable
// Handle Submit Button 是否启用
/*useEffect(() => {
  const isInputNotEmpty = typeof userInput === 'string' && userInput.trim() !== ''; // 
  //const isInputNotEmpty = userInput.trim() !== ''; // Check Input位是否非Empty
  const shouldEnableSubmit = isAllOthersRead && isInputNotEmpty; // 

  setSubmitEnabled(!shouldEnableSubmit); // 更新 SubmitEnabled 
}, [isAllOthersRead, userInput]); // 添加 isAllOthersRead 和 userInput 
*/

useEffect(() => {
  setSubmitEnabled(!isAllOthersRead); // 更新 SubmitEnabled 
}, [isAllOthersRead]); // 添加 isAllOthersRead 和 userInput 

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
    //copy from directed number end

  //Handle Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime(prevTime => prevTime + 1);
    }, 1000);

    // Step 5: Clear interval on component unmount
    return () => clearInterval(timer);
  }, []);

  // Function to format time to minutes and seconds
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  //Handle Quit Button
  const handleQuitTest = () => {
    const confirmQuit = window.confirm("If you quit, all your previous answers will be lost. Are you sure you want to quit?");
    if (confirmQuit) {
      // 這裡可以使用<Link>導航，或者使用window.location.href直接跳轉
      window.location.href = "/"; // 假設主頁的路徑是"/"
    }
    // 如果用戶選擇Cancel，則什麼都不做
};

// Style  ////////////////////////////////////////////////////////////////////////////////////////

const styles = {

  contentBox: {
    // 如果 content-box 有特定樣式，可以喺呢度加
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

};
  const submitButtonStyle = {
    backgroundColor: !SubmitEnabled ? '#4CAF50' : '#ccc', // 啟用時為綠色，禁用時為灰色
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: !SubmitEnabled ? 'pointer' : 'default',
    flex: '0 1 100px'
  };
  const previousButtonStyle = {
    backgroundColor: selectedLink > 1 ? '#5aac5e' : '#ddd', // 啟用時為綠色，禁用時為灰色
    color: '#333', 
    border: 'none', 
    padding: '8px 16px', 
    borderRadius: '4px', 
    cursor: 'pointer', 
    flex: '0 1 auto',
    marginRight: '10px' 
  };

  const nextButtonStyle = {
    backgroundColor: selectedLink < totalQuestions ? '#5aac5e' : '#ddd', // 啟用時為綠色，禁用時為灰色
    color: '#333', 
    border: 'none', 
    padding: '8px 16px', 
    borderRadius: '4px', 
    cursor: 'pointer', 
    flex: '0 1 auto',
    marginRight: '10px' 
  };

    return(
      <div className="container"  style={{ position: 'relative' }}>
      <div style={{  position: 'absolute', top: '10px', right: '20px', textAlign: 'right' }}>
        Time on page: {formatTime(elapsedTime)}
      </div>
      
      <h2 className="question-header">Question {selectedLink}</h2>
      
      <div className="content-box" style={styles.contentBox}>
        <div>
          <div clsssname="question-text">
            <p clsssname="question-text p">{ShownText}</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>

            <input 
              type="text"
              value={userInput}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              className="input-style" />
            
            <button 
              style={styles.nextQuestionButton}
              disabled={isNextButtonDisabled}
              onClick={handleNextQuestionClick}
            >
              Submit & Next
            </button>
          </div>
  
          {/* Previous 及 Next 按鈕 */}
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
            <button
              style={previousButtonStyle}
              disabled={selectedLink <= 1}
              onClick={handlePrevious}
            >
              &lt;&lt; Back to Previous Question
            </button>
  
            <button 
              style={nextButtonStyle}
              disabled={selectedLink >= totalQuestions}
              onClick={handleNext}
            >
              Skip to Next Question &gt;&gt;
            </button>
          </div>   
  
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px' }}>
  
            <button 
              style={submitButtonStyle}
              disabled={SubmitEnabled}
              onClick={onSubmit}
            >
              Submit Test
            </button>
            <button className="quit-test-button" onClick={handleQuitTest}>Quit Test</button>
      
          </div>
        </div>
      </div>
    </div>

    )
}
export default TestContent;

