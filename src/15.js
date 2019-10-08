/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 思路1：暴力解法，会超时时间限制
var threeSum = function (nums) {
    var len = nums.length
    var set = new Set()
    var ans = []
    for (var i = 0; i < len; ++i) {
        var c1 = nums[i]
        // 从剩余数组中找到两个和为-c1的元素组合
        for (var j = i + 1; j < len; ++j) {
            var c2 = nums[j]
            for (var k = j + 1; k < len; ++k) {
                var c3 = nums[k]

                // 去重
                if (c3 === -(c1 + c2)) {
                    var arr = [c1, c2, c3].sort((a, b) => a - b)
                    var key = arr.join(',')
                    if (!set.has(key)) {
                        set.add(key)
                        ans.push(arr)
                    }
                }
            }
        }
    }
    return ans
};

// 通过先排序然后使用双指针
var threeSum = function (nums) {
    nums.sort((a, b) => a - b)
    // [ -4, -1, -1, 0, 1, 2 ]
    var len = nums.length
    var ans = []
    var set = new Set()
    for (var i = 1; i < len - 1; ++i) {
        var l = 0
        var r = len - 1
        // 选择nums[i]作为中间的数
        while (l < i && i < r) {
            if (nums[l] + nums[r] > -nums[i]) {
                r--
            } else if (nums[l] + nums[r] < -nums[i]) {
                l++
            } else {
                var arr = [nums[l], nums[i], nums[r]]
                var key = arr.join(',')
                if (!set.has(key)) {
                    set.add(key)
                    ans.push(arr)
                }
                l++
                r--
            }
        }
    }
    return ans
}

var nums = [-1, 0, 1, 2, -1, -4]
nums = [0,0,0,0]
var res = threeSum(nums)
console.log(res)
