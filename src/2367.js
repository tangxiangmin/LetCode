/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
// BF
var arithmeticTriplets = function (nums, diff) {
    var len = nums.length;
    var ans = 0;
    for (var i = 0; i < len - 2; ++i) {
        for (var j = 0; j < len - 1; ++j) {
            for (var k = 0; k < len; ++k) {
                if (nums[k] - nums[j] === diff && nums[j] - nums[i] === diff) {
                    ans++;
                }
            }
        }
    }
    return ans;
};
// 稍微优化一下
var arithmeticTriplets = function (nums, diff) {
    var len = nums.length;
    var ans = 0;
    for (var i = 0; i < len - 2; ++i) {
        if (nums[i + 1] - nums[i] > diff) continue;
        for (var j = 0; j < len - 1; ++j) {
            if (nums[j + 1] - nums[j] > diff) continue;
            for (var k = 0; k < len; ++k) {
                if (nums[k] - nums[j] === diff && nums[j] - nums[i] === diff) {
                    ans++;
                }
            }
        }
    }
    return ans;
};
var nums = [0, 1, 4, 6, 7, 10],
    diff = 3;

(nums = [4, 5, 6, 7, 8, 9]), (diff = 2);
var ans = arithmeticTriplets(nums, diff);
console.log(ans);
