import randomNumber from '../mathsfunction/randomNumber';

function MixedArithmetic3Int() {
    // 生成隨機數字的函數
    const randomDigit = () => randomNumber(1, 9);

    // 生成隨機運算符號
    const randomOperator = () => {
        const operators = ['+', '-', '×', '÷'];
        return operators[randomNumber(0, operators.length - 1)];
    };

    let Answer = -1;
    let ShownText = '';
    let firstNumber, secondNumber, thirdNumber, firstOperator, secondOperator;

    while (Answer < 0 || Answer % 1 !== 0) {
        // 生成三個個位數和兩個運算符
        firstNumber = randomDigit();
        secondNumber = randomDigit();
        thirdNumber = randomDigit();
        firstOperator = randomOperator();
        secondOperator = randomOperator();

        // 創建題目
        ShownText = `${firstNumber} ${firstOperator} ${secondNumber} ${secondOperator} ${thirdNumber} = ?`;

        // 計算答案
        try {
            // 使用 eval 進行計算，需要將乘號和除號替換為 JavaScript 的運算符
            let calculation = ShownText.replace('×', '*').replace('÷', '/');
            Answer = eval(calculation.substring(0, calculation.length - 3));
        } catch (e) {
            // 如果有錯誤，則重新計算
            Answer = -1;
        }
    }

    return { Answer, ShownText };
}

export default MixedArithmetic3Int;
