/**
 * https://leetcode-cn.com/explore/learn/card/queue-stack/217/queue-and-bfs/872/
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    var ans = 0;
    var rows = grid.length;
    if(!rows){
        return 0
    }
    
    var cols = grid[0].length;
    var visited = {};
    function createKey(i, j) {
        return i + "," + j;
    }
    function bfs(i, j) {
        var queue = [];
        queue.push({ i, j });
        while (queue.length) {
            var first = queue.shift();

            var currentI = first.i,
                currentJ = first.j;

            push(queue, currentI - 1, currentJ);
            push(queue, currentI + 1, currentJ);
            push(queue, currentI, currentJ - 1);
            push(queue, currentI, currentJ + 1);
        }
    }
    function push(queue, i, j) {
        //网格的边界条件
        if (i >= 0 && i < rows && j >= 0 && j < cols) {
            var key = createKey(i, j);
            if (grid[i][j] == "1" && !visited[key]) {
                visited[key] = true;
                queue.push({ i, j });
            }
        }
    }
    for (var i = 0; i < rows; ++i) {
        for (var j = 0; j < cols; ++j) {
            var key = createKey(i, j);
            // console.log(visited)
            if (grid[i][j] === "1" && !visited[key]) {
                ans++;
                
                bfs(i, j);
            }
        }
    }
    return ans;
};

// var grid = [
//     ["1", "1", "1", "1", "0"],
//     ["1", "1", "0", "1", "0"],
//     ["1", "1", "0", "0", "0"],
//     ["0", "0", "0", "0", "0"]
// ];

// var res = numIslands(grid)
// console.log(res)