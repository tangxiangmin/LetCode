/**
 * @param {string} equation
 * @return {string}
 */
// 思路，将x往左边移动，其余数字往右边移动，符号取反
var solveEquation = function (equation) {
    let s = equation[0] !== '-' ? '+' : ''
    let right = false
    for (const ch of equation) {
        let c = ch
        if (ch === '=') {
            right = true
            c = '-'
        } else if (right) {
            if (ch === '-') {
                c = '+'
            } else if (ch === '+') {
                c = '-'
            }
        }
        s += c
    }

    let x = 0
    let num = 0
    let dir = ''
    let numVal = ''
    for (let i = 0; i < s.length; ++i) {
        const ch = s[i]
        if (ch === '+' || ch === '-') {
            dir = ch === '+'

        } else if (ch === 'x') {
            x += (dir ? 1 : -1) * (numVal || 1)
            numVal = ''
        } else {
            numVal += ch
        }

        if (numVal && i === s.length - 1 || ['+', '-'].includes(s[i + 1])) {
            num += (dir ? 1 : -1) * numVal
            numVal = ''
        }
    }
    // console.log({ x, num })
    if (num === 0 && x === 0) {
        return "Infinite solutions"
    }
    if (x === 0) return "No solution"

    return `x=${-num / x}`
};

var equation = "x+5-3+x=6+x-2"
equation = "2x+3x-6x=x+2"
equation = "x=x"
// equation = "2x=x"
// equation = "x=x+2"
var ans = solveEquation(equation)
console.log(ans)