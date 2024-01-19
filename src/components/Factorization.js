import randomNumber from '../mathsfunction/randomNumber';
import randomSelectedPairofPrime from '../mathsfunction/randomSelectedPairofPrime';

function Factorization() {
    //Set Up Question and Answer
    const Pair = randomSelectedPairofPrime();
    const FrontNumber = randomNumber(2, 9);
    const FirstNumber = Pair[0];
    const SecondNumber = Pair[1];
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
      Answer = FrontNumber +'('+ FirstNumber +RandomLetter+'+'+ SecondNumber + ')';
      ShownText = 'Factorize '+ FirstExpandedNumber + RandomLetter + '+' + SecondExpandedNumber;
    }
    else {
      Answer = FrontNumber +'('+ FirstNumber +RandomLetter+'-'+ SecondNumber + ')';
      ShownText = 'Factorize '+ FirstExpandedNumber + RandomLetter + '-' + SecondExpandedNumber;
    }
    return { Answer, ShownText};
}
export default Factorization;




