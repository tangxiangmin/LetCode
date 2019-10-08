/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 累积和
var subarraySum = function (nums, k) {
    // sum[i] 用于存储 0 ~ i-1之间的元素和
    var sum = []
    sum[0] = 0
    for (var i = 1; i <= nums.length; ++i) {
        sum[i] = sum[i - 1] + nums[i - 1]
    }

    var count = 0
    for (var start = 0; start < nums.length; ++start) {
        for (var end = start + 1; end <= nums.length; ++end) {
            // sum[end] - sum[start]代表 start到end-1之间的元素和
            if (sum[end] - sum[start] === k) {
                count++
            }
        }
    }
    return count
};
// 双指针计算计算满足题意的子数组
var subarraySum = function (nums, k) {
    var count = 0
    for (var start = 0; start < nums.length; ++start) {
        var sum = 0
        for (var end = start; end < nums.length; ++end) {
            sum += nums[end]
            if (sum === k) {
                count++
            }
        }
    }
    return count
}
// 通过hash表保存每个sum出现次数
var subarraySum = function (nums, k) {
    var count = 0;
    var sum = 0
    var map = new Map()
    map.set(0, 1)
    for (var i = 0; i < nums.length; ++i) {
        sum += nums[i]
        // 如果之前存在 sum - k ，则必定存在和为k的子数组
        if (map.has(sum - k)) {
            count += map.get(sum - k)
        }
        map.set(sum, (map.get(sum) || 0) + 1)
    }
    return count
}