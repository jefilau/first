import randomNumber from '../mathsfunction/randomNumber';


function Probability() {
    const questionType = randomNumber(1, 4);
    let ShownText=undefined;
    let Answer = '';

    switch (questionType) {
      case 1:
        // Two coins tossing question
        ShownText = "What is the probability that two heads occur when two coins are tossed?";
        Answer = "1/4";
        break;

      case 2:
            // Ball drawing question
            const red = randomNumber(5, 10);
            const white = randomNumber(1, 5);
            const blue = randomNumber(5, 15);
            const totalBalls = red + white + blue;
            ShownText = `A ball is drawn from a bag containing ${red} red, ${white} white, and ${blue} blue balls. The probability that it is a red ball is:`;
            Answer = `${red}/${totalBalls}`;
            break;

      case 3:
            // Coin tossing question
            ShownText = "A fair coin is tossed 4 times. Each time it lands heads up. When it is tossed a fifth time, the probability that it will land heads up is:";
            Answer = "1/2";
            break;

      case 4:
            // Numbered balls question
            const balls = randomNumber(30, 50);
            const countWith3 = Math.floor(balls / 10) + (balls >= 30 ? 1 : 0);
            ShownText = `40 balls are numbered 1 to ${balls}. One ball is selected at random. The probability that the number on the chosen ball will contain the numeral "3" is:`;
            Answer = `${countWith3}/${balls}`;
            break;
      
      default:
        ShownText = "No question generated.";
        Answer = "N/A";
        break;
      
    }
    console.log(ShownText);
    console.log(questionType);
    
    return { Answer, ShownText };
}
export default Probability;
