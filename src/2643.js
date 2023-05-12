/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function (mat) {
    var row = mat.length;
    var max = 0;
    var ansIndex = 0;
    for (var i = 0; i < row; ++i) {
        var count = 0;
        for (var num of mat[i]) {
            if (num === 1) {
                count++;
            }
        }
        if (max < count) {
            max = count;
            ansIndex = i;
        }
    }
    return [ansIndex, max];
};

var mat = [
    [0, 1],
    [1, 0],
];
mat = [[0,0,0],[0,1,1]]
mat = [[0,0],[1,1],[0,0]]
var ans = rowAndMaximumOnes(mat);
console.log(ans);
