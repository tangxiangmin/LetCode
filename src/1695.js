/**
 * @param {number[]} nums
 * @return {number}
 */
// 本质上是求子数组的最大值
// 子数组不能包含相同的元素，因此再使用一个set
// 碰到重复出现的元素，就滑动控制
var maximumUniqueSubarray = function (nums) {
    var set = new Set();
    var max = 0, sum = 0, start = 0;
    for (var i = 0; i < nums.length; i++) {
        if (!set.has(nums[i])) {
            set.add(nums[i]);
            sum += nums[i];
            max = Math.max(sum, max);
        } else {
            while (nums[i] != nums[start]) {
                sum -= nums[start];
                set.delete(nums[start]);
                start++;
            }
            start++;
        }
    }
    return max;
};

var nums = [4, 2, 4, 5, 6]
nums = [5, 2, 1, 2, 5, 2, 1, 2, 5]
nums = [187, 470, 25, 436, 538, 809, 441, 167, 477, 110, 275, 133, 666, 345, 411, 459, 490, 266, 987, 965, 429, 166, 809, 340, 467, 318, 125, 165, 809, 610, 31, 585, 970, 306, 42, 189, 169, 743, 78, 810, 70, 382, 367, 490, 787, 670, 476, 278, 775, 673, 299, 19, 893, 817, 971, 458, 409, 886, 434]
var ans = maximumUniqueSubarray(nums)
console.log(ans)