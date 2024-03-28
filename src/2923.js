/**
 * @param {number[][]} grid
 * @return {number}
 */
var findChampion = function (grid) {
    var n = grid.length
    const arr = []
    for (let i = 0; i < n; ++i) {
        arr[i] = i
    }
    arr.sort((i, j) => {
        return grid[i][j] === 1 ? 1 : -1
    })
    return arr[n-1]

};

var grid = [
    [0, 1],
    [0, 0]
]
grid = [[0,0,1],[1,0,1],[0,0,0]]
var ans = findChampion(grid)
console.log(ans)