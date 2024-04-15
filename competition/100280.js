/**
 * @param {number[][]} points
 * @param {number} w
 * @return {number}
 */
var minRectanglesToCoverPoints = function (points, w) {
    points.sort((a, b) => a[0] - b[0])
    let l = 0
    let r = 0
    let cnt = 0
    let ans = 1
    const n = points.length
    while (r < n) {
        const [x0] = points[l]
        const [x1] = points[r]
        cnt = x1 - x0
        if (cnt > w) {
            ans++
            cnt = 0
            l = r
        }
        r++
    }
    return ans
};
var points = [[2, 1], [1, 0], [1, 4], [1, 8], [3, 5], [4, 6]], w = 1
points = [[0,0],[1,1],[2,2],[3,3],[4,4],[5,5],[6,6]], w = 2
points = [[2,3],[1,2]], w = 0
var ans = minRectanglesToCoverPoints(points, w)
console.log(ans)