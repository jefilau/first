import randomNumber from '../mathsfunction/randomNumber';
import randomSelectedPairofPrime from '../mathsfunction/randomSelectedPairofPrime';

function LCMandHCF() {
  //Prepare Factors for this Function
  const Pair = randomSelectedPairofPrime();
  const FirstFactor = randomNumber(1, 3);
  const SecondFactor = randomNumber(1, 7);
  const PrimeNumber1 = Pair[0];
  const PrimeNumber2 = Pair[1];

  const FirstNumber = FirstFactor*SecondFactor*PrimeNumber1;
  const SecondNumber = FirstFactor*SecondFactor*PrimeNumber2;  
  
  const isLCM = randomNumber(0, 1);
  let Answer;
  let QuestionSubject;

  if (isLCM === 1) {
    Answer = FirstFactor * SecondFactor * PrimeNumber1 * PrimeNumber2;
    QuestionSubject = 'LCM';
  } else {
    Answer = FirstFactor * SecondFactor;
    QuestionSubject = 'HCF';
  }

  const ShownText = `${QuestionSubject} of ${FirstNumber} and ${SecondNumber} is`;
  return { Answer, ShownText };
}
export default LCMandHCF;

