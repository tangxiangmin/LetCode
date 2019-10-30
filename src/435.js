/**
 * @param {number[][]} intervals
 * @return {number}
 */

// 参考评论区的贪心算法
var eraseOverlapIntervals = function (intervals) {
    if(!intervals.length) return 0
    // 按结束时间排序
    intervals.sort((a, b) => {
        return a[1] - b[1]
    })
    // 选择一个最早结束的
    var x = intervals[0]
    var ans = 1 // 统计符合要求的数据
    for (var i = 0; i < intervals.length; ++i) {
        var cur = intervals[i]
        // 不与x相交
        if (cur[0] >= x[1]) {
            ans++
            x = cur
        }
    }

    return intervals.length - ans
};

var intervals = [[1, 2], [2, 3], [3, 4], [1, 3]]
intervals = [[1, 10], [2, 3], [3, 4]]
var res = eraseOverlapIntervals(intervals)
console.log(res)