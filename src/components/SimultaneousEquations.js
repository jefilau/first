import randomNumber from '../mathsfunction/randomNumber';

function SimultaneousEquations() {
    let  ShownText=undefined;
    // Choose integer values for x and y as the solution
    const xAnswer = randomNumber(-10, 10);
    const yAnswer = randomNumber(-10, 10);

    // Create the first equation coefficients
    const a = randomNumber(1, 5);
    const b = randomNumber(1, 5);
    const e = a * xAnswer + b * yAnswer; // Constant in the first equation

    // Determine whether the x or y coefficients will be in a multiple relationship
    const isXMultiple = Math.random() < 0.5;
    let c, d, f;

    if (isXMultiple) {
        // Second equation with x coefficients in a multiple relationship
        c = a * randomNumber(2, 4); // Ensure multiple relationship for x
        d = randomNumber(1, 5); // Random coefficient for y
    } else {
        // Second equation with y coefficients in a multiple relationship
        c = randomNumber(1, 5); // Random coefficient for x
        d = b * randomNumber(2, 4); // Ensure multiple relationship for y
    }
    f = c * xAnswer + d * yAnswer; // Constant in the second equation

    // Construct the display text for the equations
    const Answer = xAnswer;
    ShownText = `Solve the simultaneous equations: ${a}x + ${b}y = ${e}; ${c}x + ${d}y = ${f}. What are x?`;
    return { Answer, ShownText };
}

export default SimultaneousEquations;
