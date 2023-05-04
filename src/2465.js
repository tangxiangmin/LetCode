/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function (nums) {
    nums.sort((a, b) => a - b);
    var l = 0;
    var r = nums.length - 1;
    var ans = {};
    while (l < r) {
        var average = (nums[l] + nums[r]) / 2;
        ans[average] = true;
        l++;
        r--;
    }
    return Object.keys(ans).length;
};
var nums = [4, 1, 4, 0, 3, 5];
nums = [1, 100];
var ans = distinctAverages(nums);
console.log(ans);
