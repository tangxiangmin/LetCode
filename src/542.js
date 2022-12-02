/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
// 思路1：BF，针对每一个cell，都去查询距离他最近的0元素
var updateMatrix = function (matrix) {
    let row = matrix.length;
    if (!row) return [];
    let col = matrix[0].length;
    let ans = new Array(row);
    for (let i = 0; i < row; ++i) {
        ans[i] = new Array(col);
    }

    for (let i = 0; i < row; ++i) {
        for (let j = 0; j < col; ++j) {
            ans[i][j] = findDis(i, j, 0, {});
        }
    }
    return ans;

    function findDis(i, j, sum, visited) {
        if (matrix[i][j] === 0) return sum;
        let key = `${i},${j}`;
        if (visited[key]) return Infinity;
        visited[key] = true;

        var arr = [];
        if (i > 0) {
            arr.push(findDis(i - 1, j, sum + 1, visited));
        }
        if (i < row - 1) {
            arr.push(findDis(i + 1, j, sum + 1, visited));
        }
        if (j > 0) {
            arr.push(findDis(i, j - 1, sum + 1, visited));
        }
        if (j < col - 1) {
            arr.push(findDis(i, j + 1, sum + 1, visited));
        }

        return Math.min(...arr);
    }
};

// 思路2：bfs
var updateMatrix = function (matrix) {
    var row = matrix.length;
    if (!row) return [];
    var col = matrix[0].length;

    function bfs(sr, sc) {
        var queue = []; // 每个索引值保存每增加一步能够到达的位置
        queue.push([sr, sc]); // 将起始位置入队列

        var ans = 0;
        var visited = {};

        function append(r, c) {
            if (r < 0 || r >= row) return;
            if (c < 0 || c >= col) return;

            var key = `${r},${c}`;
            if (visited[key]) {
                return;
            }
            visited[key] = true;
            queue.push([r, c]);
        }

        while (queue.length) {
            var len = queue.length;
            for (var i = 0; i < len; ++i) {
                var cell = queue.shift();
                var [r, c] = cell;
                if (matrix[r][c] === 0) {
                    return ans;
                }
                append(r - 1, c);
                append(r + 1, c);
                append(r, c - 1);
                append(r, c + 1);
            }
            ans++;
        }
        return ans;
    }

    var res = [];
    for (var i = 0; i < row; ++i) {
        res[i] = [];
        for (var j = 0; j < col; ++j) {
            res[i][j] = bfs(i, j);
        }
    }

    return res;
};

// 思路3：第2种方案是常规的bfs，从所有1开始，在某些极端的情况下加会超时，可以考虑从0开始来遍历
// 在只有1个0的情况下，直接从0遍历是最优的，题目中有多个0，则可以设置一个超级源0，距离其他0 的距离都是1，这样就可以解决了
var updateMatrix = function (matrix) {
    var m = matrix.length;
    if (!m) return [];
    var n = matrix[0].length;
    var queue = [];
    var dist = [];

    var dirs = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ];
    var visited = {};

    // 将所有0入队列
    for (var i = 0; i < m; ++i) {
        dist[i] = [];
        for (var j = 0; j < n; ++j) {
            if (matrix[i][j] === 0) {
                queue.push([i, j]);
                var key = `${i},${j}`;
                visited[key] = true;
            }
            dist[i][j] = 0;
        }
    }


    while (queue.length) {
        var [i, j] = queue.shift();
        // 这样每个0都只需要遍历他周围四个方向
        for (var d = 0; d < 4; ++d) {
            var ni = i + dirs[d][0];
            var nj = j + dirs[d][1];
            var key = `${ni},${nj}`;
            if (ni >= 0 && ni < m && nj >= 0 && nj < n && !visited[key]) {
                dist[ni][nj] = dist[i][j] + 1;
                queue.push([ni, nj]);
                visited[key] = true;
            }
        }
    }
    return dist;
};

var matrix = [
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1],
];

var res = updateMatrix(matrix);
console.log(res);
