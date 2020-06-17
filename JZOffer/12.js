// 矩阵中的路径

// 请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。路径可以从矩阵中的任意一个格子开始，每一步可以在矩阵中向左，向右，向上，向下移动一个格子。如果一条路径经过了矩阵中的某一个格子，则该路径不能再进入该格子。
// 如下面矩阵包含bfce、但是不包括abfb
// a b t g
// c f c s
// j d e h

// 思路：利用回溯法，从首字符开始找到符合要求的坐标，然后向周围判断是否可以继续查找下一个字符
function solution(matrix, target) {
    var row = matrix.length;
    if (!row) return -1;
    var col = matrix[0].length;

    // 记录是否访问到某个坐标
    var visited = new Array(row);
    for (var i = 0; i < row; ++i) {
        visited[i] = new Array(col).fill(false);
    }

    for (var i = 0; i < row; ++i) {
        for (var j = 0; j < col; ++j) {
            if (find(i, j, 0)) {
                return true;
            }
        }
    }
    return false;

    function find(i, j, index) {
        if (index === target.length) return true;
        
        if (i < 0 || i >= row || j < 0 || j >= col) return;

        if (visited[i][j]) return false;

        visited[i][j] = true;
        if (matrix[i][j] === target[index]) {
            // 四个方向都没找到，则重置visited并返回false
            if (
                !find(i - 1, j, index + 1) &&
                !find(i, j - 1, index + 1) &&
                !find(i, j + 1, index + 1) &&
                !find(i + 1, j, index + 1)
            ) {
                visited[i][j] = false;
                return false;
            }
            return true;
        }
        return false;
    }
}

var arr = [
    ["a", "b", "t", "g"],
    ["c", "f", "c", "s"],
    ["j", "d", "e", "h"],
];
var res = solution(arr, "bfce");
var res = solution(arr, "abfb");

console.log(res);
