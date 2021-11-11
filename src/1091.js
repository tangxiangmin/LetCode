/**
 * @param {number[][]} grid
 * @return {number}
 */
// bfs
var shortestPathBinaryMatrix = function (grid) {
    var row = grid.length;
    var col = grid[0].length;
    if (grid[0][0] === 1) return -1;

    var path = [{ x: 0, y: 0, step: 1 }];

    var min = Infinity;

    var visited = {};
    while (path.length) {
        var len = path.length;
        for (var i = 0; i < len; ++i) {
            const { x, y, step } = path.shift();

            if (x === row - 1 && y === col - 1) {
                min = Math.min(min, step);
            } else {
                add(x - 1, y, step + 1);
                add(x + 1, y, step + 1);
                add(x, y - 1, step + 1);
                add(x, y + 1, step + 1);
                add(x - 1, y - 1, step + 1);
                add(x - 1, y + 1, step + 1);
                add(x + 1, y - 1, step + 1);
                add(x + 1, y + 1, step + 1);
            }
        }
    }
    return min === Infinity ? -1 : min;
    function add(x, y, step) {
        var key = `x${x}y${y}`;
        if (visited[key]) return;
        if (x < 0 || x >= row || y < 0 || y >= col) return;
        if (grid[x][y] === 1) return;
        visited[key] = true;

        path.push({ x, y, step });
    }
};

var grid = [
    [0, 1],
    [1, 0],
];
grid = [
    [0, 0, 0],
    [1, 1, 0],
    [1, 1, 0],
];
// grid = [
//     [1, 0, 0],
//     [1, 1, 0],
//     [1, 1, 0],
// ];
// grid = [[0]];
var ans = shortestPathBinaryMatrix(grid);
console.log(ans);
