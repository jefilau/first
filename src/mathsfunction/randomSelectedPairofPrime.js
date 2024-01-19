//此function 裝左若干 最simple 既pair of prime, 並隨機選出
function randomSelectedPairofPrime() {
    const pairs = [
      [2, 3],
      [2, 5],
      [3, 5]
    ];
  
    const randomIndex = Math.floor(Math.random() * pairs.length);
    const [firstNumber, secondNumber] = pairs[randomIndex];
    //const randomPair = pairs[randomIndex];
    return [firstNumber, secondNumber];
    //return randomPair;
  }
export default randomSelectedPairofPrime;
