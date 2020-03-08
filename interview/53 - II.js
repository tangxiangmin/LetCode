/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode-cn.com/problems/que-shi-de-shu-zi-lcof/
 */

// 思路一：顺序遍历
var missingNumber = function(nums) {
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] !== i) return i;
    }
    return nums.length;
};

// 思路二：因为有序，所以二分
var missingNumber = function(nums) {
    let l = 0;
    let r = nums.length - 1;
    while (l <= r) {
        let m = Math.floor((l + r) / 2);
        if (nums[m] === m) {
            l = m + 1;
        } else {
            // return m
            r = m;
        }
    }
    return nums.length;
};
console.log(missingNumber([1,2,3]))
