/**
 * @param {number[]} nums
 * @return {number}
 */
// 三角形两边之和大于第三边，两边之差小于第三边

// 暴力解法
var triangleNumber = function (nums) {
    var len = nums.length
    var ans = 0
    for (var i = 0; i < len; ++i) {
        for (var j = i + 1; j < len; ++j) {
            var sum = nums[i] + nums[j]
            var differ = Math.abs(nums[i] - nums[j])
            for (var k = j + 1; k < len; ++k) {
                if (nums[k] < sum && nums[k] > differ) {
                    ans++
                }
            }
        }
    }
    return ans
};

// 解法二：应该可以先排序，然后使用双指针，todo

var nums = [2, 2, 3, 4]
var res = triangleNumber(nums)
console.log(res)