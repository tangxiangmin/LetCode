/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
// 思路，遍历grid2中的岛屿，判断是否在grid1中
var countSubIslands = function (grid1, grid2) {
    const m = grid1.length
    const n = grid1[0].length

    let ans = 0
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (grid2[i][j] === 1 && check(i, j)) {
                ans++
            }
        }
    }

    return ans
    function check(row, col) {
        const queue = [[row, col]]
        let contain = true

        while (queue.length) {
            const [i, j] = queue.shift()
            if (grid1[i][j] !== 1) {
                contain = false
            }

            enqueue(i + 1, j)
            enqueue(i - 1, j)
            enqueue(i, j + 1)
            enqueue(i, j - 1)
        }

        return contain

        function enqueue(i, j) {
            if (i < 0 || i == m || j < 0 || j == n) return
            if (grid2[i][j] !== 1) return
            grid2[i][j] = 0
            queue.push([i, j])
        }
    }
};

var grid1 = [[1, 1, 1, 0, 0], [0, 1, 1, 1, 1], [0, 0, 0, 0, 0], [1, 0, 0, 0, 0], [1, 1, 0, 1, 1]], grid2 = [[1, 1, 1, 0, 0], [0, 0, 1, 1, 1], [0, 1, 0, 0, 0], [1, 0, 1, 1, 0], [0, 1, 0, 1, 0]]

var ans = countSubIslands(grid1, grid2)
console.log(ans)