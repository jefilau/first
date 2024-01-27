import randomNumber from '../mathsfunction/randonNumber';

function DirectNumber() {
  
    //Set Up Question and Answer
    const FirstNumber = randomNumber(-5, 13);
    const SecondNumber = randomNumber(-9, 9);
    const ThirdNumber = randomNumber(-9, 9);
    const firstSign = randomNumber(0, 1);
    let  Answer=undefined;
    let  ShownText=undefined;

    const displayFirstNumber = FirstNumber < 0 ? `(${FirstNumber})` : FirstNumber; //幫First Number +()
    const displaySecondNumber = SecondNumber < 0 ? `(${SecondNumber})` : SecondNumber; //幫Second Number +()
    const displayThirdNumber = ThirdNumber < 0 ? `(${ThirdNumber})` : ThirdNumber; //幫Third Number +()


    if (firstSign===1){
      Answer = FirstNumber + SecondNumber -ThirdNumber;
      ShownText = displayFirstNumber +'+'+ displaySecondNumber +'-'+ displayThirdNumber + ' = ?';
    }
    else {
      Answer = FirstNumber - SecondNumber - ThirdNumber;
      ShownText = displayFirstNumber +'-'+ displaySecondNumber +'-'+ displayThirdNumber + ' = ?';
    }
    return { Answer, ShownText};
}
export default DirectNumber;

