import randomNumber from '../mathsfunction/randonNumber';

function AddandSubtract3Numbers() {
    // 生成隨機數字的函數
    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    let Answer = -1; // 初始為負數以開始循環
    let ShownText = undefined;
    let firstNumber, secondNumber, thirdNumber;
    let firstSign, secondSign;

    while (Answer < 0) {
        // 生成三個數字
        firstNumber = randomNumber(1, 99);
        secondNumber = randomNumber(1, 99);
        thirdNumber = randomNumber(1, 99);

        // 生成兩個符號（0 表示減號，1 表示加號）
        firstSign = randomNumber(0, 1);
        secondSign = randomNumber(0, 1);

        // 計算答案
        if (firstSign === 1) {
            if (secondSign === 1) {
                // 兩個加號
                Answer = firstNumber + secondNumber + thirdNumber;
                ShownText = `${firstNumber} + ${secondNumber} + ${thirdNumber} = ?`;
            } else {
                // 第一個加號，第二個減號
                Answer = firstNumber + secondNumber - thirdNumber;
                ShownText = `${firstNumber} + ${secondNumber} - ${thirdNumber} = ?`;
            }
        } else {
            if (secondSign === 1) {
                // 第一個減號，第二個加號
                Answer = firstNumber - secondNumber + thirdNumber;
                ShownText = `${firstNumber} - ${secondNumber} + ${thirdNumber} = ?`;
            } else {
                // 兩個減號
                Answer = firstNumber - secondNumber - thirdNumber;
                ShownText = `${firstNumber} - ${secondNumber} - ${thirdNumber} = ?`;
            }
        }
    }
    return { Answer, ShownText};
}

export default AddandSubtract3Numbers;


