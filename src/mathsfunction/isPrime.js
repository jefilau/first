//輸入一個數字，如果是質數，傳回true; 數字限1-100

function isPrime(number) {
    if (number < 2) return false; // 質數必須大於 1
    if (number > 101) return false; // 避免程式運作太大
    for (let i = 2; i < number; i++) {
      if (number % i === 0) return false; // 如果能被除了1和它本身以外的數整除，則不是質數
    }
    return true; // 如果以上條件都不符合，則是質數
  }
  export default isPrime;