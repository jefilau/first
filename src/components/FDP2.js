import randomNumber from '../mathsfunction/randomNumber';

function FDP2() {
    const CommonFactor=randomNumber(1, 20);
    // 生成符合條件的分母
    let denominator,numerator;
    do
    {
        denominator = CommonFactor * (randomNumber(0, 1) === 0 ? 2 : 5) *  (randomNumber(0, 1) === 0 ? 2 : 5);
        numerator = CommonFactor * randomNumber(1, 5);
    } while(denominator <= numerator);
    // 計算答案（將分數轉換為小數）
    const Answer = (numerator / denominator); 

    // 生成題目文本
    const ShownText = `Rewrite ${numerator}/${denominator} into decimals`;

    return { Answer, ShownText };
}

export default FDP2;
