/**
 * @param {number[][]} points
 * @return {number}
 */
// 看起来好像是求x轴差值最大的
var maxWidthOfVerticalArea = function (points) {
    points.sort((a, b) => a[0] - b[0]);

    var len = points.length;
    var max = 0;
    for (var i = 1; i < len; ++i) {
        var prev = points[i - 1];
        var cur = points[i];
        var diff = cur[0] - prev[0];
        max = Math.max(diff, max);
    }
    return max;
};

var points = [
    [3, 1],
    [9, 0],
    [1, 0],
    [1, 4],
    [5, 3],
    [8, 8],
];
var ans = maxWidthOfVerticalArea(points);
console.log(ans);
