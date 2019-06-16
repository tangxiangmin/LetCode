/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    var queue = [];
    var visited = {};
    var row = image.length;
    var col = image[0].length;

    function isSameColor(r, c, target) {
        if (r < 0 || r >= row) {
            return false;
        }
        if (c < 0 || c >= col) {
            return false;
        }

        var key = r + "," + c;
        return image[r][c] === target && !visited[key];
    }

    function append(r, c) {
        var key = r + "," + c;
        visited[key] = true;
        queue.push([r, c]);
    }

    queue.push([sr, sc]);

    while (queue.length) {
        var cur = queue[0];
        var [r, c] = cur;
        var color = image[r][c];
        if (isSameColor(r - 1, c, color)) {
            append(r - 1, c);
        }
        if (isSameColor(r + 1, c, color)) {
            append(r + 1, c);
        }
        if (isSameColor(r, c - 1, color)) {
            append(r, c - 1);
        }
        if (isSameColor(r, c + 1, color)) {
            append(r, c + 1);
        }
        image[r][c] = newColor
        queue.shift();
    }
    return image
};

var image = [[1, 1, 1], [1, 1, 0], [1, 0, 1]];
var sr = 1,
    sc = 1,
    newColor = 2;

var res = floodFill(image, sr, sc, newColor);
console.log(res)
