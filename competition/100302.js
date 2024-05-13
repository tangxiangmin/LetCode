/**
 * @param {number[][]} points
 * @param {string} s
 * @return {number}
 */
// 正方向要包含某个点，需要取其坐标max(x,y)
var maxPointsInsideSquare = function (points, s) {

    const edges = []
    for (let i = 0; i < s.length; ++i) {
        const [x, y] = points[i]
        const edge = Math.max(Math.abs(x), Math.abs(y))
        edges.push([edge, i])
    }
    edges.sort((a, b) => a[0] - b[0])

    // console.log(JSON.stringify(edges))

    let cnt = 0
    const used = {}
    let l = 0
    let r = 0
    const n = edges.length
    while (r < n) {
        while (r < n && edges[l][0] === edges[r][0]) {
            const label = s[edges[r][1]]
            if (used[label]) {
                return cnt
            }
            used[label] = 1
            r++
        }

        cnt += r - l
        l = r
    }
    return cnt

};

var points = [[2, 2], [-1, -2], [-4, 4], [-3, 1], [3, -3]], s = "abdca"
points = [[1, 1], [-2, -2], [-2, 2]], s = "abb"
points = [[1, 1], [-1, -1], [2, -2]], s = "ccd"
points = [[1, -1]], s = "a"
var ans = maxPointsInsideSquare(points, s)
console.log(ans)