/**
 * @param {number[][]} isWater
 * @return {number[][]}
 */
// 与水相连的陆地必须是1，bfs扩散增加高度
var highestPeak = function (isWater) {
    const m = isWater.length
    const n = isWater[0].length
    let queue = []
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (isWater[i][j] === 1) {
                queue.push([i, j])
                isWater[i][j] = -1
            }
        }
    }
    const grid = new Array(m).fill(0).map(() => new Array(n).fill(0))

    let h = 0
    while (queue.length) {
        // 直接用queue.shift会超时
        let arr = [...queue]
        queue = []
        for (const [i, j] of arr) {
            grid[i][j] = h

            enqueue(i + 1, j)
            enqueue(i - 1, j)
            enqueue(i, j + 1)
            enqueue(i, j - 1)
        }
        h++
    }

    return grid

    function enqueue(i, j) {
        if (i < 0 || i === m || j < 0 || j === n) return
        if (isWater[i][j] === -1) return
        isWater[i][j] = -1
        queue.push([i, j])
    }

};
var isWater = [[0, 1], [0, 0]]
isWater = [[0, 0, 1], [1, 0, 0], [0, 0, 0]]
var ans = highestPeak(isWater)
console.table(ans)