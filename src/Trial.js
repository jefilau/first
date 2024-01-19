import React, { useState } from 'react';

import HeaderNav from './components/HeaderNav';
import SetFraction from './components/SetFraction';


const Trial = () => {
    const [count, setCount] = useState(0);
  
    const increment = () => {
      setCount(count + 1);
    };
  
    const decrement = () => {
      setCount(count - 1);
    };
  
    const [theText, setText] = useState('你想點');
    const [showXX, setButton] = useState(true);

    const clickHandlerY = () => {
        setText('仲黎?!');
        setButton(true);
        
    };
    const clickHandlerX = () => {
        setText('做咩呀');
        setButton(false);
    };

    return(
        <div>
            <HeaderNav/>
           TEST TEST!!!
           <h1>呢個係body component{theText} !!</h1>
            <div>
                {showXX && <button onClick={clickHandlerX}>拿，唔好襟我</button>}
                {!showXX && <button onClick={clickHandlerY}>真係唔好襟</button>}
            
            </div>
            <div>
              <h2>Counter: {count}</h2>
              <button onClick={increment}>Increment</button>
              <button onClick={decrement}>Decrement</button>
            </div>
            <SetFraction/>
        </div>
    )


  };
  
  export default Trial;


  

/*
import React, { useState } from 'react';

const StringChanger = () => {
  const [text, setText] = useState('Hello');

  const handleChange = () => {
    setText('World');
  };

  return (
    <div>
      <h2>{text}</h2>
      <button onClick={handleChange}>Change Text</button>
    </div>
  );
};

export default StringChanger;

*/