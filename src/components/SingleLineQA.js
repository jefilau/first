function SingleLineQA(Text, Answer, incrementCounter) {
  console.log (Text);
  return(
    <div>Directed Number <p> </p>

    </div>

)
}


export default SingleLineQA;


/*import React, { useState } from 'react';

function SingleLineQA(ShownText, Answer, incrementCounter) {
    const [userInput, setUserInput] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };
    
    const handleButtonClick = () => {
      const userAnswer = parseInt(userInput); 
      if (userAnswer === Answer) {
          setMessage('Correct');
          incrementCounter();
          setTimeout(() => { handleRegenerateClick(); }, 2000); // 延遲操作
       } else {
        setMessage('Wrong');
      }
    };

    const handleRegenerateClick = () => {
        setFirstNumber(randomNumber(2, 10));
        setSecondNumber(randomNumber(-10, 10));
        setAnswer(randomNumber(-10, 10));
        ThirdNumber=FirstNumber*Answer+SecondNumber;
        setUserInput('');
        setMessage('');
    };
    return(
        <div>Directed Number <p> {ShownText}</p>
          x=<input type="text" value={userInput} onChange={handleInputChange} />
          <button onClick={handleButtonClick}>Check</button>
          <p><button onClick={handleRegenerateClick}>Regenerate</button></p>
          <p>{message}</p>
        </div>

    )
}


export default SingleLineQA;
*/