/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 思路：可以使用计数排序
var sortColors = function (nums) {
    var map = []
    for (var i = 0; i < nums.length; ++i) {
        var color = nums[i]
        if (!map[color]) {
            map[color] = 0
        }
        map[color]++
    }
    // 貌似要在原数组上修改
    var count = 0
    for (var i = 0; i < map.length; ++i) {
        while (map[i] > 0) {
            nums[count++] = i
            map[i]--
        }
    }
    return nums
};

var nums = [2, 0, 2, 1, 1, 0]
var res = sortColors(nums)
console.log(res)