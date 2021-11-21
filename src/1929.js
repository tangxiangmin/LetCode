/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
    var ans = [];
    var n = nums.length;
    for (var i = 0; i < n; ++i) {
        ans[i] = nums[i];
        ans[i + n] = nums[i];
    }
    return ans;
};
