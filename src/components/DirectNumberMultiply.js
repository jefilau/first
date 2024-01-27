import randomNumber from '../mathsfunction/randonNumber';

function DirectNumberMultiply() {
    // 设置问题和答案
    let FirstNumber, SecondNumber;
    let Answer = undefined;
    let ShownText = undefined;

    do {
        FirstNumber = randomNumber(-5, 13);
        SecondNumber = randomNumber(-9, 9);
    } while (FirstNumber >= 0 && SecondNumber >= 0); // 当两个数都是正数时，重新生成

    const displayFirstNumber = FirstNumber < 0 ? `(${FirstNumber})` : FirstNumber; // 为 First Number 添加括号
    const displaySecondNumber = SecondNumber < 0 ? `(${SecondNumber})` : SecondNumber; // 为 Second Number 添加括号

    Answer = FirstNumber * SecondNumber;
    ShownText = displayFirstNumber + ' \u00D7 ' + displaySecondNumber + ' = ?';

    return { Answer, ShownText };
}

export default DirectNumberMultiply;
