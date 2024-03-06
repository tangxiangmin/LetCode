/**
 * @param {number[][]} grid
 * @return {number}
 */
// 思路，首先遍历找到所有的入口点，ra
var getMaximumGold = function (grid) {
    const row = grid.length
    if (!row) return 0
    const col = grid[0].length
    const entryList = []
    const visited = []
    for (let i = 0; i < row; ++i) {
        visited.push(new Array(col).fill(0))
        for (let j = 0; j < col; ++j) {
            const cell = grid[i][j]
            if (cell > 0) {
                entryList.push([i, j])
            }
        }
    }

    let max = 0
    function backtrack(i, j, sum) {
        if (i < 0 || i >= row || j < 0 || j >= col) return
        if (visited[i][j]) return
        if (grid[i][j] === 0) return

        visited[i][j] = true
        sum += grid[i][j]
        if (max < sum) {
            max = sum
        }
        backtrack(i + 1, j, sum)
        backtrack(i - 1, j, sum)
        backtrack(i, j + 1, sum)
        backtrack(i, j - 1, sum)
        sum -= grid[i][j]
        visited[i][j] = false
    }

    for (const cell of entryList) {
        const [i, j] = cell
        backtrack(i, j, 0)
    }
    return max

};

var grid = [
    [0, 6, 0],
    [5, 8, 7],
    [0, 9, 0]]
    grid = [[1,0,7],[2,0,6],[3,4,5],[0,3,0],[9,0,20]]
var ans = getMaximumGold(grid)
console.log(ans)