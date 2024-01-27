function SimplifyLinearPolynomails(poly) {
    // 移除空格並處理括號
    poly = poly.replace(/\s/g, '');
    poly = poly.replace(/\-\(/g, '-1*(').replace(/\+\(/g, '');

    // 展開括號
    while (poly.includes('(')) {
        poly = poly.replace(/\(([^\(\)]+)\)/g, (match, subExpr) => {
            if (match.startsWith('-')) {
                return subExpr.replace(/([+-]?)(\d*x?)/g, (m, sign, term) => {
                    return sign === '-' ? '+' + term : '-' + term;
                });
            }
            return subExpr;
        });
    }

    // 將多項式拆分為單獨項
    let terms = poly.split(/(?=[+-])/);

    let coefficients = {};

    for (let term of terms) {
        // 預設係數和次數
        let coefficient = 0, power = 1;

        if (term.includes('x')) {
            // 若有x，則分離係數和x
            let parts = term.split('x');
            if (parts[0] !== '' && parts[0] !== '+' && parts[0] !== '-') {
                coefficient = parseFloat(parts[0]);
            } else if (parts[0] === '-') {
                coefficient = -1;
            } else {
                coefficient = 1;
            }
        } else {
            // 若沒有x，則為常數項
            coefficient = parseFloat(term);
            power = 0;
        }

        // 累加係數
        coefficients[power] = (coefficients[power] || 0) + coefficient;
    }

    // 重新構建多項式
    let result = '';
    for (let power in coefficients) {
        if (coefficients[power] !== 0) {
            if (result !== '' && coefficients[power] > 0) {
                result += '+';
            }
            if (power > 0) {
                if(coefficients[power] === -1){
                    result += '-';
                } else if (coefficients[power] !== 1) {
                    result += coefficients[power];
                }
                result += 'x';
            } else {
                result += coefficients[power];
            }
        }
    }

    return result || '0';
}
export default SimplifyLinearPolynomails;
// 測試函數
console.log(SimplifyLinearPolynomails("1-(2x+3)")); // -2x-2
console.log(SimplifyLinearPolynomails("2+(x+4)-2x")); // -x+6
