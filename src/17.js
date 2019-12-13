/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    // 按键对应的字符映射
    var map = {
        2: 'abc', 3: 'def',
        4: 'ghi', 5: 'jkl', 6: 'mno',
        7: 'pqrs', 8: 'tuv', 9: 'wxyz'
    }
    var ans = []
    for (var i = 0; i < digits.length; ++i) {
        var str = map[digits[i]]
        var tmp = []
        for (var j = 0; j < str.length; ++j) {
            var ch = str[j]
            if (!ans.length) {
                tmp.push(ch)
            } else {
                ans.forEach(item => {
                    tmp.push(item + ch)
                })
            }

        }
        ans = tmp
    }
    return ans
};

var digits = '23'
var res = letterCombinations(digits)
console.log(res)