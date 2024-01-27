import randomNumber from '../mathsfunction/randomNumber';
import SimplifyLinearPolynomails from './SimplifyLinearPolynomails';
function SimplifyPolynomial() {
    // Randomly choose a pattern for the polynomial
    const pattern = randomNumber(1, 3);

    // Function to generate a random operator (+ or -)
    const randomOperator = () => randomNumber(0, 1) === 1 ? '+' : '-';

    // Function to generate a random term
    const randomTerm = (includeLetter = true) => {
        const num = randomNumber(1, 9);
        return includeLetter ? `${num}x` : `${num}`;
    };

    // Variables for the polynomial
    let Answer = undefined;
    let ShownText = undefined;

    switch (pattern) {
        case 1: // Pattern like 3x - (2x + 5) + 4
            const term1 = randomTerm();
            const op1 = randomOperator();
            const term2 = randomTerm();
            const op2 = randomOperator();
            const term3 = randomTerm(false);
            const op3 = randomOperator();
            const term4 = randomTerm(false);
            ShownText = `Simplify ${term1} ${op1} (${term2} ${op2} ${term3}) ${op3} ${term4}.`;
            // Simplified answer calculation for this pattern
            Answer = `Simplified form of ${ShownText}`;
            break;
        case 2: // Pattern like (2x+3) - (4x+6)
            const term5 = randomTerm();
            const op4 = randomOperator();
            const term6 = randomTerm(false);
            const op5 = randomOperator();
            const term7 = randomTerm();
            const op6 = randomOperator();
            const term8 = randomTerm(false);
            ShownText = `Simplify(${term5} ${op4} ${term6}) ${op5} (${term7} ${op6} ${term8}).`;
            // Simplified answer calculation for this pattern
            Answer = `Simplified form of ${ShownText}`;
            break;
        case 3: // Pattern like 2 - (3 - 2x + 6)
            const term9 = randomTerm(false);
            const op7 = randomOperator();
            const term10 = randomTerm(false);
            const op8 = randomOperator();
            const term11 = randomTerm();
            const op9 = randomOperator();
            const term12 = randomTerm(false);
            ShownText = `Simplify ${term9} ${op7} (${term10} ${op8} ${term11} ${op9} ${term12}).`;
            // Simplified answer calculation for this pattern
            Answer = `Simplified form of ${ShownText}`;
            break;
    }
    console.log(SimplifyLinearPolynomails("1-(2x+3)")); // -2x-2
    console.log(SimplifyLinearPolynomails("2+(x+4)-2x")); // -x+6
    return { Answer, ShownText };
}

export default SimplifyPolynomial;
