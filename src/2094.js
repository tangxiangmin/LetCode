/**
 * @param {number[]} digits
 * @return {number[]}
 */
// 万物皆可BF
var findEvenNumbers = function (digits) {
    var len = digits.length;
    var ans = [];

    for (var i = 0; i < len; ++i) {
        for (var j = 0; j < len; ++j) {
            for (var k = 0; k < len; ++k) {
                if (
                    i !== j &&
                    i !== k &&
                    j !== k &&
                    digits[i] !== 0 &&
                    digits[k] % 2 === 0
                ) {
                    ans.push(digits[i] * 100 + digits[j] * 10 + digits[k]);
                }
            }
        }
    }
    ans = Array.from(new Set(ans));
    ans.sort((a, b) => a - b);
    return ans;
};

var digits = [2, 1, 3, 0];
var ans = findEvenNumbers(digits);
console.log(ans);
