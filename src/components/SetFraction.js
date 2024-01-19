import React, { useState } from 'react';

function DecimalToFraction() {
  const [decimal, setDecimal] = useState('');
  const [fraction, setFraction] = useState('');

  const convertToFraction = () => {
    const inputDecimal = parseFloat(decimal);
    if (!isNaN(inputDecimal)) {
      const wholeNumber = Math.floor(inputDecimal);
      const decimalPart = inputDecimal - wholeNumber;

      const gcd = findGCD(decimalPart);
      const numerator = decimalPart * gcd;
      const denominator = gcd;

      if (wholeNumber === 0) {
        setFraction(
          <>
            <sup>{numerator}</sup>
            <hr />
            <sub>{denominator}</sub>
          </>
        );
      } else {
        setFraction(
          <>
            <sup>{wholeNumber * denominator + numerator}</sup>
            <hr />
            <sub>{denominator}</sub>
          </>
        );
      }
    } else {
      setFraction('無效輸入');
    }
  };

  const findGCD = (number) => {
    let numerator = Math.floor(number * 100);
    let denominator = 100;

    while (numerator % 1 !== 0) {
      numerator *= 10;
      denominator *= 10;
    }

    const gcd = getGCD(numerator, denominator);

    return denominator / gcd;
  };

  const getGCD = (a, b) => {
    if (b === 0) {
      return a;
    }

    return getGCD(b, a % b);
  };

  const handleInputChange = (event) => {
    setDecimal(event.target.value);
  };

  return (
    <div>
      <h1>小數轉換為分數</h1>
      <input type="text" value={decimal} onChange={handleInputChange} />
      <button onClick={convertToFraction}>轉換</button>
      <p>結果: {fraction}</p>
    </div>
  );
}

export default DecimalToFraction;
