
/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
    var row = grid.length
    if(!row) return []
    var col = grid[0].length

    let rows= []
    for(var i = 1; i < row - 1; ++i){
        let group = []
        for(var j = 1; j < col - 1; ++j){
            group.push(findLargest(i,j))
        }
        rows.push(group)
    }
    return rows

    function findLargest(i,j){
        var list = [
            grid[i-1][j-1], grid[i-1][j], grid[i-1][j+1],
            grid[i][j-1], grid[i][j], grid[i][j+1],
            grid[i+1][j-1], grid[i+1][j], grid[i+1][j+1],
    ]
    return Math.max(...list)
    }

};

var grid = [[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]]
grid = [[1,1,1,1,1],[1,1,1,1,1],[1,1,2,1,1],[1,1,1,1,1],[1,1,1,1,1]]
var ans = largestLocal(grid)
console.log(ans)