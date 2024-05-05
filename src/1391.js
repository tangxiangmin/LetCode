/**
 * @param {number[][]} grid
 * @return {boolean}
 */
// bfs
var hasValidPath = function (grid) {
    const m = grid.length
    const n = grid[0].length

    const queue = [[0, 0]] // [x,y]表示grid坐标

    // 顺时针方向，正上方为0，标记每条边
    const map = {
        1: [0, 1, 0, 1],
        2: [1, 0, 1, 0],
        3: [0, 0, 1, 1],
        4: [0, 1, 1, 0],
        5: [1, 0, 0, 1],
        6: [1, 1, 0, 0],
    }

    const TOP = 0
    const RIGHT = 1
    const BOTTOM = 2
    const LEFT = 3

    while (queue.length) {
        const [i, j] = queue.shift()
        if (i === m - 1 && j === n - 1) {
            return true
        }
        const val = grid[i][j]
        grid[i][j] = -1

        if (val === 1) {
            enqueue(val, RIGHT, i, j + 1)
            enqueue(val, LEFT, i, j - 1)
        } else if (val === 2) {
            enqueue(val, BOTTOM, i + 1, j)
            enqueue(val, TOP, i - 1, j)
        } else if (val === 3) {
            enqueue(val, LEFT, i, j - 1)
            enqueue(val, BOTTOM, i + 1, j)
        } else if (val === 4) {
            enqueue(val, RIGHT, i, j + 1)
            enqueue(val, BOTTOM, i + 1, j)
        } else if (val === 5) {
            enqueue(val, TOP, i - 1, j)
            enqueue(val, LEFT, i, j - 1)
        } else if (val === 6) {
            enqueue(val, TOP, i - 1, j)
            enqueue(val, RIGHT, i, j + 1)
        }
    }

    return false

    function enqueue(val, pos, i, j) {
        if (i < 0 || i === m || j < 0 || j === n) return
        if (grid[i][j] === -1) return

        const prev = map[val]
        const cur = map[grid[i][j]]

        function check() {
            if (pos === 0) {
                return prev[0] === cur[2]
            }
            if (pos === 1) {
                return prev[1] === cur[3]
            }
            if (pos === 2) {
                return prev[2] === cur[0]
            }
            if (pos === 3) {
                return prev[3] === cur[1]
            }
        }
        if (check()) {
            queue.push([i, j])
        }
    }
};
var grid = [[2, 4, 3], [6, 5, 2]]
grid = [
    [1, 1, 1, 1, 6],
    [1, 1, 1, 1, 2],
    [1, 1, 1, 1, 2],
    [1, 1, 1, 1, 2],
    [1, 1, 1, 1, 2]]
grid = [
    [2, 6, 3],
    [6, 5, 2]
] // false
var ans = hasValidPath(grid)
console.log(ans)