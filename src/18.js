/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
// 思路：与三数之和相同，先排序再使用双指针
var fourSum = function (nums, target) {
    nums.sort((a, b) => a - b)
    var len = nums.length
    var ans = []
    var set = new Set()
    for (var i = 1; i < len - 1; ++i) {
        for (var j = i + 1; j < len - 1; ++j) {
            var l = 0;
            var r = len - 1
            var sum = nums[i] + nums[j]
            while (l < i && j < r) {
                var s1 = nums[l] + nums[r]
                var s2 = target - sum
                if (s1 === s2) {
                    var arr = [nums[l], nums[i], nums[j], nums[r]]
                    var key = arr.join(',')
                    if (!set.has(key)) {
                        ans.push(arr)
                        set.add(key)
                    }
                    l++
                    r--
                } else if (s1 < s2) {
                    l++
                } else if (s1 > s2) {
                    r--
                }
            }
        }
    }
    return ans
};

var nums = [1, 0, -1, 0, -2, 2], target = 0
var res = fourSum(nums, target)
console.log(res)