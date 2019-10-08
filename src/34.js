/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 思路：二分，需要考虑包含重复数字的问题
var searchRange = function (nums, target) {
    var len = nums.length
    var l = 0
    var r = len - 1
    while (l <= r) {
        var mid = Math.floor((l + r) / 2)
        var num = nums[mid]
        if (num < target) {
            l = mid + 1
        } else if (num > target) {
            r = mid - 1
        } else {
            // 找到起始和结束的索引值
            var prev = mid - 1
            while (nums[prev] === num) {
                prev--
            }
            var next = mid + 1
            while (nums[next] === num) {
                next++
            }
            return [prev + 1, next - 1]
        }
    }
    return [-1, -1]
};
var nums = [5, 7, 7, 8, 8, 10], target = 8
// nums = [5, 7, 7, 8, 8, 10], target = 6
nums = [1], target = 1
// nums = [5, 7, 7, 8, 8, 10], target = 8
// nums = [1, 4], target = 4
var res = searchRange(nums, target)
console.log(res)