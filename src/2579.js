/**
 * @param {number} n
 * @return {number}
 */
// bfs
var coloredCells = function (n) {

    let sum = 1
    for (let i = 2; i <= n; ++i) {
        sum += (i - 2) * 4 + 4
    }
    return sum
};
var n = 3
var ans = coloredCells(n)
console.log(ans)