/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
    const n = grid.length
    const bucket = new Array(n * n + 1).fill(0)
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < n; ++j) {
            bucket[grid[i][j]]++
        }
    }
    let a = 0
    let b = 0
    for (let i = 1; i < bucket.length; ++i) {
        if (bucket[i] === 2) {
            a = i
        } else if (bucket[i] === 0) {
            b = i
        }
    }
    return [a, b]
};