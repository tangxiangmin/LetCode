/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 思路，先排序然后再使用双指针，与三数之和类似
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b)
    var len = nums.length
    var min = Infinity
    var ans = 0
    for (var i = 1; i < len - 1; ++i) {
        var l = 0
        var r = len - 1
        while (l < i && i < r) {
            var sum = nums[l] + nums[i] + nums[r]
            var diff = sum - target
            var abs = Math.abs(diff)
            if (min > abs) {
                min = abs
                ans = sum
            }
            if (diff > 0) {
                r--
            } else if (diff < 0) {
                l++
            } else {
                // 由于题目描述只存在唯一答案，因此等于0时可直接返回
                return ans
            }
        }
    }
    return ans
};
var nums = [-1, 2, 1, -4], target = 1
var res = threeSumClosest(nums, target)
console.log(res)
