/**
 * @param {number[]} nums
 * @return {string[]}
 */

// 思路：本题类似于空间压缩，根据数组有序的条件依次遍历即可
var summaryRanges = function (nums) {
    var ans = []
    var start = 0
    var len = nums.length
    for (var i = 1; i <= len; ++i) {
        var cur = nums[i]
        var prev = nums[i - 1]
        if (cur !== prev + 1 || i === len) {
            var str = start === i - 1 ? `${nums[start]}` : `${nums[start]}->${nums[i - 1]}`
            ans.push(str)
            start = i
        }
    }

    return ans
};

var nums = [0, 1, 2, 4, 5, 7]
nums =[0,2,3,4,6,8,9]
var res = summaryRanges(nums)
console.log(res)