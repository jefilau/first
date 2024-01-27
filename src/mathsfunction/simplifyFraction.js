//輸入一個 '2/10' 的分數字串，傳回'1/5'字串
const simplifyFraction = (fraction) => {
  const simplifyFraction = (fraction) => {
    const [numerator, denominator] = fraction.split('/').map(Number);
    const gcd = findGCD(numerator, denominator);
    return `${numerator / gcd}/${denominator / gcd}`;
  };

  const findGCD = (a, b) => {
    return b === 0 ? a : findGCD(b, a % b);
  };

  // 示例用法，可根據需要進行修改
  const inputFraction = fraction || '1//1'; // 這裡可以從 props 接收輸入
  const simplifiedFraction = simplifyFraction(inputFraction);

  return (simplifiedFraction);
};

export default simplifyFraction;
