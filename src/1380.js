/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
    var row = matrix.length;
    if (!row) return [];
    var col = matrix[0].length;

    var rowMins = [];
    for (var i = 0; i < row; ++i) {
        var minIndex = 0;
        for (var j = 0; j < col; ++j) {
            if (matrix[i][j] < matrix[i][minIndex]) {
                minIndex = j;
            }
        }
        rowMins[i] = { row: i, col: minIndex };
    }

    var ans = [];

    for (var i = 0; i < col; ++i) {
        var maxIndex = 0;
        for (var j = 0; j < row; ++j) {
            if (matrix[j][i] > matrix[maxIndex][i]) {
                maxIndex = j;
            }
        }
        var target = rowMins.find(
            (item) => item.row === maxIndex && item.col === i
        );
        if (target) {
            ans.push(matrix[maxIndex][i]);
        }
    }
    return ans
};

var matrix = [
    [3, 7, 8],
    [9, 11, 13],
    [15, 16, 17],
];
matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
matrix = [[7,8],[1,2]]
var ans = luckyNumbers(matrix);

console.log(ans);
