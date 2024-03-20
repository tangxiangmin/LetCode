/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var longestAlternatingSubarray = function (nums, threshold) {
    const n = nums.length;
    let ans = 0, i = 0;
    while (i < n) {
        if (nums[i] > threshold || nums[i] % 2 !== 0) {
            i++; // 直接跳过
            continue;
        }
        let start = i; // 记录这一组的开始位置
        i++; // 开始位置已经满足要求，从下一个位置开始判断
        while (i < n && nums[i] <= threshold && nums[i] % 2 !== nums[i - 1] % 2) {
            i++;
        }
        // 从 start 到 i-1 是满足题目要求的（并且无法再延长的）子数组
        ans = Math.max(ans, i - start);
    }
    return ans;
};
var nums = [3, 2, 5, 4], threshold = 5
// nums = [1, 2], threshold = 2
// nums = [2, 3, 4, 5], threshold = 4
nums = [2, 2], threshold = 18
// nums = [2, 8], threshold = 4
var ans = longestAlternatingSubarray(nums, threshold)
console.log(ans)