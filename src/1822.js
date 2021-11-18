/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
    var sign = 0;
    for (var num of nums) {
        if (num === 0) return 0;
        if (num > 0) sign++;
        sign--;
    }
    if (sign >= 0) return 1;
    return sign % 2 === 0 ? 1 : -1;
};

var nums = [-1, 1, -1, 1, -1];
nums = [1, 5, 0, 2, -3];
nums = [-1, -2, -3, -4, 3, 2, 1];
var ans = arraySign(nums);
console.log(ans);
