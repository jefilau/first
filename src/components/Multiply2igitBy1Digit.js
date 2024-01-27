import randomNumber from '../mathsfunction/randomNumber';

function Multiply2igitBy1Digit() {
    // 生成個位數和兩位數
    const singleDigit = randomNumber(2, 9);
    const doubleDigit = randomNumber(10, 99);

    // 隨機決定數字的順序
    const isFirst = randomNumber(0, 1) === 1;

    let Answer;
    let ShownText;

    if (isFirst) {
        // 如果個位數在前
        ShownText = `${singleDigit} × ${doubleDigit} = ?`;
    } else {
        // 如果兩位數在前
        ShownText = `${doubleDigit} × ${singleDigit} = ?`;
    }
    Answer = doubleDigit * singleDigit;
       
    return { Answer, ShownText };
}

export default Multiply2igitBy1Digit;
