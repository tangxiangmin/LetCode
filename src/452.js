/**
 * @param {number[][]} points
 * @return {number}
 */

// 思路：与435类似，使用贪心算法
var findMinArrowShots = function (points) {
    if (!points.length) return 0
    // 按end升序排列
    points.sort((a, b) => {
        return a[1] - b[1]
    })
    var x = points[0] // 找到end最小的元素
    var count = 1
    for (var i = 0; i < points.length; ++i) {
        var cur = points[i]
        // 表示两个气球不相邻，需要额外的箭
        if (cur[0] > x[1]) {
            count++
            x = cur
        }
    }
    return count
};
var points = [[10,16], [2,8], [1,6], [7,12]]
var res = findMinArrowShots(points)
console.log(res)