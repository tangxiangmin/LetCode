/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// 思路：首先排序，然后遍历合并重叠的取悦
var merge = function (intervals) {
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

var arr = [[1, 3], [2, 6], [8, 10], [15, 18]]
arr = [[1, 4], [4, 5]]
arr = [[1, 4], [2, 3]]
var res = merge(arr)
console.log(res)