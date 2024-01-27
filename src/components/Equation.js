import randomNumber from '../mathsfunction/randonNumber';

function Equation() {
    const FirstNumber = randomNumber(1, 5);
    const SecondNumber = randomNumber(-10, 10);
    
    const Answer = randomNumber(-10, 10);
    let  ShownText=undefined;
    let ThirdNumber=FirstNumber*Answer+SecondNumber;
    //const [Coefficientofx, setCoefficientofx] = useState(randomNumber(1, 5));
    const displayFirstNumber = FirstNumber === 1 ? ' ' : FirstNumber ; //幫First Number +()

    
    if (SecondNumber < 0){
      ShownText = 'Solve x for the equation ' + displayFirstNumber +'x -'+ Math.abs(SecondNumber) +'='+ ThirdNumber;

    }
    else {
      ShownText = ` Solve x for the equation  ${displayFirstNumber}x +${SecondNumber}=${ThirdNumber}`;

    }    

    return { Answer, ShownText };
}
export default Equation;




