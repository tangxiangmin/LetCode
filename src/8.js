/**
 * @param {string} str
 * @return {number}
 */
// 思路，主要需要考虑各种边界条件
var myAtoi = function (str) {
    var i = 0
    while (isSpace(str[i])) { i++ }

    var hasSymbol = isMathSymbol(str[i])
    if (i >= str.length || !(isNum(str[i]) || hasSymbol)) return 0

    var mathSymbol = ''
    if (hasSymbol) {
        mathSymbol = str[i]
        i++
    }

    var numStr = ''

    while (isNum(str[i])) {
        if (numStr === '' && str[i] === '0') {
            // 忽略0前缀
        } else {
            numStr += str[i]
        }
        i++
    }
    if (!numStr) return 0

    var max = '2147483648'
    // 字符串比较大小
    if (numStr.length === max.length && numStr >= max || numStr.length > max.length) {
        if (hasSymbol && mathSymbol === '+' || !hasSymbol) {
            numStr = '2147483647'
        } else {
            numStr = max
        }
    }
    return mathSymbol + numStr

    function isSpace(ch) {
        return ch === ' '
    }
    function isMathSymbol(ch) {
        return ch === '+' || ch === '-'
    }
    function isNum(ch) {
        return /^[0-9]$/.test(ch)
    }
};

var s = "   -42"
s = "42"
s = "+"
s = "-2147483648"
s = "20000000000000000000"
s = "  0000000000012345678"
// s = "4193 with words"
// s = "-91283472332"
var res = myAtoi(s)
console.log(res)