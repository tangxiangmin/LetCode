/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    var r = matrix.length
    if (!r) {
        return 0
    }
    var c = matrix[0].length
    var max =  0 // 最大边长
    var dp = []

    for (var i = 0; i <= r; ++i) {
        dp[i] = []
        for (var j = 0; j <= c; ++j) {
            dp[i][j] = 0
        }
    }

    for (var i = 1; i <= r; ++i) {
        for (var j = 1; j <= c; ++j) {
            if (matrix[i - 1][j - 1] == '1') {
                // 表示以i,j坐标为正方形右下角的正方形
                dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], Math.min(dp[i - 1][j], dp[i][j - 1]));
                max = Math.max(max, dp[i][j], 1);
            }
        }
    }

    return max * max
};

var matrix = [
    [1, 0, 1, 0, 0],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 0, 0, 1, 0],
]
matrix =[['1', "1"]]

var res = maximalSquare(matrix)
console.log(res)


// dp[i][j]表示以第i行第j列为右下角所能构成的最大正方形边长, 则递推式为: 
// dp[i][j] = 1 + min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]);