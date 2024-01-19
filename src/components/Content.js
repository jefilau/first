//Page Component
//import CorrectCounter from './CorrectCounter';
//Question Genertator
import React, { useState,useEffect } from 'react';

//Question Bank 既 menu
import {contentComponent} from './ContentData';

import formatExpression from './formatExpression';

function Content({selectedLink}) {

  //從Selected Link拮取資料
  //let content = null;
   
  const selectedContent = contentComponent.find(item => selectedLink ? item.id === selectedLink : item.id === 1);

  // 從selectContent設置Name及Component
  const SelectedName = selectedContent ? selectedContent.name : '111';
  

  const [SelectedComponent, setSelectedComponent] = useState(null);
  const [Answer, setAnswer] = useState(null);
  const [ShownText, setShownText] = useState(null);

  useEffect(() => {
    if (selectedContent && selectedContent.function) {
      const componentResult = selectedContent.function();
      setSelectedComponent(componentResult);
      setAnswer(componentResult.Answer);
      setShownText(componentResult.ShownText);
    }
  }, [selectedContent]); // 依赖 selectedContent

//////


  //以下const冇bug
  
  //copy from directed nuber start
  const [userInput, setUserInput] = useState('');
  const [message, setMessage] = useState('');
  
  //Correct Counter Variable
  const [counter, setCounter] = useState(0);
  
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  //Define Variable END



  //將Input 位入落Variable
  const handleInputChange = (event) => {
      setUserInput(event.target.value);
  };

  //Answer Input 位可以 Press Enter
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleButtonClick();
    }
  };
  //當按左Enter 或做左 Submit 後既回應
  const handleButtonClick = () => {
    // 檢查答案是字符串還是數字，並相應處理用戶輸入
    let userAnswer = formatExpression(userInput); // 首先移除用戶輸入兩邊的空白 // ; 
      
    if (typeof Answer === 'number') {
      userAnswer = parseInt(userAnswer, 10); // 假設答案是數字，則將輸入轉為數字, 10指10進制
    }      
    if (userAnswer === Answer) {
        setMessage('Correct');
        setCounter(counter + 1);
        setIsButtonDisabled(true);
        setTimeout(() => { handleRegenerateClick(); }, 2000); // 延遲2秒後做next step
    } else {
      setMessage('Wrong');
    }
  };
  //  每次改 selectedLink, input 字串都會被清空
  useEffect(() => {
    setUserInput('');
  }, [selectedLink]);

  //處理Regenerate Button
  const handleRegenerateClick = () => {
    //setSelectedTopicResult(DirectNumber()); 
    const RegenerateComponent = selectedContent.function();
    setAnswer(RegenerateComponent.Answer);
    setShownText(RegenerateComponent.ShownText);
    setUserInput('');
    setMessage('');
    setIsButtonDisabled(false); // 將按鈕設置為可用
  };

  //set time from disable to enable after 2 second
    useEffect(() => {
      let timer;
      if (isButtonDisabled) {
        timer = setTimeout(() => {
          setIsButtonDisabled(false);
        }, 2000);
      }
      return () => clearTimeout(timer);
    }, [isButtonDisabled]);
    //copy from directed nuber end

    


    return(
      <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <h2 style={{ borderBottom: '2px solid #4CAF50', paddingBottom: '10px' }}>Question by Topic</h2>
      <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <div>
          <h3 style={{ color: '#4CAF50', fontSize: 'smaller' }}>{SelectedName}</h3>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <p style={{ fontSize: 'larger', flex: '1 0 auto' }}>{ShownText}</p>
            <button
              style={{ backgroundColor: '#999', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer', fontSize: 'smaller', flex: '0 1 100px' }}
              onClick={handleRegenerateClick}
            >
              Regenerate
            </button>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
            <input
              type="text"
              value={userInput}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px', marginRight: '10px', flex: '0 1 150px' }}
            />
            <button
              style={{ backgroundColor: '#4CAF50', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer', flex: '0 1 100px' }}
              disabled={isButtonDisabled}
              onClick={handleButtonClick}
            >
              Check
            </button>
          </div>
          <p style={{ fontSize: 'smaller' }}>Correct Answered: {counter}</p>
          <p style={{ color: message === 'Correct' ? 'green' : 'red' }}>{message}</p> {/* 添加的消息部分 */}
        </div>
      </div>
    </div>
  );

    
}
export default Content;


