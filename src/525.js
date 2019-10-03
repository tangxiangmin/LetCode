/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
    var count = 0
    var map = new Map()
    var ans = 0
    map.set(0, -1)
    for (var i = 0; i < nums.length; ++i) {
        // 当count为0时，字符串中0和1的数量相同
        // 当重复遇见count时，索引值之间的字符串对应0和1的数量也相同
        count += (nums[i] === 0 ? -1 : 1)
        if (map.has(count)) {
            ans = Math.max(ans, i - map.get(count))
        } else {
            map.set(count, i)
        }
    }
    return ans
};