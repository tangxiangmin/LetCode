/**
 * @param {number[][]} grid
 * @return {boolean}
 */
// 模拟
var checkValidGrid = function (grid) {
    const n = grid.length
    const steps = []
    if (grid[0][0] !== 0) return false

    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < n; ++j) {
            const val = grid[i][j]
            if (steps[val]) return false
            steps[val] = [i, j]
        }
    }


    const len = steps.length
    for (let i = 1; i < len; ++i) {
        const [a, b] = steps[i - 1]
        const [c, d] = steps[i]

        if (!check(a, b, c, d)) {
            return false
        }
    }
    return true

    // 判断是否可以从(a,b)跳转到(c,d)
    function check(a, b, c, d) {
        if (a + 2 === c || a - 2 === c) {
            return b + 1 === d || b - 1 === d
        }
        if (a + 1 === c || a - 1 === c) {
            return b + 2 === d || b - 2 === d
        }
        return false
    }
};

var grid = [[0, 11, 16, 5, 20], [17, 4, 19, 10, 15], [12, 1, 8, 21, 6], [3, 18, 23, 14, 9], [24, 13, 2, 7, 22]]
grid = [[24, 11, 22, 17, 4], [21, 16, 5, 12, 9], [6, 23, 10, 3, 18], [15, 20, 1, 8, 13], [0, 7, 14, 19, 2]]
var ans = checkValidGrid(grid)
console.log(ans)