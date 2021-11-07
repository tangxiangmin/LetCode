/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
    var len = mat.length;

    var sum = 0;
    for (var i = 0; i < len; ++i) {
        sum += mat[i][i];

        if (len - i - 1 !== i) {
            sum += mat[i][len - i - 1];
        }
    }
    return sum
};

var mat = [[1,2,3],
[4,5,6],
[7,8,9]]

mat = [[1,1,1,1],
            [1,1,1,1],
            [1,1,1,1],
            [1,1,1,1]]

var ans = diagonalSum(mat)
console.log(ans)