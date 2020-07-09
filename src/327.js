/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
// 思路1：BF
var countRangeSum = function (nums, lower, upper) {
    var ans = 0;
    for (var i = 0; i < nums.length; ++i) {
        var s = nums[i]; // S[i, j]
        if (s >= lower && s <= upper) {
            ans++;
        }
        for (var j = i + 1; j < nums.length; ++j) {
            s += nums[j];
            if (s >= lower && s <= upper) {
                ans++;
            }
        }
    }
    return ans;
};

// 思路2:前缀和...


var nums = [-2, 5, -1],
    lower = -2,
    upper = 2;
var res = countRangeSum(nums, lower, upper);
console.log(res);
