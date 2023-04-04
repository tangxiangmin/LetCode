/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function (nums) {
    nums.sort((a, b) => b - a);
    var sum = nums.reduce((acc, row) => {
        return acc + row;
    }, 0);
    var i = 0;
    var l = 0;
    while (i < nums.length) {
        l += nums[i];
        var r = sum - l;
        if (l > r) {
            return nums.slice(0, i + 1);
        }
        i++;
    }
};

var nums = [4, 3, 10, 9, 8];
nums = [4, 4, 7, 6, 7];
nums = [6];
var ans = minSubsequence(nums);
console.log(ans);
