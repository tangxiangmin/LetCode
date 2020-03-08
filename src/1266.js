/**
 * @param {number[][]} points
 * @return {number}
 */
// 思路：找到下一个点的对角线位置，然后平移过去
var minTimeToVisitAllPoints = function(points) {
    let ans = 0;

    for (let i = 0; i < points.length - 1; ++i) {
        let cur = points[i];
        let next = points[i + 1];
        ans += move(cur, next);
    }
    return ans;

    // 从p0移动到p1
    function move(p0, p1) {
        let [x0, y0] = p0;
        let [x1, y1] = p1;
        if (x0 === x1) {
            return Math.abs(y1 - y0);
        } else if (y0 == y1) {
            return Math.abs(x1 - x0);
        } else {
            let step = 0;
            let dx = Math.abs(x1 - x0);
            let dy = Math.abs(y1 - y0);
            step += Math.max(dx, dy)
            
            return step;
        }
    }
};

var points = [
    [1, 1],
    [3, 4],
    [-1, 0]
];
// var points = [[1,1],[-1,4]]
// var points = [[-1,4],[1,1]]
var ans = minTimeToVisitAllPoints(points);
console.log(ans);
