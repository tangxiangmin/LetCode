/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function (grid) {
    const m = grid.length
    if (!m) return []
    const n = grid[0].length


    function fall(i, j) {
        if (i === m) return j
        const cell = grid[i][j]
        if (cell === 1) {
            // \形式
            if (j === n - 1) {
                return -1
            }
            if (grid[i][j + 1] === -1) {
                // 被右边的v挡住
                return -1
            }
            return fall(i + 1, j + 1)
        } else {
            // /形式
            if (j === 0) {
                return -1
            }
            if (grid[i][j - 1] === 1) {
                return -1
            }
            return fall(i + 1, j - 1)
        }
    }
    let ans = []
    for (let i = 0; i < n; ++i) {
        ans[i] = fall(0, i)
    }
    return ans
};
var grid = [[1, 1, 1, -1, -1], [1, 1, 1, -1, -1], [-1, -1, -1, 1, 1], [1, 1, 1, 1, -1], [-1, -1, -1, -1, -1]]
grid = [[-1]]
grid = [[1,1,1,1,1,1],[-1,-1,-1,-1,-1,-1],[1,1,1,1,1,1],[-1,-1,-1,-1,-1,-1]]
var ans = findBall(grid)
console.log(ans)