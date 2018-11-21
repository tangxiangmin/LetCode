// 求一个立方体的投影的面积

var projectionArea = function (grid) {
    let num = grid.length
    let res = 0
    for(let i = 0; i < num; ++i){
        let maxRow = 0;
        let maxCol = 0;
        for(let j = 0; j < grid[i].length; ++j){
            if (grid[i][j] > 0) res++;  
            maxRow = Math.max(maxRow, grid[i][j]);
            maxCol = Math.max(maxCol, grid[i][j]);
        }
        res += maxRow + maxCol;
    }
    return res
};