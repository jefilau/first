import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import {contentComponent} from './ContentData';
import './TestMenu.css';

const TestMenu = ({ selectedLink, onLinkClick, userAnswers  }) => {

    // 狀態用於追踪選中的問題
    const [selectedQuestion, setSelectedQuestion] = useState(1);

    const questions = Array.from({ length: 8 }, (_, index) => ({
      id: index + 1,
      name: `Question ${index + 1}`
    }));
    
    //處理被點擊情況
    const onQuestionClick = (questionId) => {
      setSelectedQuestion(questionId);
    };
    console.log(selectedLink);
    console.log(userAnswers[1]);    
    console.log(userAnswers[2]);  
    console.log(userAnswers[3]);  
    return (
      <div className="testmenu">
        <ul>
        <li>Test</li>
      {questions.map((item) => (
        <li key={item.id}>
          <button
            onClick={() => onLinkClick(item.id)}
            className={`${selectedLink === item.id ? 'active' : userAnswers[item.id - 1] != null ? 'answered' : 'unanswered'}`}

            //className={`${selectedLink === item.id ? 'active' : ''} ${userAnswers[item.id - 1] != null ? 'answered' : 'unanswered'}`}//className={selectedLink === item.id ? 'active' : ''}
          >
            {item.name}
          </button>
        </li>

      ))}
    </ul>
    </div>
  );
};
export default TestMenu;

