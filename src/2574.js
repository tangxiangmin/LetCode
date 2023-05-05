/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRigthDifference = function (nums) {
    var leftSum = [0];
    for (var i = 0; i < nums.length; ++i) {
        leftSum[i + 1] = leftSum[i] + nums[i];
    }
    var rightSum = [];
    rightSum[nums.length] = 0;
    for (var i = nums.length - 1; i >= 0; --i) {
        rightSum[i] = rightSum[i + 1] + nums[i];
    }
    var ans = [];
    for (var i = 0; i < nums.length; ++i) {
        ans[i] = Math.abs(leftSum[i] - rightSum[i + 1]);
    }
    return ans;
};

var nums = [10, 4, 8, 3];
nums = [1]
var ans = leftRigthDifference(nums);
console.log(ans);
