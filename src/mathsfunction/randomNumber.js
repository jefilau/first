//傳回一俥隨機正整數
function randomNumber(min,max) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  
    return randomNum;
  }
  
  export default randomNumber;
  /*
  不會使用 Math.floor(Math.random() * max) + min
  */
  