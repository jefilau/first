import randomNumber from '../mathsfunction/randonNumber';
import simplifyFraction from '../mathsfunction/simplifyFraction';

function FDP() {
    //Set Up Question and Answer
    const FirstNumber = randomNumber(1, 2);
    const SecondNumber = randomNumber(1, 5);
    const ThirdNumber = randomNumber(2, 9);
    const DisplayNumber = FirstNumber*SecondNumber*ThirdNumber;

    let  Answer=undefined;
    let  ShownText=undefined;
    const toFractionString = number => `${number}/100`;
    const FractionString = toFractionString(DisplayNumber);
    const simplifiedFraction = simplifyFraction(FractionString);
    Answer = simplifiedFraction;
    ShownText = 'Write ' + DisplayNumber + '% as a fraction';

    return { Answer, ShownText };
}
export default FDP;

