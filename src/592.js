/**
 * @param {string} expression
 * @return {string}
 */

var fractionAddition = function (expression) {
    const a = []
    const b = []
    const c = []
    // 首位+
    if (/\d/.test(expression[0])) {
        a.push('+')
    }
    let num = ''
    for (const ch of expression) {
        if (ch === '+' || ch === '-') {
            a.push(ch)
            if (num) {
                c.push(num)
                num = ''
            }
        } else if (ch === '/') {
            b.push(num)
            num = ''
        } else {
            num += ch
        }
    }
    c.push(num)

    const times = leastCommonMultiple(...c)
    let sum = 0
    for (let i = 0; i < a.length; ++i) {
        const v = times / c[i] * b[i]
        sum += (a[i] === '+' ? 1 : -1) * v
    }


    const t = gcd(Math.abs(sum), times)
    return `${sum / t}/${times / t}`

    function gcd(a, b) {
        while (b != 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    function leastCommonMultiple(...numbers) {
        // 计算最小公倍数，使用乘法避免溢出
        return numbers.reduce((a, b) => a * b / greatestCommonDivisor(a, b), 1);
    }

    function greatestCommonDivisor(a, b) {
        // 欧几里得算法求最大公约数
        return b ? greatestCommonDivisor(b, a % b) : a;
    }
};
var expression = "-1/2+1/2"
// expression = "-1/2+1/2+1/3"
// expression = "1/3-1/2"
var ans = fractionAddition(expression)
console.log(ans)