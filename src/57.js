/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    intervals.push(newInterval)
    intervals.sort((a, b) => a[0] - b[0])
    var ans = []
    var len = intervals.length
    for (var i = 0; i < len; ++i) {
        var next = intervals[i + 1]
        var cur = intervals[i]
        if (!next || cur[1] < next[0]) {
            ans.push(cur)
        } else {
            // 合并
            intervals[i + 1] = [cur[0], Math.max(cur[1], next[1])]
        }
    }
    return ans
};