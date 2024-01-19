function formatExpression(expression) {
    // 檢查是否為字符串
    if (typeof expression !== 'string') {
        // 如果不是字符串，可以轉換為字符串或返回錯誤信息
        // 例如，這裡將數字轉換為字符串
        if (typeof expression === 'number') {
            expression = expression.toString();
        } else {
            // 對於其他非字符串類型，返回錯誤信息
            return 'Error: Input must be a string or a number';
        }
    }
    // 移除多餘的空格，並處理一些常見的格式問題
    return expression.replace(/\s+/g, '');
}
export default formatExpression;