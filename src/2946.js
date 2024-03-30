/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {boolean}
 */
var areSimilar = function (mat, k) {
    const m = mat.length
    const n = mat[0].length
    k %= n
    if (k === 0) return true

    for (let i = 0; i < m; ++i) {
        let ans = i % 2 === 0 ? moveLeft(mat[i]) : moveRight(mat[i])
        if (!ans) {
            return false
        }
    }
    return true

    // dir为1表示右移，-1表示左移
    function moveLeft(arr) {
        const list = arr.slice(k).concat(arr.slice(0, k))
        for (let i = 0; i < n; ++i) {
            if (list[i] !== arr[i]) return false
        }
        return true
    }
    function moveRight(arr) {
        const list = arr.slice(n - k).concat(arr.slice(0, n - k))
        for (let i = 0; i < n; ++i) {
            if (list[i] !== arr[i]) return false
        }
        return true

    }
};
var mat = [[1, 2, 1, 2], [5, 5, 5, 5], [6, 3, 6, 3]], k = 2
mat = [[1, 2]], k = 1
mat = [[7, 7], [10, 10], [4, 4]], k = 2
mat =
    [[6, 6, 6, 6, 6, 6, 6, 6, 6, 6], [9, 9, 9, 9, 9, 9, 9, 9, 9, 9], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10], [2, 2, 2, 2, 2, 2, 2, 2, 2, 2], [6, 6, 6, 6, 6, 6, 6, 6, 6, 6], [7, 7, 7, 7, 7, 7, 7, 7, 7, 7], [9, 9, 9, 9, 9, 9, 9, 9, 9, 9], [8, 8, 8, 8, 8, 8, 8, 8, 8, 8]], k = 1
var ans = areSimilar(mat, k)
console.log(ans)