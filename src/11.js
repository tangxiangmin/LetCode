/**
 * @param {number[]} height
 * @return {number}
 */
// 思路1：暴力解法，面积为宽  * min(高)
var maxArea = function (height) {
    var len = height.length
    var max = 0
    for (var i = 0; i < len; ++i) {
        for (var j = i + 1; j < len; ++j) {
            var area = (j - i) * Math.min(height[i], height[j])
            if (area > max) {
                max = area
            }
        }
    }
    return max
};
// 思路2：双指针，每次移动高度较小的指针
var maxArea = function (height) {
    var max = 0
    var l = 0
    var r = height.length - 1
    while (l < r) {
        var area = (r - l) * Math.min(height[l], height[r])
        if (max < area) {
            max = area
        }
        if (height[l] < height[r]) {
            l++
        } else {
            r--
        }
    }
    return max

}
var arr = [1, 8, 6, 2, 5, 4, 8, 3, 7] // 49
var res = maxArea(arr)
console.log(res)