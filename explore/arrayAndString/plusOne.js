/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var len = digits.length;

    digits[len - 1] += 1;

    for (var i = len - 1; i >= 0; --i) {
        if (digits[i] > 9) {
            digits[i] = 0;
            if (i - 1 >= 0) {
                digits[i - 1] += 1;
            }else {
                digits.unshift(1) // 首位进1
            }
        }
    }
    return digits
};

var arr = [1, 2, 3];
console.log(plusOne(arr))