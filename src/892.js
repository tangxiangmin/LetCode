/**
 * @param {number[][]} grid
 * @return {number}
 */
// 这个题意有点难理解

// [2]表示grid[0][0]堆2个
// [[1,2],[3,4]]意思为对grid[0][0]堆1个,grid[0][1]堆2个, grid[1][0]堆3个,grid[1][1]堆4个

// 然后求所有的表面积
// 思路：求每个柱体的表面积，然后减去贴合的面积
var surfaceArea = function(grid) {
    if(grid == null || grid.length < 1 || grid[0].length < 1) return 0;
    var row = grid.length
    var blocks = 0
    var cover = 0
    for(var i = 0; i < row; ++i){
        var col = grid[i].length
        for(var j = 0; j < col; ++j){
            blocks += grid[i][j]
            cover += grid[i][j] > 1 ? grid[i][j] -1 : 0;

            if(i > 0){
                cover += Math.min(grid[i-1][j],grid[i][j]);
            }
            if(j > 0){
                cover += Math.min(grid[i][j-1],grid[i][j]);
            }

        }
    }
    return blocks * 6 - cover * 2;
};