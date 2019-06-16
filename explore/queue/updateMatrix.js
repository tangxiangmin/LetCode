/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
    var row = matrix.length;
    var col = matrix[0].length;

    function bfs(sr, sc) {
        var queue = []; // 每个索引值保存每增加一步能够到达的位置
        queue.push([sr, sc]); // 将起始位置入队列

        var ans = 0;
        var visited = {};

        function append(cell) {
            var key = cell.join(",");
            if (visited[key]) {
                return;
            }
            visited[key] = true;
            queue.push(cell);
        }

        while (queue.length) {
            var len = queue.length;
            for (var i = 0; i < len; ++i) {
                var cell = queue.shift();
                var [r, c] = cell;
                if (matrix[r][c] === 0) {
                    return ans;
                }
                if (r - 1 >= 0) {
                    append([r - 1, sc]);
                }
                if (r + 1 < row) {
                    append([r + 1, sc]);
                }
                if (c - 1 >= 0) {
                    append([r, c - 1]);
                }
                if (c + 1 < col) {
                    append([r, c + 1]);
                }
            }
            ans++;
        }
        return ans;
    }

    var ans = bfs(9,0)

    var res = [];
    for (var i = 0; i < row; ++i) {
        res[i] = [];
        for (var j = 0; j < col; ++j) {
            res[i][j] = bfs(i, j);
        }
    }

    return res;
};

var matrix = [
    [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
    [0, 1, 1, 0, 1, 0, 1, 0, 1, 1],
    [0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
    [0, 1, 0, 1, 1, 0, 0, 0, 0, 1],
    [0, 0, 1, 0, 1, 1, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
    [1, 0, 0, 0, 1, 1, 1, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
    [1, 1, 1, 1, 0, 1, 0, 0, 1, 1]
];

var res = updateMatrix(matrix)

console.log(res)
