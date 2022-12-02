/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 思路：感觉先排个序再滑动窗口？
var minimumDifference = function (nums, k) {
    if (k == 1) return 0;
    nums.sort((a, b) => a - b);
    var l = 0;
    var r = k - 1;
    var min = Infinity;
    while (l < r && r < nums.length) {
        min = Math.min(min, nums[r] - nums[l]);
        l++;
        r++;
    }
    return min;
};

var nums = [90],
    k = 1;
(nums = [9, 4, 1, 7]), (k = 2);

var ans = minimumDifference(nums, k);
console.log(ans);
