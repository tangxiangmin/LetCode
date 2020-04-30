/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
// 思路1：BF，针对每一个cell，都去查询距离他最近的0元素
var updateMatrix = function(matrix) {
    let row = matrix.length
    if(!row) return []
    let col = matrix[0].length
    let ans = new Array(row)
    for(let i = 0; i < row; ++i){
        ans[i] = new Array(col)
    }

    for(let i = 0; i < row; ++i){
        for(let j =0; j < col; ++j){
            ans[i][j] = findDis(i, j, 0, {})
        }
    }
    return ans

    function findDis(i, j, sum, visited){
        if(matrix[i][j] === 0) return sum
        let key = `${i},${j}`
        if(visited[key]) return Infinity
        visited[key]  = true

        var arr = []
        if(i >0){
            arr.push(findDis(i-1, j, sum+1, visited))
        }
        if(i < row-1){
            arr.push(findDis(i+1, j, sum+1, visited))
        }
        if(j > 0){
            arr.push(findDis(i, j-1, sum+1, visited))
        }
        if(j < col-1){
            arr.push(findDis(i, j+1, sum+1, visited))
        }

        return Math.min(...arr)
    }
}

// 思路2：bfs
var updateMatrix = function(matrix) {
    var row = matrix.length;
    if(!row) return []
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
   [0,0,0],
   [0,1,0],
   [1,1,1]
]
var res = updateMatrix(matrix)
console.log(res)