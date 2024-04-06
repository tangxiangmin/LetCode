/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var modifiedMatrix = function (matrix) {
    const m = matrix.length
    const n = matrix[0].length

    for (let i = 0; i < n; ++i) {
        let max = 0
        let blanks = []
        for (let j = 0; j < m; ++j) {
            if (matrix[j][i] === -1) {
                blanks.push(j)
                continue
            }
            max = Math.max(matrix[j][i], max)
        }
        for (const j of blanks) {
            matrix[j][i] = max
        }
    }
    return matrix
};