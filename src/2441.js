/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
    nums.sort((a, b) => a - b);
    var l = 0;
    var r = nums.length - 1;
    while (l < r) {
        if (nums[l] > 0 || nums[r] < 0) return -1;

        if (-nums[l] === nums[r]) return nums[r];

        if (-nums[l] > nums[r]) {
            l++;
        } else {
            r--;
        }
    }
    return -1;
};

var nums = [-1, 2, -3, 3];
nums = [-1, 10, 6, 7, -7, 1];
nums = [-10, 8, 6, 7, -2, -3];
var ans = findMaxK(nums);
console.log(ans);
