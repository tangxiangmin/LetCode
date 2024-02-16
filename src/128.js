/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (!nums.length) return 0
    nums.sort((a, b) => a - b)

    var prev = nums[0]
    var len = 1
    var ans = 1
    for (let i = 1; i < nums.length; ++i) {
        var cur = nums[i]
        if (cur === prev) {
            // 
        } else if (cur - prev === 1) {
            len++
        } else {
            console.log('x', len)
            ans = Math.max(ans, len)
            len = 1
        }
        prev = cur
    }
    ans = Math.max(ans, len)
    return ans
};

// 题目要给出一个O(n)的
var longestConsecutive = function (nums) {
    if (!nums.length) return 0
    var set = new Set(nums)
    var ans = 1
    for (var val of set) {
        if (!set.has(val - 1)) {
            var cur = val
            var len = 0
            while (set.has(cur)) {
                len++
                cur += 1
            }
            ans = Math.max(ans, len)
        }
    }
    return ans
}


var nums = [100, 4, 200, 1, 3, 2]


nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
nums = [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]


nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
// nums = [1, 2, 0, 1]


var ans = longestConsecutive(nums)
console.log(ans)