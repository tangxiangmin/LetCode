/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
// 模拟
var diagonalSort = function (mat) {
    const m = mat.length
    const n = mat[0].length

    for (let i = 0; i < m; ++i) {
        sort(i, 0)
    }
    for (let j = 1; j < n; ++j) {
        sort(0, j)
    }
    return mat

    function sort(start, end) {
        let arr = []
        let i = start
        let j = end
        while (i < m && j < n) {
            arr.push(mat[i][j])
            i++
            j++
        }

        arr.sort((a, b) => a - b)

        i = start
        j = end

        let index = 0
        while (i < m && j < n) {
            mat[i][j] = arr[index]
            index++
            i++
            j++
        }

    }

};