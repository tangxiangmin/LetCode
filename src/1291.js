/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
// BF直接枚举
var sequentialDigits = function (low, high) {
    var ans = []
    for (let i = low; i <= high; ++i) {
        if (check(i)) {
            ans.push(i)
        }
    }
    return ans
    function check(i) {
        var s = i.toString()
        for (let i = 0; i < s.length - 1; ++i) {
            if (s[i + 1] - s[i] !== 1) return false
        }
        return true
    }
};

// 聪明地枚举，直接枚举出所有符合条件的数字
var sequentialDigits = function (low, high) {
    const ans = []
    for (let i = 1; i <= 9; ++i) {
        let num = i
        for (let j = i + 1; j <= 9; ++j) {
            num = num * 10 + j
            if (num >= low && num <= high) {
                ans.push(num)
            }
        }
    }
    ans.sort((a, b) => a - b)
    return ans
}

var low = 100, high = 300
var ans = sequentialDigits(low, high)
console.log(ans)