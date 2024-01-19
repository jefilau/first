import randomNumber from '../mathsfunction/randomNumber';

function Polynomails() {
    //Set Up Question and Answer
    const FrontNumber = randomNumber(1, 9);
    const FirstNumber = randomNumber(2, 15);
    const SecondNumber = randomNumber(1, 9);
    const firstSign = randomNumber(0, 1);
    const GenRandomLetter = () => {
      const letters = ['x', 'y', 'p'];
      return letters[Math.floor(Math.random() * letters.length)];
    };
    const RandomLetter = GenRandomLetter();

    let  Answer=undefined;
    let  ShownText=undefined;
    const FirstExpandedNumber = FrontNumber*FirstNumber;
    const SecondExpandedNumber = FrontNumber*SecondNumber;
    

    if (firstSign===1){
      Answer = FirstExpandedNumber + RandomLetter + '+' + SecondExpandedNumber;
      ShownText = 'Expand '+ FrontNumber +'('+ FirstNumber +RandomLetter+'+'+ SecondNumber + ').';
    }
    else {
      Answer = FirstExpandedNumber + RandomLetter + '-' + SecondExpandedNumber;
      ShownText = 'Expand '+ FrontNumber +'('+ FirstNumber +RandomLetter+'-'+ SecondNumber + ').';
    }
    return { Answer, ShownText};
  }
export default Polynomails;
