/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function (nums, original) {
    nums.sort((a, b) => a - b);
    var ans = original;
    for (var num of nums) {
        if (num === ans) {
            ans *= 2;
        }
    }
    return ans;
};

var nums = [5, 3, 6, 1, 12],
    original = 3;
// nums = [2,7,9], original = 4
// (nums = [1, 16, 13, 19, 12, 10]), (original = 2);
var ans = findFinalValue(nums, original);

console.log(ans);
