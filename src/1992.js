/**
 * @param {number[][]} land
 * @return {number[][]}
 */
var findFarmland = function (land) {
    const m = land.length
    const n = land[0].length

    const ans = []
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (land[i][j] === 1) {
                ans.push(check(i, j))
            }
        }
    }

    return ans

    function check(sr, sc) {
        let i = sr
        while (i < m && land[i][sc] === 1) {
            i++
        }
        let j = sc
        while (j < n && land[sr][j] === 1) {
            j++
        }

        for (let k = sr; k < i; ++k) {
            for (let h = sc; h < j; ++h) {
                land[k][h] = 0
            }
        }
        return [sr, sc, i - 1, j - 1]
    }

};
var land = [[1, 0, 0], [0, 1, 1], [0, 1, 1]]
var ans = findFarmland(land)
console.log(ans)