/**
 * @param {number[][]} grid
 * @return {number}
 */
// 思路：分别找到所有的陆地和海洋，计算每一个海洋距离陆地的距离，取最大值
var maxDistance = function(grid) {
    var row = grid.length;
    if (!row) return 0;
    var col = grid[0].length;

    var land = [];
    var sea = [];
    for (var i = 0; i < row; ++i) {
        for (var j = 0; j < col; ++j) {
            let cell = { i, j };
            if (grid[i][j] === 1) {
                land.push(cell);
            } else {
                sea.push(cell);
            }
        }
    }

    var ans = -1;
    sea.forEach(pos1 => {
        // 保存当前海洋距离所有陆地的最小值和最大值
        // var max = -Infinity
        var min = Infinity;
        land.forEach(pos2 => {
            let dis = getDistance(pos1, pos2);
            // if(max < dis) max = dis
            if (min > dis) min = dis;
        });
        if (min !== Infinity && ans < min) ans = min;
    });
    return ans;

    function getDistance(pos1, pos2) {
        const { i: x1, j: y1 } = pos1;
        const { i: x2, j: y2 } = pos2;
        return Math.abs(x1 - x2) + Math.abs(y1 - y2);
    }
};

var grid = [
    [1, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];
// grid = [[1,0,1],[0,0,0],[1,0,1]]
grid = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];
var res = maxDistance(grid);
console.log(res);
