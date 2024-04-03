/**
 * @param {number[][]} points
 * @return {number}
 */
// BF，显然会超时
var minimumDistance = function (points) {
    const n = points.length
    let res = []
    for (let i = 0; i < n; ++i) {
        let max = 0
        for (let j = 0; j < n; ++j) {
            if (j === i) continue
            for (let k = j + 1; k < n; ++k) {
                if (k === i) continue
                const val = calc(j, k)
                max = Math.max(val, max)
            }
        }
        res[i] = max
    }
    return Math.min(...res)
    function calc(j, k) {
        const [a, b] = points[j]
        const [c, d] = points[k]
        return Math.abs(a - c) + Math.abs(b - d)
    }
};


var points = [[3, 10], [5, 15], [10, 2], [4, 4]]
// points = [[1, 1], [1, 1], [1, 1]]
var ans = minimumDistance(points)
console.log(ans)