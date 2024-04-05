/**
 * @param {number} n
 * @param {number[][]} artifacts
 * @param {number[][]} dig
 * @return {number}
 */
// 工件是矩形的，因此可以模拟
var digArtifacts = function (n, artifacts, dig) {
    const grid = new Array(n).fill(0).map(() => new Array(n).fill(0))
    for (const [i, j] of dig) {
        grid[i][j] = 1
    }
    let ans = 0
    for (const a of artifacts) {
        const [r1, c1, r2, c2] = a
        if (check(r1, c1, r2, c2)) {
            ans++
        }
    }
    return ans

    function check(r1, c1, r2, c2) {
        for (let i = r1; i <= r2; ++i) {
            for (let j = c1; j <= c2; ++j) {
                if (grid[i][j] === 0) {
                    return false
                }
            }
        }
        return true
    }

};