/**
 * https://leetcode-cn.com/explore/learn/card/queue-stack/219/stack-and-dfs/883/
 * 使用栈实现
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    var row = grid.length;
    var col = grid[0].length;
    var visited = {}
    var ans = 0
    for (var i = 0; i < row; ++i) {
        for (var j = 0; j < col; ++j) {
            var key = createKey(i, j)
            if(grid[i][j] === '1' && !visited[key]){
                dfs(i, j);
                ans++
            }
        }
    }

    return ans
    function createKey(i, j) {
        return i + "," + j;
    }
    function dfs(sr, sc) {
        if (sr < 0 || sr >= row || sc < 0 || sc >= col) {
            return;
        }
        if (grid[sr][sc] === '0') {
            return;
        }
        var key = createKey(sr, sc)
        if(visited[key]){
            return 
        }
        visited[key] = true
        dfs(sr - 1, sc);
        dfs(sr + 1, sc);
        dfs(sr, sc + 1);
        dfs(sr, sc - 1);
    }
};
var grid = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
];

var res = numIslands(grid);
console.log(res);
