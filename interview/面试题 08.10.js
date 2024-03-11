/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
    const row = image.length
    const col = image[0].length

    const target = image[sr][sc]
    if (target === newColor) return image
    function dfs(x, y) {
        if (x < 0 || x >= row || y < 0 || y >= col) {
            return
        }
        if (image[x][y] !== target) {
            return
        }
        image[x][y] = newColor
        dfs(x + 1, y)
        dfs(x - 1, y)
        dfs(x, y + 1)
        dfs(x, y - 1)
    }

    dfs(sr, sc)
    return image
};
var image = [[1, 1, 1], [1, 1, 0], [1, 0, 1]], sr = 1, sc = 1, newColor = 2
image = [[0, 0, 0], [0, 1, 1]], sr = 1, sc = 1, newColor = 1
var ans = floodFill(image, sr, sc, newColor)
console.log(JSON.stringify(ans))