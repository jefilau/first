import randomNumber from '../mathsfunction/randomNumber';
import randomFactorPair from '../mathsfunction/randomFactorPair';

function Percentage() {
    const GeneratedRandomPair = randomFactorPair(100);
    let Percent
    do {
        Percent = GeneratedRandomPair[0] * randomNumber(1,10);
    } while (Percent >=100);
    const theNumber = GeneratedRandomPair[1] * (randomNumber(0, 1) === 0 ? 2 : 5) * randomNumber(1,9);
    
    // 計算答案（將分數轉換為小數）
    const Answer = Percent*theNumber/100; 

    // 生成題目文本
    const ShownText = `${Percent}% if ${theNumber} is`;

    return { Answer, ShownText };
}

export default Percentage;
