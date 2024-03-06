/**
 * @param {string} expression
 * @return {number[]}
 */
// expression 由数字和运算符 '+'、'-' 和 '*' 组成
// 可以拆分子问题，计算运算符左右的值，然后通过运算符进行运算
var diffWaysToCompute = function (expression) {

    const ans = []
    for (let i = 0; i < expression.length; ++i) {
        const c = expression[i]
        if (c === '+' || c === '-' || c === '*') {
            const ans1 = diffWaysToCompute(expression.substring(0, i))
            const ans2 = diffWaysToCompute(expression.substring(i + 1))

            for (const v1 of ans1) {
                for (const v2 of ans2) {
                    if (c === '+') {
                        ans.push(v1 + v2)
                    } else if (c === '-') {
                        ans.push(v1 - v2)
                    } else if (c === '*') {
                        ans.push(v1 * v2)
                    }
                }
            }
        }
    }
    // 纯数字
    if (ans.length === 0) {
        return [+expression]
    }
    return ans
};

var expression = "2*3-4*5"
expression = "11"
var ans = diffWaysToCompute(expression)
console.log(ans)