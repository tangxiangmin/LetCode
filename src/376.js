/**
 * @param {number[]} nums
 * @return {number}
 */

// 思路，摆动子序列开头差值只有两种情况：为正或者为负，返回这两种情况的较大值
var wiggleMaxLength = function (nums) {
    var len = nums.length
    if (!len) return 0

    return Math.max(step(true), step(false))

    // 开头差值为正
    function step(initFlag) {
        var count = 1
        var flag = initFlag
        for (var i = 1; i < len; ++i) {
            // 找到下一个满足摆动条件的索引值
            while (
                (flag && nums[i] - nums[i - 1] <= 0) ||
                (!flag && nums[i] - nums[i - 1] >= 0)
            ) {
                i++
                if (i > len - 1) {
                    console.log({ count })
                    return count
                }
            }
            flag = !flag
            count++
        }
        return count
    }
};
var nums = [1, 7, 4, 9, 2, 5]
nums = [1, 17, 5, 10, 13, 15, 10, 5, 16, 8]
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
nums = [0, 0]
nums = [102, 101, 20, 91, 156, 78, 75, 142, 69, 81, 46, 142, 113, 163, 190, 178, 13, 36, 134, 54]
var res = wiggleMaxLength(nums)
console.log(res)