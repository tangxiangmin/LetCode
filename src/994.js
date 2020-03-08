/**
 * @param {number[][]} grid
 * @return {number}
 */
// 思路：bfs
var orangesRotting = function(grid) {
    var row = grid.length;
    if (!row) return 0;
    let col = grid[0].length;

    var next = []; // 保存下一轮被感染的橘子
    var visited = {};

    for (let i = 0; i < row; ++i) {
        for (let j = 0; j < col; ++j) {
            let cur = grid[i][j];
            if (cur === 2) {
                visited[`${i},${j}`] = true
                next.push({ i, j });
            }
        }
    }

    var ans = 0;
    while (next.length) {
        var len = next.length;
        ans++;
        for (var k = 0; k < len; ++k) {
            var { i, j } = next.shift();
            grid[i][j] = 2;
            addCell(i - 1, j);
            addCell(i + 1, j);
            addCell(i, j + 1);
            addCell(i, j - 1);
        }
    }

    for (let i = 0; i < row; ++i) {
        for (let j = 0; j < col; ++j) {
            let cur = grid[i][j];
            if (cur === 1) {
                return -1;
            }
        }
    }
    return ans ? ans - 1 : 0;

    
    function addCell(i, j) {
        if (i < 0 || i >= row || j < 0 || j >= col) return false;
        var key = `${i},${j}`;
        if (grid[i][j] === 1 && !visited[key]) {
            next.push({ i, j });
            visited[key]= true
            return true;
        }
        return false;
    }
};

var grid = [
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1]
];
grid = [
    [1], 
    [2], 
    [1], 
    [2]
];

var res = orangesRotting(grid);
console.log(res);
