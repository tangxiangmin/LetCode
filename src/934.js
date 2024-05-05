/**
 * @param {number[][]} grid
 * @return {number}
 */
// 思路，广度优先，先找到一座岛，向外或者向内扩散，最终答案就是扩大的圈数
var shortestBridge = function (grid) {
    const m = grid.length
    const n = grid[0].length
    const queue = []
    findIsLand()
    let ans = 0


    while (queue.length) {
        const len = queue.length
        console.table(grid)

        for (let k = 0; k < len; ++k) {
            const [i, j] = queue.shift()
            if (enqueue(i + 1, j) || enqueue(i - 1, j) || enqueue(i, j + 1) || enqueue(i, j - 1)) {
                return ans
            }
        }
        ans++
    }
    return -1

    function findIsLand() {
        for (let i = 0; i < m; ++i) {
            for (let j = 0; j < n; ++j) {
                if (grid[i][j] === 1) {
                    dfs(i, j)
                    return
                }
            }
        }
    }

    function dfs(i, j) {
        if (i < 0 || i === m || j < 0 || j == n) return
        if (grid[i][j] !== 1) return
        grid[i][j] = -1
        if (isBorder(i, j)) {
            queue.push([i, j])
        }
        dfs(i + 1, j)
        dfs(i - 1, j)
        dfs(i, j + 1)
        dfs(i, j - 1)
    }

    function isBorder(i, j) {
        if (i - 1 < 0 || i + 1 == m || j - 1 < 0 || j + 1 === n) return true

        return grid[i + 1][j] === 0 || grid[i - 1][j] === 0 || grid[i][j - 1] === 0 || grid[i][j - 1] === 0
    }


    function enqueue(i, j) {
        if (i < 0 || i === m || j < 0 || j == n) return false
        if (grid[i][j] === 1) return true
        if (grid[i][j] === 0) {
            queue.push([i, j])
            grid[i][j] = -1
        }
        return false
    }

};

var grid = [
    [0, 1, 0],
    [0, 0, 0],
    [0, 0, 1]]

grid = [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1]]

grid =
    [
        [1, 0, 1, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 1, 1, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1]]

var ans = shortestBridge(grid)
console.log(ans)