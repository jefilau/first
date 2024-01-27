import React, { useState, useEffect } from 'react';
import './TestMenu.css';

const TestMenu = ({ selectedLink, onLinkClick, userAnswers, numberOfQuestions  }) => {

    // 狀態用於追踪選中的問題
    const [selectedQuestion, setSelectedQuestion] = useState(1);
    //Handle Width
    const [isNarrowScreen, setIsNarrowScreen] = useState(window.innerWidth < 600);
    //Handle Height
    const [menuHeight, setMenuHeight] = useState('auto'); // Default height
    
    const questions = Array.from({ length: numberOfQuestions }, (_, index) => ({
      id: index + 1,
      name: isNarrowScreen ? `${index + 1}` : `Question ${index + 1}`
    }));
    //Handle Question 1 定 1, 處理width
    useEffect(() => {
      const handleResize = () => {
        setIsNarrowScreen(window.innerWidth < 600);
      };
  
      // Add event listener
      window.addEventListener('resize', handleResize);
  
      // Clean up
      return () => window.removeEventListener('resize', handleResize);
    }, []);


    useEffect(() => {
      const calculateMenuHeight = () => {
        const screenHeight = window.innerHeight;
        const otherElementsHeight =65; // Height of other elements like headers, footers, etc.
        const calculatedHeight = screenHeight - otherElementsHeight; // Fill the remaining height
    
        setMenuHeight(`${calculatedHeight}px`);
      };
    
      calculateMenuHeight();
      window.addEventListener('resize', calculateMenuHeight);
    
      return () => {
        window.removeEventListener('resize', calculateMenuHeight);
      };
    }, []);
    //處理被點擊情況
    const onQuestionClick = (questionId) => {
      setSelectedQuestion(questionId);
    };
    return (
      <div className="testmenu" style={{ maxHeight: menuHeight }}>
      <ul>
        <li>Test</li>
      {questions.map((item) => (
        <li key={item.id}>
          <button
            onClick={() => onLinkClick(item.id)}
            className={`${selectedLink === item.id ? 'active' : userAnswers[item.id - 1] != null ? 'answered' : 'unanswered'}`}
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

