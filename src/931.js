/**
 * @param {number[][]} A
 * @return {number}
 */
var minFallingPathSum = function (A) {
    let row = A.length,
        col = A[0].length;

    for (let i = row - 2; i >= 0; --i) {
        for (let j = 0; j < col; ++j) {
            let best = A[i + 1][j]
            if (j > 0) {
                best = Math.min(best, A[i + 1][j - 1]);
            }
            if (j + 1 < col) {
                best = Math.min(best, A[i + 1][j + 1]);
            }
            A[i][j] += best;
        }
    }
    return Math.min.apply(null, A[0])
};

var input = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var ans = minFallingPathSum(input)
console.log(ans)