/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 找到所有出现次数超过n/3次数的元素，
// 由于要求空间复杂度为 O(1)
var majorityElement = function (nums) {
    var map = {}
    var len = nums.length
    var ans = []
    nums.forEach(item => {
        if (!map[item]) map[item] = 0
        map[item]++
        if (map[item] > len / 3 && ans.includes(item)) ans.push(item)
    })
    return ans
};