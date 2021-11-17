/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function (x, y, points) {
    var len = points.length;
    var min = Infinity;
    var minIdx = -1;
    for (var i = 0; i < len; ++i) {
        var [a, b] = points[i];
        // 有效
        if (a === x || b === y) {
            // 最近
            var d = dis(x, y, a, b);
            if (d < min) {
                min = d;
                minIdx = i;
            }
        }
    }
    return minIdx;
    function dis(x1, y1, x2, y2) {
        return Math.abs(x1 - x2) + Math.abs(y1 - y2);
    }
};
var x = 3,
    y = 4,
    points = [
        [1, 2],
        [3, 1],
        [2, 4],
        [2, 3],
        [4, 4],
    ];
    x = 3, y = 4, points = [[3,4]]
    x = 3, y = 4, points = [[2,3]]
var ans = nearestValidPoint(x, y, points);

console.log(ans)