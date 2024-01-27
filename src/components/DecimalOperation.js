import randomNumber from '../mathsfunction/randonNumber';

function DecimalOperation() {
  // Function to generate a random decimal number with limited precision
  const randomDecimal = () => {
      const wholePart = Math.floor(Math.random() * 10); // 整數部分在0到9之間
      const decimalPart = Math.round(Math.random(), 2) * 0.1; // 小數部分只有一位小數
      return wholePart + decimalPart;
  };

  // Function to generate a random operator
  const randomOperator = () => {
      const operators = ['+', '-', 'x', '/'];
      return operators[Math.floor(Math.random() * operators.length)];
  };

  // Generate numbers and operator
  const number1 = randomDecimal();
  const number2 = randomDecimal();
  const operator = randomOperator();

  // Prepare the question
  const ShownText = `${number1} ${operator} ${number2}`;

  // Placeholder for answer - depending on the operation
  let Answer;
  switch (operator) {
      case '+':
        Answer = number1 + number2;
        break;
      case '-':
        Answer = number1 - number2;
        break;
      case 'x':
        Answer = number1 * number2;
          break;
      case '/':
        Answer = number2 !== 0 ? number1 / number2 : 'undefined'; // 避免除以0
          break;
  }


  return { Answer: Answer.toFixed(2), ShownText };// 將答案固定到兩位小數
}

export default DecimalOperation;

