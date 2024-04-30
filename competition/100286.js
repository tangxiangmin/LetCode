/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var canMakeSquare = function (grid) {
    const m = grid.length
    const n = grid.length

    for (let i = 1; i < m; ++i) {
        for (let j = 1; j < n; ++j) {
            const a = grid[i - 1][j - 1]
            const b = grid[i - 1][j]
            const c = grid[i][j - 1]
            const d = grid[i][j]
            const map = { W: 0, B: 0 }

            for (const ch of [a, b, c, d]) {
                map[ch]++
            }
            if (map.W == 2 && map.B === 2) {
                continue
            }
            return true
        }
    }
    return false

};

var grid = [["B", "W", "B"], ["W", "B", "W"], ["B", "W", "B"]]
grid = [
    ["W", "B", "B"],
    ["B", "W", "B"],
    ["B", "B", "B"]
]
grid = [["B","W","B"],["B","W","W"],["B","W","B"]]
grid = [["B","W","B"],["B","W","W"],["B","W","W"]]
var ans = canMakeSquare(grid)
console.log(ans)