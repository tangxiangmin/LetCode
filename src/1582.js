/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function (mat) {
    var row = mat.length;
    if (!row) return 0;
    var col = mat[0].length;

    // 先找到横排的
    var rowMap = {};
    for (var i = 0; i < row; ++i) {
        var pos = [];
        for (var j = 0; j < col; ++j) {
            if (mat[i][j] === 1) {
                pos.push(`${i},${j}`);
            }
        }
        // 只有1个
        if (pos.length === 1) {
            rowMap[pos[0]] = true;
        }
    }
    var colList = [];
    for (var i = 0; i < col; ++i) {
        var pos = [];
        for (var j = 0; j < row; ++j) {
            if (mat[j][i] === 1) {
                pos.push(`${j},${i}`);
            }
        }
        // 只有1个
        if (pos.length === 1) {
            colList = colList.concat(pos);
        }
    }

    var ans = 0;
    // 同时在rowList和colList里面的
    for (const pos of colList) {
        if (rowMap[pos]) {
            ans++;
        }
    }
    return ans;
};

var mat = [
    [1, 0, 0],
    [0, 0, 1],
    [1, 0, 0],
];
mat = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
];

mat = [
    [0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1],
];

var ans = numSpecial(mat);

console.log(ans);
